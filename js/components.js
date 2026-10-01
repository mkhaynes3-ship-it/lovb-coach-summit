/* ==========================================================================
   REUSABLE COMPONENTS
   Each function takes data and returns an HTML string.
   You shouldn't need to edit this file to update content — see /data.
   ========================================================================== */

(function () {
  const S = window.SUMMIT;

  /* ---------- helpers ---------- */
  const esc = (v) =>
    String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  // "14:30" -> "2:30 PM"
  function fmtTime(t) {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return { time: `${h12}:${String(m).padStart(2, "0")}`, period };
  }
  // "9:00 – 10:00 AM" or "11:30 AM – 1:00 PM"
  function fmtRange(start, end) {
    const a = fmtTime(start);
    if (!end) return `${a.time} ${a.period}`;
    const b = fmtTime(end);
    return a.period === b.period
      ? `${a.time} – ${b.time} ${b.period}`
      : `${a.time} ${a.period} – ${b.time} ${b.period}`;
  }

  // "2026-12-15" -> parts (parsed as a calendar date, no timezone shift)
  function dateParts(iso) {
    const [y, mo, d] = iso.split("-").map(Number);
    const dt = new Date(Date.UTC(y, mo - 1, d));
    const opt = (o) => dt.toLocaleDateString("en-US", { timeZone: "UTC", ...o });
    return {
      weekday: opt({ weekday: "long" }),
      weekdayShort: opt({ weekday: "short" }),
      monthLong: opt({ month: "long" }),
      numeric: `${mo}.${d}`,
      yy: String(y).slice(2)
    };
  }

  /* ---------- line icons (match the OneLOVB icon style) ---------- */
  const stroke = (d) =>
    `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const ICONS = {
    clock: stroke('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    court: stroke('<circle cx="12" cy="12" r="9"/><path d="M12 3c-2 3-2 6 0 9s2 6 0 9M3.5 9c3.5 1 6.5.5 8.5-3M20.5 15c-3.5-1-6.5-.5-8.5 3M5 18.5c2-3.5 5-5 7-6M19 5.5c-2 3.5-5 5-7 6"/>'),
    notebook: stroke('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M12 8h4M12 12h4"/>'),
    glass: stroke('<path d="M5 4h14l-7 8z"/><path d="M12 12v8M8 20h8"/><path d="M15 4l2-2"/>'),
    star: stroke('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'),
    people: stroke('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5M15 14.3c2.6-.4 4.8 1.2 5.5 4.2"/>'),
    plane: stroke('<path d="M10.5 13.5 3 11l1.5-1.5 8 1 4-4.5c1-1 2.6-1.2 3.3-.5s.5 2.3-.5 3.3l-4.5 4 1 8L14.3 22l-2.5-7.5L8 18v2.5L6.5 22 5 19l-3-1.5L3.5 16H6z"/>'),
    food: stroke('<path d="M7 3v7M5 3v4.5a2 2 0 0 0 4 0V3M7 10v11M18 3c-2.2 0-3.5 2.3-3.5 5.5V13H18v8"/>'),
    camera: stroke('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7 10 4.5h4L15.5 7"/><circle cx="12" cy="13.5" r="3.5"/>'),
    mic: stroke('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>'),
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    arrow: stroke('<path d="M7 17 17 7M9 7h8v8"/>')
  };
  const TYPE_ICON = {
    session: "clock", court: "court", education: "notebook",
    social: "glass", special: "star", logistics: "people",
    meal: "food", match: "court"
  };
  const TYPE_LABELS = {
    session: "Session", court: "On-Court", education: "Educational",
    meal: "Food", match: "Match",
    social: "Networking", special: "Event", logistics: "Logistics"
  };

  const tbcTag = (show, text = "TBC") =>
    show && S.SHOW_TBC_TAGS ? `<span class="tbc" title="Not confirmed yet">${text}</span>` : "";

  /* ---------- EventSelector ---------- */
  // Big two-option toggle: Coach Summit / Junior Coach Summit
  function EventSelector(events, activeId) {
    return `
      <div class="event-switch" role="radiogroup" aria-label="Choose your Summit">
        ${events.map((e) => `
          <button type="button" role="radio" class="event-switch__opt"
                  aria-checked="${e.id === activeId}" data-event="${esc(e.id)}">
            <span class="event-switch__name">${esc(e.shortName)}</span>
            <span class="event-switch__dates">${esc(e.shortDates)}</span>
          </button>`).join("")}
      </div>`;
  }

  /* ---------- EventHero ---------- */
  // Blush band with the giant date numerals (OneLOVB "save the date" treatment)
  function EventHero(event, venue) {
    const first = dateParts(event.days[0].date);
    return `
      <div class="hero__numerals" aria-hidden="true">${first.numeric}.${first.yy}</div>
      <div class="hero__row">
        <div class="hero__text">
          <h1 class="hero__title">${esc(event.name)}</h1>
          <p class="hero__meta">${esc(event.dateRange)}</p>
          <p class="hero__venue">${ICONS.pin}<span>${esc(venue.name)}, ${esc(venue.city)}</span></p>
          ${venue.floorPlan ? `<a class="hero__map" href="${esc(venue.floorPlan)}" target="_blank" rel="noopener">Venue map ${ICONS.arrow}</a>` : ""}
        </div>
        <img class="hero__logo" src="${esc(event.logo)}" alt="" width="520" height="489">
      </div>`;
  }

  /* ---------- DateSelector ---------- */
  function DateSelector(days, activeDate, todayIso) {
    return `
      <div class="days" role="tablist" aria-label="Choose a day" style="--n:${days.length}">
        ${days.map((d) => {
          const p = dateParts(d.date);
          return `
          <button type="button" role="tab" class="day" data-date="${esc(d.date)}"
                  aria-selected="${d.date === activeDate}" aria-controls="schedule"
                  aria-label="${esc(p.weekday)}, ${esc(p.monthLong)} ${esc(p.numeric.split(".")[1])}">
            ${d.date === todayIso ? '<span class="day__today">Today</span>' : ""}
            <span class="day__num">${esc(p.numeric)}</span>
            <span class="day__weekday"><span class="long">${esc(p.weekday)}</span><span class="short">${esc(p.weekdayShort)}</span></span>
          </button>`;
        }).join("")}
      </div>`;
  }

  /* ---------- DayHeading ---------- */
  function DayHeading(date) {
    const p = dateParts(date);
    return `<div class="day-head-row"><h2 class="day-head"><span>${esc(p.weekday)}</span>, ${esc(p.monthLong)} ${esc(p.numeric.split(".")[1])}</h2></div>`;
  }

  /* ---------- LocationLabel ---------- */
  function LocationLabel(location) {
    if (!location) return "";
    return `<span class="loc">${ICONS.pin}<span>${esc(location)}</span></span>`;
  }

  /* ---------- SpeakerInfo ---------- */
  function SpeakerInfo(speaker) {
    if (!speaker) return "";
    return `<p class="speaker">${ICONS.mic}<span>${esc(speaker)}</span></p>`;
  }

  /* ---------- ScheduleCard ---------- */
  // status: "now" | "next" | "past" | ""
  function ScheduleCard(item, status) {
    const iconName = item.icon || TYPE_ICON[item.type] || "clock";
    const nowBadge = status === "now" ? '<span class="now-badge"><i></i>Now</span>'
      : status === "next" ? '<span class="next-badge">Up next</span>' : "";

    const detail = item.tracks
      ? `<ul class="tracks">
          ${item.tracks.map((t) => `
            <li class="track">
              ${LocationLabel(t.location)}
              ${t.title ? `<p class="track__title">${esc(t.title)}</p>` : ""}
              ${SpeakerInfo(t.speaker)}
              ${t.description ? `<p class="card__desc">${esc(t.description)}</p>` : ""}
            </li>`).join("")}
        </ul>`
      : `${SpeakerInfo(item.speaker)}${LocationLabel(item.location)}`;

    return `
      <li class="card ${status ? "is-" + status : ""}">
        <span class="card__icon">${ICONS[iconName] || ICONS.clock}</span>
        <div class="card__body">
          <p class="card__time">${item.timeLabel ? esc(item.timeLabel) : fmtRange(item.start, item.end)}${nowBadge}</p>
          <h3 class="card__title">${esc(item.title)}</h3>
          ${item.description ? `<p class="card__desc">${esc(item.description)}</p>` : ""}
          ${detail}
          <p class="card__foot"><span class="type">${esc(TYPE_LABELS[item.type] || "")}</span>${tbcTag(item.tbc)}</p>
        </div>
      </li>`;
  }

  /* ---------- FaqAccordion ---------- */
  function FaqAccordion(question, eventId) {
    const a = question.answer;
    const answer = typeof a === "string" ? a : a[eventId] || a.coach;
    const link = question.link
      ? `<a class="faq__link" href="${esc(question.link.href)}"${question.link.external ? ' target="_blank" rel="noopener"' : ""}>${esc(question.link.text)} ${ICONS.arrow}</a>`
      : "";
    return `
      <details class="faq">
        <summary class="faq__q"><span>${esc(question.q)}</span><i class="faq__icon" aria-hidden="true"></i></summary>
        <div class="faq__a">
          <p>${esc(answer)}</p>
          ${link}
          ${tbcTag(Array.isArray(question.tbc) ? question.tbc.includes(eventId) : question.tbc, "Details coming soon")}
        </div>
      </details>`;
  }

  S.ui = { EventSelector, EventHero, DateSelector, DayHeading, ScheduleCard, LocationLabel, SpeakerInfo, FaqAccordion, esc };
})();
