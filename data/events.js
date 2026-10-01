/* ==========================================================================
   LOVB COACH SUMMIT — EVENT + SCHEDULE DATA
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to change dates, times, sessions,
   speakers, rooms, or courts. The page layout reads everything from here.

   Source: 2026 Summit room/schedule Google Sheet.

   HOW A SCHEDULE ITEM WORKS
   {
     start: "09:00",              // 24-hour time, Central Time
     end:   "10:00",              // optional — leave out for a single moment
     timeLabel: "Morning",        // optional — shown instead of the time (start still sets the order)
     type:  "session",            // session | court | education | meal | social | special | match | logistics
     title: "Session Title",
     speaker: "Speaker Name",     // optional
     location: "Room 212A",       // optional — shown as a big location label
     description: "Short line.",  // optional — keep it to one sentence
     icon: "plane",               // optional — override the icon
                                  // (clock, court, notebook, food, glass, star, people, camera, plane)
     tbc: true                    // true = NOT CONFIRMED YET (shows a small "TBC" tag)
   }

   SIMULTANEOUS SESSIONS (breakouts in different rooms/courts)
   Use `tracks` instead of speaker/location. `title` on a track is optional:
   {
     start: "10:00", end: "10:50", type: "education", title: "Session 2",
     tracks: [
       { location: "Room 212A", speaker: "Adam Rollman" },
       { location: "Room 212B", speaker: "Melissa Wolter" }
     ]
   }

   ⚠️ Anything marked `tbc: true` is still being confirmed in the sheet
   ("Available Space", names with "?", "Confirm logistics").
   When a detail is final, update it and delete `tbc: true`.
   ========================================================================== */

window.SUMMIT = window.SUMMIT || {};

/* Set to false to hide the small "TBC" tags on the live site. */
window.SUMMIT.SHOW_TBC_TAGS = true;

/* Shared venue info (used by both events). */
window.SUMMIT.VENUE = {
  name: "Henry B. González Convention Center",
  city: "San Antonio, Texas",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Henry+B.+Gonzalez+Convention+Center+San+Antonio+TX",
  // Floor plan PDF. PLACEHOLDER: city's 2012 floor plans (no Hemisfair Ballroom / Halls 3–4).
  // Swap in AVCA's 2026 convention map when available (same file name, or update the path).
  floorPlan: "assets/maps/venue-map.pdf"
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
        date: "2026-12-15", // Tuesday — Arrival Day
        items: [
          { start: "14:00", end: "17:00", type: "social", icon: "people",
            title: "Check-In + Registration / Cocktail Hour",
            location: "The LDR & Grotto (River Level)",
            description: "Check in, register, and meet the group. Food + drinks are covered from here through Thursday lunch." },
          { start: "18:00", end: "21:00", type: "special",
            title: "Impact Awards Banquet",
            location: "Hemisfair Ballroom C1",
            description: "Dinner and awards. Headshots available in the prefunction space." }
        ]
      },
      {
        date: "2026-12-16", // Wednesday
        items: [
          { start: "07:30", end: "08:30", type: "meal",
            title: "Breakfast",
            location: "Hemisfair Ballroom C1 Prefunction",
            description: "Grab-and-go continental breakfast." },
          { start: "07:30", end: "08:30", type: "social",
            title: "LOVB Christian Coaches Breakfast + Fellowship",
            location: "Room 214AB",
            description: "Optional. Grab-and-go breakfast available." },
          { start: "07:31", timeLabel: "All day", type: "logistics", icon: "camera",
            title: "Headshots",
            location: "Room 213A",
            description: "Drop in any time, 7:30 AM – 6 PM." },
          { start: "09:00", end: "09:50", type: "special",
            title: "Opening Session",
            location: "Hemisfair Ballroom C1",
            description: "Welcome. All attendees." },
          { start: "10:00", end: "10:50", type: "education", title: "Session 2",
            tracks: [
              { location: "Room 212A", speaker: "Adam Rollman" },
              { location: "Room 212B", speaker: "Melissa Wolter" }
            ] },
          { start: "11:00", end: "11:50", type: "meal",
            title: "Chase Lunch & Learn",
            location: "Hemisfair Ballroom C1",
            description: "Lunch with a presentation from Chase. All attendees." },
          { start: "12:00", end: "13:45", type: "match",
            title: "Team Practices",
            location: "Alamodome" },
          { start: "14:00", end: "14:50", type: "education", title: "Session 3",
            tracks: [
              { location: "Room 212A", speaker: "Ben Bahr" },
              { location: "Room 212B", speaker: "Steve Nowicki" }
            ] },
          { start: "15:00", end: "15:50", type: "court", title: "Session 4",
            tracks: [
              { location: "Hemisfair Ballroom C1", speaker: "Glenna Bianchin, Melissa Boice + more TBA" },
              { location: "Room 212A", speaker: "Nicolas Szerszen" },
              { location: "Hall 3 · Court 1", speaker: "Pro coach TBA" },
              { location: "Hall 3 · Court 2", speaker: "Carlos Moreno" },
              { location: "Hall 3 · Court 3", speaker: "Genny Volpe" }
            ], tbc: true },
          { start: "16:00", end: "16:50", type: "court", title: "Session 5",
            tracks: [
              { location: "Hemisfair Ballroom C1", speaker: "Dr. Brooke Rundle" },
              { location: "Room 212A", speaker: "Texas State Staff" },
              { location: "Hall 3 · Court 1", speaker: "Dustin Watten" }
            ] },
          { start: "17:00", end: "17:50", type: "court", title: "Session 6",
            tracks: [
              { location: "Room 212A", speaker: "Amir Lugo-Rodriguez" },
              { location: "Room 212B", speaker: "Gabriella \"Ella\" Dooley" },
              { location: "Hall 3 · Court 1", speaker: "Pro coach TBA" }
            ], tbc: true },
          { start: "18:00", type: "meal",
            title: "Dinner",
            location: "Location TBA", tbc: true },
          { start: "19:00", end: "21:00", type: "match",
            title: "Pro Match: LOVB Austin vs. LOVB Nebraska",
            location: "Frost Bank Arena" },
          { start: "20:00", end: "22:15", type: "social",
            title: "AVCA Convention Kick-Off Party + Game Night" }
        ]
      },
      {
        date: "2026-12-17", // Thursday
        items: [
          { start: "08:00", end: "09:00", type: "meal",
            title: "AVCA Breakfast",
            description: "Grab-and-go continental breakfast." },
          { start: "09:00", end: "09:50", type: "special",
            title: "Large Group Session",
            location: "Hemisfair Ballroom C1",
            description: "All attendees." },
          { start: "10:00", end: "10:50", type: "court", title: "Session 7",
            tracks: [
              { location: "Room 212A", speaker: "Jimmy Lundgren" },
              { location: "AVCA Hall 4 Court", speaker: "Alyssa D'Errico" },
              { location: "AVCA Beach Court", speaker: "Hudson Bates" }
            ] },
          { start: "11:00", end: "11:50", type: "education", title: "Session 8",
            speaker: "Dustin Watten",
            location: "Hemisfair Ballroom C1" },
          { start: "12:00", end: "12:50", type: "meal",
            title: "Lunch",
            location: "Hemisfair Ballroom C1" },
          { start: "13:00", end: "13:50", type: "court", title: "Session 9",
            tracks: [
              { location: "Hemisfair Ballroom C1", title: "Moms in Coaching Panel",
                speaker: "Morgan Thomas, Terri Purichia, Scarlett Molina, Shelby Sawyer, Genny Volpe" },
              { location: "Room 212A", speaker: "Kristen Kelsay" },
              { location: "AVCA Hall 4 Court", speaker: "TJ Sanders" }
            ] },
          { start: "14:00", end: "15:00", type: "special",
            title: "Closing Session",
            location: "Hemisfair Ballroom C1" },
          { start: "17:30", type: "match",
            title: "NCAA Semifinal 1",
            location: "Alamodome" },
          { start: "20:00", type: "match",
            title: "NCAA Semifinal 2",
            location: "Alamodome" }
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
        date: "2026-12-17", // Thursday — Arrival Day
        items: [
          { start: "12:00", timeLabel: "Arrival day", type: "logistics", icon: "plane",
            title: "Arrive + check in",
            location: "San Antonio Marriott Rivercenter",
            description: "Get settled. Programming starts Friday morning." }
        ]
      },
      {
        date: "2026-12-18", // Friday — Junior Summit programming starts
        items: [
          { start: "09:00", end: "09:15", type: "meal", title: "Breakfast" },
          { start: "09:30", end: "10:30", type: "education",
            title: "AVCA Convention 101",
            location: "Room 214CD",
            description: "What every first-time attendee needs to know." },
          { start: "10:45", end: "11:45", type: "education", title: "AVCA Education Sessions" },
          { start: "12:00", end: "13:00", type: "meal", title: "Lunch" },
          { start: "13:15", end: "14:15", type: "education", title: "AVCA Education Sessions" },
          { start: "14:30", end: "15:30", type: "education", title: "AVCA Education Sessions" },
          { start: "15:45", end: "16:45", type: "education", title: "LOVB Classroom Session",
            speaker: "Morgan Thomas",
            location: "Room 212A" },
          { start: "17:00", end: "17:50", type: "education", title: "LOVB Classroom Session",
            speaker: "Helen Lin",
            location: "Room 212A" },
          { start: "18:00", end: "18:50", type: "education", title: "LOVB Classroom Session",
            speaker: "Speaker TBA",
            location: "Room 212A / 212B", tbc: true },
          { start: "19:15", end: "21:15", type: "meal",
            title: "Small Group Dinner",
            description: "Dine-around dinner." },
          { start: "21:00", type: "social",
            title: "adidas Party",
            location: "Location TBA", tbc: true }
        ]
      },
      {
        date: "2026-12-19", // Saturday
        items: [
          { start: "08:30", end: "09:30", type: "meal",
            title: "AVCA Breakfast Buffet",
            location: "Hall 4" },
          { start: "09:00", end: "10:00", type: "education", title: "AVCA Education Sessions" },
          { start: "10:15", end: "11:15", type: "education", title: "AVCA Education Sessions" },
          { start: "11:30", end: "12:30", type: "education", title: "AVCA Education Sessions" },
          { start: "12:30", end: "14:00", type: "meal", title: "Lunch + Round Tables" },
          { start: "14:15", end: "15:15", type: "education", title: "AVCA Education Sessions" },
          { start: "15:30", end: "16:30", type: "education", title: "AVCA Education Sessions" },
          { start: "16:45", end: "18:00", type: "education", title: "LOVB Classroom Panel",
            speaker: "Molly Alvey + more TBA",
            location: "Room 212A", tbc: true },
          { start: "18:15", end: "20:30", type: "meal",
            title: "Small Group Dinner with a LOVB Team Member",
            description: "Dine-around dinner." }
        ]
      },
      {
        date: "2026-12-20", // Sunday
        items: [
          { start: "08:00", timeLabel: "Morning", type: "logistics", icon: "plane",
            title: "Hotel check-out",
            description: "Check out and store your bags at the hotel." },
          { start: "09:00", end: "09:45", type: "meal", title: "Breakfast" },
          { start: "10:00", end: "11:00", type: "education", title: "AVCA Education Sessions" },
          { start: "11:15", end: "12:15", type: "special", title: "LOVB Closing Session",
            location: "Location TBA", tbc: true },
          { start: "14:30", type: "match",
            title: "NCAA Championship Match",
            location: "Alamodome" }
        ]
      }
    ]
  }
];
