/* ==========================================================================
   LOVB COACH SUMMIT — FAQ DATA
   --------------------------------------------------------------------------
   Edit questions and answers here. Keep answers to 1–3 short sentences.

   ANSWER FORMATS
   - Same for both events:   answer: "Text..."
   - Different per event:    answer: { coach: "Text...", junior: "Text..." }
     (The FAQ page shows the answer for whichever Summit is selected.)

   `tbc: true` = NOT CONFIRMED YET (placeholder copy, shows a small tag).
   When final, replace the answer and set `tbc` to false (or delete it).
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
          coach: "Plan to arrive in San Antonio in time for Coach Summit programming beginning December 15. Add final recommended arrival window here once confirmed.",
          junior: "Plan to arrive in San Antonio before Junior Coach Summit programming begins December 17. Add final recommended arrival window here once confirmed."
        },
        tbc: true
      },
      {
        q: "What time is check-in?",
        answer: "Event check-in information and exact times will be shared here once finalized.",
        tbc: true
      },
      {
        q: "Where do I check in?",
        answer: "Check-in will take place at [ADD FINAL CHECK-IN LOCATION]. Additional signage will be available onsite to help direct you.",
        tbc: true
      }
    ]
  },
  {
    id: "event",
    label: "Event",
    questions: [
      {
        q: "Where can I find the schedule?",
        answer: "Right here on the Schedule page. Pick Coach Summit or Junior Coach Summit, then choose your day.",
        link: { href: "index.html", text: "Go to schedule" }
      },
      {
        q: "Where will sessions take place?",
        answer: "Throughout the Henry B. González Convention Center. Every session's room or court is listed in the schedule."
      },
      {
        q: "What should I wear?",
        answer: "Add final dress guidance here. Include separate notes for educational sessions, on-court sessions, banquet, and other special events if needed.",
        tbc: true
      },
      {
        q: "Will food be provided?",
        answer: "Add final meal and food information here once confirmed.",
        tbc: true
      }
    ]
  },
  {
    id: "hotel",
    label: "Hotel + Location",
    questions: [
      {
        q: "Where is the event?",
        answer: "The Henry B. González Convention Center in San Antonio, Texas.",
        link: { href: "https://www.google.com/maps/search/?api=1&query=Henry+B.+Gonzalez+Convention+Center+San+Antonio+TX", text: "Open in Maps", external: true }
      },
      {
        q: "Where is the hotel?",
        answer: "Attendees will stay at the San Antonio Marriott. Add the exact Marriott property name, street address, and booking/check-in details once finalized.",
        tbc: true
      },
      {
        q: "How do I get from the hotel to the convention center?",
        answer: "Add confirmed transportation or walking information here.",
        tbc: true
      }
    ]
  },
  {
    id: "bring",
    label: "What to Bring",
    questions: [
      {
        q: "What should I bring?",
        answer: "A notebook, something to write with, and comfortable clothes and shoes. Come ready to learn, connect, and participate."
      },
      {
        q: "Do I need to bring anything for the sessions?",
        answer: "A notebook is recommended for educational sessions. Anything else you need for a specific session will be shared in advance."
      },
      {
        q: "Will I receive anything at check-in?",
        answer: "Yes. You'll get a Summit goodie bag with event materials and a few extras."
      }
    ]
  },
  {
    id: "other",
    label: "Other",
    questions: [
      {
        q: "Who should I contact if I have a question during Summit?",
        answer: "Add event contact name, phone number, email, or help-desk information here.",
        tbc: true
      }
    ]
  }
];
