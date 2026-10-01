# LOVB Coach Summit — Event Website

Two pages, no build step. Open `index.html` in any browser to view it.

| Page | File |
|---|---|
| Schedule (home) | `index.html` |
| FAQ | `faq.html` |

## Updating content (you only need these two files)

- **`data/events.js`** — event names, dates, venue, and every schedule item (times, titles, speakers, rooms, courts, descriptions).
- **`data/faq.js`** — FAQ categories, questions, and answers.

Instructions and examples are at the top of each file.

### Placeholders
Anything not yet confirmed is marked `tbc: true` and shows a small **TBC** tag on the site.
When a detail is final, update it and delete `tbc: true`.
To hide all TBC tags at once, set `SHOW_TBC_TAGS = false` in `data/events.js`.

Still to confirm: all session times, speakers, rooms, check-in location/times, exact Marriott property + address,
hotel ↔ convention center transportation, dress guidance, food, and the onsite contact.

Optional per-item `icon` (clock, court, notebook, glass, star, people, plane) overrides the default icon for its type.

### Handy for testing
Add `?now=2026-12-16T10:30` to the URL to preview the "Today" and "Happening now" states for a given moment
(times are Central). Add `?event=junior` to open the Junior Coach Summit directly.

## Files

```
index.html, faq.html     page shells
data/events.js           schedule data  ← edit
data/faq.js              FAQ data       ← edit
js/components.js         reusable components: EventSelector, EventHero, DateSelector,
                         DayHeading, ScheduleCard, SpeakerInfo, LocationLabel, FaqAccordion
js/app.js                page logic (event toggle, day tabs, "now" highlighting)
css/styles.css           all styling; brand tokens at the top
assets/logos/            web-sized logos (originals are in the logo folders)
sw.js                    offline support (keeps the last-loaded schedule on bad wifi)
manifest.webmanifest     lets people "Add to Home Screen" like an app
```

## After publishing changes
The pages load files as `styles.css?v=13`, `events.js?v=13`, etc. When you publish an update, bump that number
(`v=14`) in both `index.html` and `faq.html` so phones don't keep showing an old cached schedule.

## Live site
- **https://lovbcoachsummit.com** — hosted free on GitHub Pages from
  [github.com/mkhaynes3-ship-it/lovb-coach-summit](https://github.com/mkhaynes3-ship-it/lovb-coach-summit).
- Domain registered at Namecheap. DNS: four `A` records for `@` → 185.199.108–111.153, and `CNAME www` →
  `mkhaynes3-ship-it.github.io`. Don't change these.

### Updating the live site
Easiest (no tools needed): open the file on github.com (e.g. `data/events.js`), click the ✏️ pencil, edit,
then **Commit changes**. The site updates in about a minute.
Remember to bump `?v=` in `index.html` and `faq.html` when you change CSS/JS/data.
