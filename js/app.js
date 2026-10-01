/* ==========================================================================
   PAGE LOGIC — Schedule (index.html) + FAQ (faq.html)
   ========================================================================== */

(function () {
  const S = window.SUMMIT;
  const ui = S.ui;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);

  const THEME_COLORS = { coach: "#051243", junior: "#051243" };

  /* ---------- "now" in San Antonio (Central Time) ----------
     Add ?now=2026-12-16T10:30 to the URL to preview a specific moment. */
  function centralNow() {
    const override = new URLSearchParams(location.search).get("now");
    if (override) {
      const [date, t = "00:00"] = override.split("T");
      const [h, m] = t.split(":").map(Number);
      return { date, minutes: h * 60 + (m || 0) };
    }
    const p = Object.fromEntries(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hourCycle: "h23"
      }).formatToParts(new Date()).map((x) => [x.type, x.value])
    );
    return { date: `${p.year}-${p.month}-${p.day}`, minutes: Number(p.hour) * 60 + Number(p.minute) };
  }
  const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

  function itemStatus(item, date, now) {
    if (date < now.date) return "past";
    if (date > now.date) return "";
    const start = toMin(item.start);
    const end = item.end ? toMin(item.end) : start + 1;
    if (now.minutes >= end) return "past";
    if (now.minutes >= start) return "now";
    return "";
  }

  /* ---------- selected event (URL > saved > smart default) ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const findEvent = (id) => S.EVENTS.find((e) => e.id === id);

  function initialEventId() {
    const fromUrl = new URLSearchParams(location.search).get("event");
    if (findEvent(fromUrl)) return fromUrl;
    const saved = store.get("summit-event");
    if (findEvent(saved)) return saved;
    // If today is a Junior-only day, open Junior first.
    const today = centralNow().date;
    const onlyJunior = S.EVENTS.filter((e) => e.days.some((d) => d.date === today));
    return onlyJunior.length === 1 ? onlyJunior[0].id : S.EVENTS[0].id;
  }

  const state = { eventId: initialEventId(), date: null };

  function applyEvent(id) {
    state.eventId = id;
    store.set("summit-event", id);
    document.documentElement.dataset.event = id;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[id] || THEME_COLORS.coach);

    // Keep the choice in the URL + nav links so it carries across pages.
    const url = new URL(location.href);
    url.searchParams.set("event", id);
    history.replaceState(null, "", url);
    document.querySelectorAll("[data-nav]").forEach((a) => {
      a.href = `${a.dataset.nav}?event=${id}`;
    });
  }

  function renderEventSwitch() {
    $("#event-switch").innerHTML = ui.EventSelector(S.EVENTS, state.eventId);
    $("#event-switch").querySelectorAll("[data-event]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.event === state.eventId) return;
        applyEvent(btn.dataset.event);
        state.date = null;
        render();
      });
    });
  }

  /* ======================= SCHEDULE PAGE ======================= */
  function renderSchedule() {
    const event = findEvent(state.eventId);
    const now = centralNow();

    if (!state.date || !event.days.some((d) => d.date === state.date)) {
      const today = event.days.find((d) => d.date === now.date);
      state.date = (today || event.days[0]).date;
    }

    $("#hero-event").innerHTML = ui.EventHero(event, S.VENUE);
    $("#days").innerHTML = ui.DateSelector(event.days, state.date, now.date);

    const day = event.days.find((d) => d.date === state.date);
    const items = day.items.slice().sort((a, b) => toMin(a.start) - toMin(b.start));
    const statuses = items.map((it) => itemStatus(it, day.date, now));
    // Today with nothing in progress: flag the next session as "Up next".
    if (!statuses.includes("now")) {
      const next = statuses.findIndex((st) => st === "" && day.date === now.date);
      if (next > -1) statuses[next] = "next";
    }
    $("#schedule").innerHTML = items.length
      ? `${ui.DayHeading(day.date)}<ol class="slots">${items.map((it, i) => ui.ScheduleCard(it, statuses[i])).join("")}</ol>`
      : `<p class="empty">Schedule coming soon.</p>`;

    // On a busy day, offer a shortcut past finished sessions.
    const live = statuses.findIndex((st) => st === "now" || st === "next");
    if (live > 0) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "jump";
      btn.textContent = statuses[live] === "now" ? "Jump to now ↓" : "Jump to up next ↓";
      btn.addEventListener("click", () =>
        document.querySelectorAll("#schedule .card")[live].scrollIntoView({ behavior: "smooth", block: "start" }));
      $(".day-head-row").appendChild(btn);
    }

    const tabs = [...document.querySelectorAll(".day")];
    tabs.forEach((btn, i) => {
      btn.addEventListener("click", () => selectDay(btn.dataset.date));
      btn.addEventListener("keydown", (e) => {
        const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        selectDay(next.dataset.date);
        document.querySelector(`.day[data-date="${next.dataset.date}"]`).focus();
      });
    });
  }

  function selectDay(date) {
    if (date === state.date) return;
    state.date = date;
    renderSchedule();
    // If the day bar is stuck, jump back to the top of the list.
    const bar = $("#day-bar");
    const top = $("#schedule").getBoundingClientRect().top + window.scrollY - bar.offsetHeight - parseFloat(getComputedStyle(bar).top) - 8;
    if (window.scrollY > top) window.scrollTo({ top });
  }

  /* ========================= FAQ PAGE ========================= */
  function renderFaq() {
    const event = findEvent(state.eventId);
    $("#faq-for").textContent = `Showing answers for ${event.name}`;
    $("#faq-cats").innerHTML = S.FAQ.map((c) =>
      `<a class="chip" href="#cat-${ui.esc(c.id)}">${ui.esc(c.label)}</a>`).join("");
    $("#faq-list").innerHTML = S.FAQ.map((c, i) => `
      <section class="faq-cat" id="cat-${ui.esc(c.id)}">
        <h2 class="faq-cat__title"><span class="num">${i + 1}</span>${ui.esc(c.label)}</h2>
        ${c.questions.map((q) => ui.FaqAccordion(q, state.eventId)).join("")}
      </section>`).join("");
    document.querySelectorAll('.faq__link[href="index.html"]').forEach((a) => {
      a.href = `index.html?event=${state.eventId}`;
    });
  }

  function render() {
    renderEventSwitch();
    if (page === "schedule") renderSchedule();
    if (page === "faq") renderFaq();
  }

  applyEvent(state.eventId);
  render();

  // Keep "Happening now" fresh while the page stays open.
  if (page === "schedule") setInterval(renderSchedule, 60 * 1000);
})();
