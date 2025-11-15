import React, { useMemo, useState } from "react";
import { scheduleData, type Room, type Session } from "./scheduleData-new";

// Convert "HH:MM" time string to ISO date string
const timeToISO = (timeStr: string): string => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
};

// Convert 24-hour time to 12-hour format with AM/PM
const formatTime12Hour = (dateString: string): string => {
  const date = new Date(dateString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes.toString().padStart(2, '0');
  return `${hours}:${minutesStr} ${ampm}`;
};

// Convert schedule data to use ISO strings
const rooms = scheduleData.rooms;
const sessions: Session[] = scheduleData.sessions.map(session => ({
  ...session,
  start: timeToISO(session.start),
  end: timeToISO(session.end),
}));

// Type for merged sessions that span multiple rooms
type MergedSession = Session & {
  roomIds: string[];
  originalIds: string[];
};

// Helper to calculate position and height based on time
const getTimePosition = (time: string, startHour: number, pixelsPerHour: number) => {
  const date = new Date(time);
  const hours = date.getHours() + date.getMinutes() / 60;
  return (hours - startHour) * pixelsPerHour;
};

// Detect and merge sessions with same time and title across different rooms
const detectMergedSessions = (sessions: Session[], displayedRoomIds: string[]): {
  mergedSessions: MergedSession[];
  hiddenSessionIds: Set<string>;
} => {
  const mergedSessions: MergedSession[] = [];
  const hiddenSessionIds = new Set<string>();
  const processedSessions = new Set<string>();

  // Group sessions by time+title key
  const sessionGroups = new Map<string, Session[]>();
  sessions.forEach(session => {
    if (displayedRoomIds.includes(session.roomId)) {
      const key = `${session.start}|${session.end}|${session.title}`;
      if (!sessionGroups.has(key)) {
        sessionGroups.set(key, []);
      }
      sessionGroups.get(key)!.push(session);
    }
  });

  // Find groups with multiple rooms and merge them
  sessionGroups.forEach((groupSessions) => {
    if (groupSessions.length > 1) {
      // Sort by room order
      const sortedSessions = groupSessions.sort((a, b) => {
        return displayedRoomIds.indexOf(a.roomId) - displayedRoomIds.indexOf(b.roomId);
      });

      // Check if rooms are consecutive in the displayed rooms
      const roomIndices = sortedSessions.map(s => displayedRoomIds.indexOf(s.roomId));
      const isConsecutive = roomIndices.every((idx, i) => {
        if (i === 0) return true;
        return idx === roomIndices[i - 1] + 1;
      });

      if (isConsecutive) {
        // Create merged session
        const merged: MergedSession = {
          ...sortedSessions[0],
          roomIds: sortedSessions.map(s => s.roomId),
          originalIds: sortedSessions.map(s => s.id),
        };
        mergedSessions.push(merged);
        
        // Mark all original sessions as hidden
        sortedSessions.forEach(s => {
          hiddenSessionIds.add(s.id);
          processedSessions.add(s.id);
        });
      }
    }
  });

  return { mergedSessions, hiddenSessionIds };
};

type SessionLayout = {
  session: Session;
  column: number;
  totalColumns: number;
};

// Helper to detect overlapping sessions and calculate layout
const calculateSessionLayout = (sessions: Session[]): SessionLayout[] => {
  const layouts: SessionLayout[] = [];
  const sortedSessions = [...sessions].sort((a, b) => 
    new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  // Track which column each session is in and which columns are occupied at what times
  const columnAssignments = new Map<string, number>();
  
  for (const session of sortedSessions) {
    const sessionStart = new Date(session.start).getTime();
    const sessionEnd = new Date(session.end).getTime();
    
    // Find all sessions that overlap with this one
    const overlapping = sortedSessions.filter(other => {
      if (other.id === session.id) return false;
      const otherStart = new Date(other.start).getTime();
      const otherEnd = new Date(other.end).getTime();
      // Check for time overlap
      return sessionStart < otherEnd && sessionEnd > otherStart;
    });
    
    // Find the first available column
    const occupiedColumns = new Set(
      overlapping
        .filter(s => columnAssignments.has(s.id))
        .map(s => columnAssignments.get(s.id)!)
    );
    
    let column = 0;
    while (occupiedColumns.has(column)) {
      column++;
    }
    columnAssignments.set(session.id, column);
    
    // Calculate total columns needed (max column + 1 among overlapping sessions)
    const allOverlappingColumns = Array.from(occupiedColumns);
    allOverlappingColumns.push(column);
    const totalColumns = Math.max(...allOverlappingColumns) + 1;
    
    layouts.push({
      session,
      column,
      totalColumns
    });
  }
  
  // Update totalColumns for all overlapping groups to be consistent
  const updated: SessionLayout[] = layouts.map(layout => {
    const sessionStart = new Date(layout.session.start).getTime();
    const sessionEnd = new Date(layout.session.end).getTime();
    
    // Find max totalColumns among all overlapping sessions
    const maxColumns = Math.max(...layouts
      .filter(other => {
        const otherStart = new Date(other.session.start).getTime();
        const otherEnd = new Date(other.session.end).getTime();
        return sessionStart < otherEnd && sessionEnd > otherStart;
      })
      .map(l => l.totalColumns)
    );
    
    return {
      ...layout,
      totalColumns: maxColumns
    };
  });
  
  return updated;
};

const SessionCard: React.FC<{ 
  s: Session; 
  startHour: number;
  pixelsPerHour: number;
  column?: number;
  totalColumns?: number;
}> = ({ s, startHour, pixelsPerHour, column = 0, totalColumns = 1 }) => {
  const pill =
    s.type === "Workshop" ? "bg-orange-100 text-orange-800" :
    s.type === "Panel" ? "bg-purple-100 text-purple-800" :
    s.type === "Break" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800";
  
  const startPos = getTimePosition(s.start, startHour, pixelsPerHour);
  const endPos = getTimePosition(s.end, startHour, pixelsPerHour);
  const height = endPos - startPos;
  
  // Calculate width and left position based on column layout
  const widthPercent = 100 / totalColumns;
  const leftPercent = (column * widthPercent);
  
  return (
    <div
      style={{
        position: 'absolute',
        top: `${startPos}px`,
        left: `calc(${leftPercent}% + 4px)`,
        width: `calc(${widthPercent}% - 8px)`,
        height: `${height}px`,
        minHeight: '30px'
      }}
      className="rounded-lg border-2 border-gray-300 p-1.5 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
    >
      {s.speaker && <div className="text-[10px] sm:text-base font-medium leading-tight">{s.title}</div>}
      <div className="text-[9px] sm:text-sm text-gray-600 mt-0.5">{s.speaker}</div>
      <div className="flex items-center gap-1 mt-0.5 flex-wrap">
        <div className={`inline-flex px-1 py-0.5 text-[8px] sm:text-[9px] rounded-full ${pill}`}>{s.type ?? "Talk"}</div>
        <div className="text-[8px] sm:text-[11px] text-gray-500">
          {formatTime12Hour(s.start)}–{formatTime12Hour(s.end)}
        </div>
      </div>
    </div>
  );
};

const MergedSessionCard: React.FC<{
  session: MergedSession;
  displayedRoomIds: string[];
  startHour: number;
  pixelsPerHour: number;
}> = ({ session, displayedRoomIds, startHour, pixelsPerHour }) => {
  const pill =
    session.type === "Workshop" ? "bg-blue-100 text-blue-800" :
    session.type === "Panel" ? "bg-purple-100 text-purple-800" :
    session.type === "Break" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800";
  
  const startPos = getTimePosition(session.start, startHour, pixelsPerHour);
  const endPos = getTimePosition(session.end, startHour, pixelsPerHour);
  const height = endPos - startPos;

  // Calculate which grid columns this spans
  const firstRoomIdx = displayedRoomIds.indexOf(session.roomIds[0]);
  const lastRoomIdx = displayedRoomIds.indexOf(session.roomIds[session.roomIds.length - 1]);
  const gridColumnStart = firstRoomIdx + 2; // +2 because time column is first
  const gridColumnEnd = lastRoomIdx + 3; // +3 for end position

  return (
    <div
      style={{
        gridColumnStart,
        gridColumnEnd,
        position: 'relative',
        pointerEvents: 'auto'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: `${startPos}px`,
          left: '8px',
          right: '8px',
          height: `${height}px`,
          minHeight: '30px',
          zIndex: 10,
        }}
        className="rounded-lg border-2 border-gray-300 p-1.5 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
      >
        {session.speaker && <div className="text-[10px] sm:text-xs font-semibold leading-tight">{session.speaker}</div>}
        <div className="text-[9px] sm:text-[10px] text-gray-600 mt-0.5 line-clamp-2">{session.title}</div>
        <div className="flex items-center justify-center gap-1 mt-0.5 flex-wrap">
          <div className={`inline-flex px-1 py-0.5 text-[8px] sm:text-[9px] rounded-full ${pill}`}>{session.type ?? "Talk"}</div>
          <div className="text-[8px] sm:text-[9px] text-gray-500">
            {formatTime12Hour(session.start)}–{formatTime12Hour(session.end)}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomColumn: React.FC<{ 
  room: Room; 
  sessions: Session[]; 
  startHour: number;
  endHour: number;
  pixelsPerHour: number;
  hiddenSessionIds?: Set<string>;
  showHeader?: boolean;
}> = ({ room, sessions, startHour, endHour, pixelsPerHour, hiddenSessionIds, showHeader = true }) => {
  const totalHeight = (endHour - startHour) * pixelsPerHour;
  
  // Generate hourly grid lines
  const hours: number[] = [];
  for (let h = startHour; h <= endHour; h++) {
    hours.push(h);
  }

  // Filter out hidden sessions (those that are merged)
  const visibleSessions = sessions.filter(s => !hiddenSessionIds?.has(s.id));

  // Calculate layout for overlapping sessions
  const sessionLayouts = calculateSessionLayout(visibleSessions);

  return (
    <div className="flex flex-col">
      {showHeader && (
        <div className="font-semibold mb-2 text-lg sm:text-xl lg:text-2xl px-2 text-center">
          {room.name}
        </div>
      )}
      <div
        style={{ height: `${totalHeight}px` }}
        className="relative rounded-lg border-2 border-gray-200 bg-white"
      >
        {/* Hour grid lines */}
        {hours.map((hour, i) => (
          <div
            key={hour}
            style={{ top: `${i * pixelsPerHour}px` }}
            className="absolute left-0 right-0 border-t border-gray-200"
          />
        ))}
        
        {/* Sessions positioned by time with overlap handling */}
        {sessionLayouts.map(layout => (
          <SessionCard 
            key={layout.session.id} 
            s={layout.session} 
            startHour={startHour}
            pixelsPerHour={pixelsPerHour}
            column={layout.column}
            totalColumns={layout.totalColumns}
          />
        ))}
      </div>
    </div>
  );
};

const TimeColumn: React.FC<{ startHour: number; endHour: number; pixelsPerHour: number }> = ({ 
  startHour, 
  endHour, 
  pixelsPerHour 
}) => {
  const hours: number[] = [];
  for (let h = startHour; h <= endHour; h++) {
    hours.push(h);
  }
  
  const formatHour12 = (hour: number): string => {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:00 ${ampm}`;
  };
  
  return (
    <div className="flex flex-col pt-8 lg:pt-10">
      <div className="relative" style={{ height: `${(endHour - startHour) * pixelsPerHour}px` }}>
        {hours.map((hour, i) => (
          <div
            key={hour}
            style={{ top: `${i * pixelsPerHour}px` }}
            className="absolute right-1 lg:right-2 -translate-y-9 md:-translate-y-11 text-[10px] sm:text-xs text-gray-500 font-medium"
          >
            {formatHour12(hour)}
          </div>
        ))}
      </div>
    </div>
  );
};

type ViewMode = 'pair1' | 'pair2';

export default function ConferenceScheduler() {
  const START_HOUR = 11;
  const END_HOUR = 17;
  const PIXELS_PER_HOUR = 230;
  const MOBILE_PIXELS_PER_HOUR = 220;
  const [viewMode, setViewMode] = useState<ViewMode>('pair1');

  const sessionsByRoom = useMemo(() => {
    const m: Record<string, Session[]> = {};
    rooms.forEach(r => { m[r.id] = []; });
    sessions.forEach(s => { (m[s.roomId] ||= []).push(s); });
    return m;
  }, []);

  // Define room pairs
  const roomPairs = {
    pair1: ['r1', 'r2'], // ENB 118 & ENB 116
    pair2: ['r3', 'r4'], // Hall of Flags & ENB 109
  };
  
  const getDisplayedRooms = () => {
    if (viewMode === 'pair1') return rooms.filter(r => roomPairs.pair1.includes(r.id));
    return rooms.filter(r => roomPairs.pair2.includes(r.id));
  };
  
  const displayedRooms = getDisplayedRooms();

  // Calculate merged sessions for mobile view
  const mobileDisplayedRoomIds = displayedRooms.map(r => r.id);
  const { mergedSessions: mobileMergedSessions, hiddenSessionIds: mobileHiddenIds } = useMemo(() => {
    return detectMergedSessions(sessions, mobileDisplayedRoomIds);
  }, [mobileDisplayedRoomIds]);

  // Calculate merged sessions for desktop view (all rooms)
  const desktopDisplayedRoomIds = rooms.map(r => r.id);
  const { mergedSessions: desktopMergedSessions, hiddenSessionIds: desktopHiddenIds } = useMemo(() => {
    return detectMergedSessions(sessions, desktopDisplayedRoomIds);
  }, [desktopDisplayedRoomIds]);

  return (
    <div className="max-w-[1800px] mx-auto mb-10">
      {/* Mobile: Fixed header and view selector */}
      <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-200 pb-3">

        {/* Mobile: View mode selector */}
        <div className="px-3 pt-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setViewMode('pair1')}
              className={`w-[15rem] h-[4rem] rounded border-2 cursor-pointer ${
                viewMode === 'pair1'
                  ? 'bg-[#FFA300] border-[#FFA300]'
                  : 'bg-white border-[#FFA300]'
              }`}
            >
              <h2 className="text-base font-bold text-black text-balance text-center">ENB 118 + 116</h2>
            </button>
            <button
              onClick={() => setViewMode('pair2')}
              className={`w-[15rem] h-[4rem] rounded border-2 cursor-pointer ${
                viewMode === 'pair2'
                  ? 'bg-[#FFA300] border-[#FFA300]'
                  : 'bg-white border-[#FFA300]'
              }`}
            >
              <h2 className="text-base font-bold text-black text-balance text-center">Hall of Flags + ENB 109</h2>
            </button>
          </div>
        </div>

        {/* Mobile: Room names */}
        <div className="px-3 pt-2">
          <div className="grid grid-cols-[50px_1fr_1fr] gap-2 text-center">
            <div></div>
            {displayedRooms.map((room) => (
              <div key={room.id} className="font-semibold text-lg px-2 text-center">
                {room.name}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Mobile: Dynamic room view (always two rooms) */}
      <div className={`lg:hidden px-3 pt-3 overflow-y-auto max-h-[600px] border-2 border-gray-200 rounded-lg mx-3 shadow-sm`}>
        <div className={`relative`}>
          <div className={`grid gap-1 ${
            viewMode === 'pair2'
              ? 'grid-cols-[20px_1.25fr_0.75fr]'
              : 'grid-cols-[20px_1fr_1fr]'
          }`}>
            <TimeColumn startHour={START_HOUR} endHour={END_HOUR} pixelsPerHour={MOBILE_PIXELS_PER_HOUR} />
            {displayedRooms.map((room) => (
              <div key={room.id}>
                <RoomColumn 
                  room={room} 
                  sessions={sessionsByRoom[room.id] || []} 
                  startHour={START_HOUR}
                  endHour={END_HOUR}
                  pixelsPerHour={MOBILE_PIXELS_PER_HOUR}
                  hiddenSessionIds={mobileHiddenIds}
                  showHeader={false}
                />
              </div>
            ))}
          </div>
          {/* Merged sessions overlay for mobile */}
          {mobileMergedSessions.length > 0 && (
            <div className="absolute left-0 right-0 pointer-events-none" style={{ top: '0px' }}>
              <div className="grid gap-2 grid-cols-[50px_1fr_1fr]">
                <div></div>
                {mobileMergedSessions.map((session) => (
                  <MergedSessionCard
                    key={session.id}
                    session={session}
                    displayedRoomIds={mobileDisplayedRoomIds}
                    startHour={START_HOUR}
                    pixelsPerHour={MOBILE_PIXELS_PER_HOUR}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: All rooms side-by-side */}
      <div className="hidden lg:block mx-6 border-2 border-gray-200 rounded-lg shadow-sm">
        {/* Fixed headers */}
        <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 bg-white border-b-2 border-gray-200 rounded-t-lg sticky top-0 z-20">
          <div></div>
          {rooms.map((room) => (
            <div key={room.id} className="font-semibold text-lg sm:text-xl lg:text-2xl px-2 text-center">
              {room.name}
            </div>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="px-6 overflow-y-auto max-h-[600px]">
          <div className="relative">
            <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] gap-4">
              <TimeColumn startHour={START_HOUR} endHour={END_HOUR} pixelsPerHour={PIXELS_PER_HOUR} />
              
              {rooms.map((room) => (
                <div key={room.id}>
                  <RoomColumn 
                    room={room} 
                    sessions={sessionsByRoom[room.id] || []} 
                    startHour={START_HOUR}
                    endHour={END_HOUR}
                    pixelsPerHour={PIXELS_PER_HOUR}
                    hiddenSessionIds={desktopHiddenIds}
                    showHeader={false}
                  />
                </div>
              ))}
            </div>
            {/* Merged sessions overlay for desktop */}
            {desktopMergedSessions.length > 0 && (
              <div className="absolute left-0 right-0 pointer-events-none" style={{ top: '0px' }}>
                <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] gap-4">
                  <div></div>
                  {desktopMergedSessions.map((session) => (
                    <MergedSessionCard
                      key={session.id}
                      session={session}
                      displayedRoomIds={desktopDisplayedRoomIds}
                      startHour={START_HOUR}
                      pixelsPerHour={PIXELS_PER_HOUR}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
