/* ==========================================================================
   LOVB COACH SUMMIT — FAQ DATA
   --------------------------------------------------------------------------
   Edit questions and answers here. Keep answers to 1–3 short sentences.
   Source: 2026 Coach Summit one-pager + schedule sheet.

   ANSWER FORMATS
   - Same for both events:   answer: "Text..."
   - Different per event:    answer: { coach: "Text...", junior: "Text..." }
     (The FAQ page shows the answer for whichever Summit is selected.)

   OPTIONAL FIELDS
   - events: ["coach"]       Only show this question for that Summit.
   - tbc: true               Not confirmed yet for either Summit (shows a small tag).
   - tbc: ["junior"]         Not confirmed yet for just that Summit.
   - link: { href, text }    Button under the answer (add external: true for other sites).
   ========================================================================== */

window.SUMMIT = window.SUMMIT || {};

window.SUMMIT.FAQ = [
  {
    id: "arrival",
    label: "Arrival",
    questions: [
      {
        q: "When should I arrive?",
        answer: {
          coach: "Tuesday, December 15. Check-in, registration and cocktail hour run 2–5 PM, followed by the Impact Awards Banquet 6–9 PM.",
          junior: "Thursday, December 17 is arrival day. Programming starts Friday with breakfast at 9 AM."
        }
      },
      {
        q: "Where and when do I check in?",
        answer: {
          coach: "Tuesday, 2–5 PM at The LDR & Grotto on the convention center's River Level. Check-in, registration and cocktail hour all happen together.",
          junior: "Junior Coach Summit check-in details coming soon."
        },
        tbc: ["junior"]
      },
      {
        q: "When does the Summit end?",
        answer: {
          coach: "The Closing Session wraps up Thursday, December 17 at 3 PM. NCAA Semifinals follow that evening at the Alamodome.",
          junior: "The LOVB Closing Session is Sunday, December 20 at 11:15 AM, followed by the NCAA Championship Match at 2:30 PM."
        }
      }
    ]
  },
  {
    id: "event",
    label: "Event",
    questions: [
      {
        q: "Where can I find the schedule?",
        answer: "Right here on the Schedule page. Pick your Summit at the top, then tap a day.",
        link: { href: "index.html", text: "Go to schedule" }
      },
      {
        q: "Where do sessions take place?",
        answer: {
          coach: "Most sessions are at the Henry B. González Convention Center: Hemisfair Ballroom C1, rooms 212A/B, and the Hall 3 and Hall 4 courts. Team practices and NCAA matches are at the Alamodome. The pro match is at Frost Bank Arena.",
          junior: "Sessions are at the Henry B. González Convention Center. Every room is listed in the schedule. The NCAA Championship is at the Alamodome."
        }
      },
      {
        q: "Will food be provided?",
        answer: {
          coach: "Yes. Food and drinks are covered from Tuesday's cocktail hour through Thursday lunch, including the Impact Awards dinner and Thursday's AVCA breakfast.",
          junior: "Yes. Breakfast and lunch are on the schedule each day, plus small-group dine-around dinners Friday and Saturday."
        }
      },
      {
        q: "What's included?",
        events: ["coach"],
        answer: "Hotel for 3 nights (Dec 15–17) when sharing a room, AVCA Convention pass, Final Four tickets, the Wednesday pro match, Impact Awards + dinner, meals listed above, and a $350 travel stipend."
      },
      {
        q: "What's not included?",
        events: ["coach"],
        answer: "Your AVCA membership, local transportation in San Antonio, a solo room or upgrade, nights beyond Dec 15–17, and personal expenses."
      },
      {
        q: "Do I need an AVCA membership?",
        events: ["coach"],
        answer: "Yes. Coaches cover their own AVCA membership. LOVB covers your AVCA Convention pass."
      },
      {
        q: "What should I wear?",
        answer: {
          coach: "Think about what you'd wear to a tournament. Comfortable and put-together, not business professional. The Impact Awards Banquet is semi-formal attire.",
          junior: "Think about what you'd wear to a tournament. Comfortable and put-together, not business professional. The adidas party is casual."
        }
      }
    ]
  },
  {
    id: "hotel",
    label: "Hotel + Location",
    questions: [
      {
        q: "Where is the hotel?",
        answer: {
          coach: "San Antonio Marriott Rivercenter on the River Walk. LOVB books your room for you through Event Connect.",
          junior: "San Antonio Marriott Rivercenter on the River Walk."
        },
        link: { href: "https://www.google.com/maps/search/?api=1&query=San+Antonio+Marriott+Rivercenter", text: "Open in Maps", external: true }
      },
      {
        q: "How do I find my room?",
        answer: "Every session lists its room or court in the schedule. Use the venue map to find it. Rooms 205–218 are on the Concourse Level; The LDR & Grotto are on the River Level.",
        link: { href: "assets/maps/venue-map.pdf", text: "Open venue map", external: true }
      },
      {
        q: "Where is the convention center?",
        answer: "The Henry B. González Convention Center in downtown San Antonio.",
        link: { href: "https://www.google.com/maps/search/?api=1&query=Henry+B.+Gonzalez+Convention+Center+San+Antonio+TX", text: "Open in Maps", external: true }
      },
      {
        q: "Do I have to share a room?",
        events: ["coach"],
        answer: "Sharing a room keeps your $350 travel stipend. If you choose a solo room, you give up the stipend and may cover the extra room cost."
      },
      {
        q: "Can I stay extra nights?",
        events: ["coach"],
        answer: "Yes, at your own cost. There's a room block through the NCAA final if you're staying."
      },
      {
        q: "How do I get from the hotel to the convention center?",
        answer: "It's about a 3-minute walk. Head outside and enter the convention center at street level through the Lila Cockrell Theatre entrance.",
        link: { href: "https://www.google.com/maps/search/?api=1&query=Lila+Cockrell+Theatre+San+Antonio+TX", text: "Pin: Lila Cockrell Theatre", external: true }
      }
    ]
  },
  {
    id: "travel",
    label: "Travel Stipend",
    questions: [
      {
        q: "How does the travel stipend work?",
        events: ["coach"],
        answer: "You're reimbursed up to $350 for travel (flights, mileage, etc.) when you share a room all three nights. It's paid through Ramp, and instructions come with your acceptance email."
      }
    ]
  },
  {
    id: "bring",
    label: "What to Bring",
    questions: [
      {
        q: "What should I bring?",
        answer: "A notebook, something to write with, and comfortable clothes and shoes for on-court sessions. Come ready to learn, connect, and participate."
      },
      {
        q: "Will I receive anything at check-in?",
        answer: "Yes. You'll get a Summit goodie bag with event materials and a few extras."
      }
    ]
  },
  {
    id: "other",
    label: "Questions",
    questions: [
      {
        q: "Who do I contact with questions?",
        answer: "Reach out to your RCL or email coachsummit@lovb.com. Updates are shared through Haystack and official LOVB Club channels.",
        link: { href: "mailto:coachsummit@lovb.com", text: "Email coachsummit@lovb.com" }
      }
    ]
  }
];
