export interface TrackItem {
    title: string;
    type: string;
    description: string;
}

export interface ScheduleItem {
    time: string;
    track1: TrackItem | null;
    track2: TrackItem | null;
    track3: TrackItem | null;
}

export const scheduleData: ScheduleItem[] = [
    {
        "time": "11:00 AM - 11:40 AM",
        "track1": {
            "title": "Check-in",
            "type": "General",
            "description": "Connect with fellow attendees over coffee and get ready for the day"
        },
        "track2": null,
        "track3": {
            "title": "Networking",
            "type": "General",
            "description": "Network with company representatives and explore opportunities"
        }
    },
    {
        "time": "12:00 PM - 12:30 PM",
        "track1": {
            "title": "Mrinal Karvir",
            "type": "Lecture",
            "description": "The Last Mile of Generative AI: Turning Ideas into Impact at Enterprise Scale"
        },
        "track2": {
            "title": "Israel Vega",
            "type": "Lecture",
            "description": "TBA"
        },
        "track3": {
            "title": "Networking",
            "type": "General",
            "description": "Network with company representatives and explore opportunities"
        }
    },
    {
        "time": "12:45 PM - 1:30 PM",
        "track1": {
            "title": "Yasmine Gardiner",
            "type": "Workshop",
            "description": "Vibe coding workshop"
        },
        "track2": {
            "title": "Raghuvan Lakshmana",
            "type": "Workshop",
            "description": "Interactive Document Search Using a Custom AI model"
        },
        "track3": {
            "title": "Networking",
            "type": "General",
            "description": "Network with company representatives and explore opportunities"
        }
    },
    {
        "time": "1:30 PM - 2:00 PM",
        "track1": null,
        "track2": null,
        "track3": {
            "title": "Lunch",
            "type": "General",
            "description": "Refuel and network with speakers and participants during the lunch break"
        }
    },
    {
        "time": "2:00 PM - 2:45 PM",
        "track1": {
            "title": "Anna Bakhvalova",
            "type": "Lecture",
            "description": "AI's Impact on Marketing: Trends and Anti-trends"
        },
        "track2": {
            "title": "Joe Blankenship",
            "type": "Lecture",
            "description": "Playing with AI: Gamification for Endangered Language Models"
        },
        "track3": {
            "title": "Headshots",
            "type": "General",
            "description": "Get a professional headshot taken for LinkedIn or your portfolio"
        }
    },
    {
        "time": "3:00 PM - 3:30 PM",
        "track1": {
            "title": "Antra Malhotra & Sutap Chatterjee",
            "type": "Lecture",
            "description": "TBA"
        },
        "track2": {
            "title": "Subhajit Paul",
            "type": "Lecture",
            "description": "AI application in ERP: Effective Mobile Material Placement in Warehouse using AI/ML"
        },
        "track3": {
            "title": "Headshots",
            "type": "General",
            "description": "Get a professional headshot taken for LinkedIn or your portfolio"
        }
    },
    {
        "time": "3:40 PM - 4:10 PM",
        "track1": {
            "title": "Mrunal Gangrade",
            "type": "Lecture",
            "description": "TBA"
        },
        "track2": {
            "title": "Reginald Davis",
            "type": "Lecture",
            "description": "Copilot in Action: Real-World AI Use Cases in Solutions"
        },
        "track3": {
            "title": "Headshots",
            "type": "General",
            "description": "Get a professional headshot taken for LinkedIn or your portfolio"
        }
    },
    {
        "time": "4:15 PM - 5:00 PM",
        "track1": {
            "title": `"Careers in Tech" Panel`,
            "type": "Panel",
            "description": "Panel Moderator: Michael Viron <br> <br> Panelists: Mrinal Karvir, Reginald Davis, Anna Bakhvalova, Lenar Mukhamadiev"
        },
        "track2": {
            "title": `Networking session`,
            "type": "General",
            "description": ""
        },
        "track3": null
    }
];
