export type Track = { id: string; name: string };
export type Room = { id: string; name: string };
export type Session = {
  id: string;
  title: string;
  speaker?: string;
  start: string; // Format: "HH:MM" (24-hour)
  end: string;   // Format: "HH:MM" (24-hour)
  roomId: string;
  type?: "Talk" | "Panel" | "Workshop" | "Break";
};

export const scheduleData = {
  rooms: [
    { id: "r1", name: "ENB 118" },
    { id: "r2", name: "ENB 116" },
    { id: "r3", name: "Hall of Flags" },
    { id: "r4", name: "ENB 109" },
  ] as Room[],

  sessions: [
    // ENB 118
    {
      id: "1",
      title: "The Last Mile of Generative AI: Turning Ideas into Impact at Enterprise Scale",
      speaker: "Mrinal Karvir",
      start: "11:50",
      end: "12:30",
      roomId: "r1",
      type: "Talk",
    },
    {
      id: "2",
      title: "Vibe coding workshop",
      speaker: "Yasmine Gardiner",
      start: "12:45",
      end: "13:30",
      roomId: "r2",
      type: "Workshop",
    },
    {
      id: "3",
      title: "AI's Impact on Marketing: Trends and Anti-trends",
      speaker: "Anna Bakhvalova",
      start: "14:15",
      end: "14:45",
      roomId: "r2",
      type: "Talk",
    },
    {
      id: "4",
      title: "Building Applied AI Solutions: From Experimentation to Enterprise Impact",
      speaker: "Antra Malhotra & Sutap Chatterjee",
      start: "15:00",
      end: "15:30",
      roomId: "r1",
      type: "Talk",
    },
    {
      id: "5",
      title: "Bridging the Gap Between Black Box Models and Business Risk: Explainable AI in Regulated Industries",
      speaker: "Mrunal Gangrade",
      start: "15:40",
      end: "16:10",
      roomId: "r2",
      type: "Talk",
    },
    {
      id: "6",
      title: "Moderated panel on career paths, hiring expectations, and practical advice for early-career engineers",
      speaker: "Careers in Tech Panel",
      start: "16:15",
      end: "17:00",
      roomId: "r1",
      type: "Panel",
    },

    // ENB 116
    {
      id: "7",
      title: "Measuring the success of AI projects",
      speaker: "Israel Vega",
      start: "11:50",
      end: "12:30",
      roomId: "r2",
      type: "Talk",
    },
    {
      id: "8",
      title: "Interactive Document Search Using a Custom AI model",
      speaker: "Raghuvan Lakshmana",
      start: "12:45",
      end: "13:30",
      roomId: "r1",
      type: "Workshop",
    },
    {
      id: "9",
      title: "Playing with AI: Gamification for Endangered Language Models",
      speaker: "Joe Blankenship",
      start: "14:15",
      end: "14:45",
      roomId: "r1",
      type: "Talk",
    },
    {
      id: "10",
      title: "AI application in ERP: Effective Mobile Material Placement in Warehouse using AI/ML",
      speaker: "Subhajit Paul",
      start: "15:00",
      end: "15:30",
      roomId: "r2",
      type: "Talk",
    },
    {
      id: "11",
      title: "Copilot in Action: Real-World AI Use Cases in Solutions",
      speaker: "Reginald Davis",
      start: "15:40",
      end: "16:10",
      roomId: "r1",
      type: "Talk",
    },
    {
      id: "12",
      title: "Open mixer to recap key takeaways and swap contacts",
      speaker: "Networking session",
      start: "16:15",
      end: "17:00",
      roomId: "r2",
      type: "Break",
    },

    // Hall of Flags
    {
      id: "13",
      title: "Connect with fellow attendees over coffee and donuts",
      speaker: "Check-in & Network",
      start: "11:00",
      end: "11:50",
      roomId: "r3",
      type: "Break",
    },
    {
      id: "15",
      title: "Network with companies and local tech community representatives; explore new opportunities",
      speaker: "Tabling",
      start: "11:00",
      end: "13:30",
      roomId: "r3",
      type: "Break",
    },
    {
      id: "16",
      title: "Refuel and network with speakers and participants during the lunch break",
      speaker: "Lunch",
      start: "13:30",
      end: "14:15",
      roomId: "r4",
      type: "Break",
    },

    // ENB 109
    {
      id: "17",
      title: "Get a professional headshot taken for LinkedIn or your portfolio",
      speaker: "Professional Headshots",
      start: "14:00",
      end: "17:00",
      roomId: "r3",
      type: "Break",
    },
    {
      id: "18",
      title: "Network with companies and local tech community representatives; explore new opportunities",
      speaker: "Tabling",
      start: "14:30",
      end: "15:30",
      roomId: "r3",
      type: "Break",
    },
  ] as Session[],
};

