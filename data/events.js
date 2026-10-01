/* ==========================================================================
   LOVB COACH SUMMIT — EVENT + SCHEDULE DATA
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change dates, times, sessions,
   speakers, rooms, or courts. The page layout reads everything from here.

   HOW A SCHEDULE ITEM WORKS
   {
     start: "09:00",              // 24-hour time, Central Time
     end:   "10:00",              // optional — leave out for a single moment
     type:  "session",            // session | court | education | social | special | logistics
     title: "Session Title",
     speaker: "Speaker Name",     // optional
     location: "Room 214",        // optional — shown as a big location label
     description: "Short line.",  // optional — keep it to one sentence
     icon: "plane",               // optional — override the icon (clock, court, notebook, glass, star, people, plane)
     tbc: true                    // true = NOT CONFIRMED YET (shows a small "TBC" tag)
   }

   SIMULTANEOUS SESSIONS (e.g. Court 1 / Court 2 / Court 3)
   Use `tracks` instead of title/speaker/location:
   {
     start: "10:15", end: "11:45", type: "court", title: "On-Court Sessions",
     tracks: [
       { location: "Court 1", title: "...", speaker: "..." },
       { location: "Court 2", title: "...", speaker: "..." }
     ],
     tbc: true
   }

   ⚠️ Everything marked `tbc: true` is PLACEHOLDER content.
   When a detail is final, update it and change `tbc` to false (or delete it).
   ========================================================================== */

window.SUMMIT = window.SUMMIT || {};

/* Set to false to hide the small "TBC" tags on the live site. */
window.SUMMIT.SHOW_TBC_TAGS = true;

/* Shared venue info (used by both events). */
window.SUMMIT.VENUE = {
  name: "Henry B. González Convention Center",
  city: "San Antonio, Texas",
  // Search link only — no street address has been confirmed for this site yet.
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Henry+B.+Gonzalez+Convention+Center+San+Antonio+TX"
};

window.SUMMIT.EVENTS = [
  /* ======================================================================
     LOVB COACH SUMMIT — December 15–17, 2026
     ====================================================================== */
  {
    id: "coach",
    name: "LOVB Coach Summit",
    shortName: "Coach Summit",
    dateRange: "December 15–17, 2026",
    shortDates: "Dec 15–17",
    logo: "assets/logos/coach-summit-indigo.png",
    days: [
      {
        date: "2026-12-15",
        items: [
          { start: "12:00", end: "15:00", type: "logistics", title: "Arrival + Check-In",
            location: "Check-In Location TBA", description: "Check in and grab your Summit goodie bag.", tbc: true },
          { start: "15:30", end: "16:00", type: "special", title: "Welcome",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "16:00", end: "18:00", type: "session", title: "Coach Summit Programming",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "18:30", end: "19:30", type: "social", title: "Cocktails + Networking",
            location: "Location TBA", tbc: true },
          { start: "19:30", end: "21:30", type: "special", title: "Banquet",
            location: "Location TBA", tbc: true }
        ]
      },
      {
        date: "2026-12-16",
        items: [
          { start: "09:00", end: "10:00", type: "session", title: "Coach Summit Session",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "10:15", end: "11:45", type: "court", title: "On-Court Sessions",
            tracks: [
              { location: "Court 1", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 2", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 3", title: "On-Court Session", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "13:00", end: "14:00", type: "education", title: "Educational Sessions",
            tracks: [
              { location: "Room TBA", title: "Educational Session A", speaker: "Speaker TBA" },
              { location: "Room TBA", title: "Educational Session B", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "14:15", end: "15:45", type: "court", title: "On-Court Sessions",
            tracks: [
              { location: "Court 1", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 2", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 3", title: "On-Court Session", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "17:00", end: "18:30", type: "social", title: "Networking",
            location: "Location TBA", tbc: true }
        ]
      },
      {
        date: "2026-12-17",
        items: [
          { start: "09:00", end: "10:00", type: "session", title: "Coach Summit Session",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "10:15", end: "11:45", type: "court", title: "On-Court Sessions",
            tracks: [
              { location: "Court 1", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 2", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 3", title: "On-Court Session", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "12:00", end: "13:00", type: "special", title: "Closing Programming",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "14:00", end: "17:00", type: "special", title: "Semifinals",
            location: "Location TBA", tbc: true },
          { start: "17:00", type: "logistics", title: "Coach Summit Concludes", icon: "plane",
            description: "Thanks for coming. Safe travels!", tbc: true }
        ]
      }
    ]
  },

  /* ======================================================================
     LOVB JUNIOR COACH SUMMIT — December 17–20, 2026
     (Separate event. Do not mix these items into the Coach Summit above.)
     ====================================================================== */
  {
    id: "junior",
    name: "LOVB Junior Coach Summit",
    shortName: "Junior Coach Summit",
    dateRange: "December 17–20, 2026",
    shortDates: "Dec 17–20",
    logo: "assets/logos/junior-summit-pink.png",
    days: [
      {
        date: "2026-12-17",
        items: [
          { start: "14:00", end: "17:00", type: "logistics", title: "Junior Coach Arrival + Check-In",
            location: "Check-In Location TBA", description: "Check in and grab your Summit goodie bag.", tbc: true },
          { start: "18:00", end: "19:30", type: "special", title: "Opening Programming",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true }
        ]
      },
      {
        date: "2026-12-18",
        items: [
          { start: "09:00", end: "10:00", type: "session", title: "Junior Coach Summit Session",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "10:15", end: "11:45", type: "court", title: "On-Court Sessions",
            tracks: [
              { location: "Court 1", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 2", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 3", title: "On-Court Session", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "13:00", end: "14:00", type: "education", title: "Educational Sessions",
            tracks: [
              { location: "Room TBA", title: "Educational Session A", speaker: "Speaker TBA" },
              { location: "Room TBA", title: "Educational Session B", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "19:00", end: "21:00", type: "social", title: "adidas Event + Party",
            location: "Location TBA", tbc: true }
        ]
      },
      {
        date: "2026-12-19",
        items: [
          { start: "09:00", end: "10:00", type: "session", title: "Junior Coach Summit Session",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "10:15", end: "11:45", type: "court", title: "On-Court Sessions",
            tracks: [
              { location: "Court 1", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 2", title: "On-Court Session", speaker: "Speaker TBA" },
              { location: "Court 3", title: "On-Court Session", speaker: "Speaker TBA" }
            ], tbc: true },
          { start: "13:00", end: "15:00", type: "session", title: "Junior Coach Summit Programming",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true }
        ]
      },
      {
        date: "2026-12-20",
        items: [
          { start: "10:00", end: "11:00", type: "special", title: "Closing Programming",
            speaker: "Speaker TBA", location: "Room TBA", tbc: true },
          { start: "13:00", end: "16:00", type: "special", title: "Championship",
            location: "Location TBA", tbc: true },
          { start: "16:00", type: "logistics", title: "Junior Coach Summit Concludes", icon: "plane",
            description: "Thanks for coming. Safe travels!", tbc: true }
        ]
      }
    ]
  }
];
