# Daily Habit Tracker

A simple web application that helps you build daily consistency by tracking habits and streaks.

## Live Demo

[View my project here](https://millersenior.github.io/daily_habit_tracker)

---

## Problem

People struggle to build lasting habits because they have no simple, friction-free way to track whether they did them each day. Without visibility into consistency, habits get forgotten — especially during busy or stressful periods.

## Value

This app gives anyone a single, lightweight place to check off daily habits and see their streak. When you can see your streak, you have a concrete reason not to break it. The goal is not to replace complex habit apps — it's to remove every possible excuse not to show up.

## Project Plan

**What I intended to build:**
A minimal habit tracker that anyone can open in a browser with no account, no install, and no setup. Mark habits complete each day, see your current streak, and come back tomorrow.

**How I planned to approach it:**
1. Start with the core interaction: adding a habit and checking it off
2. Add streak calculation once the check-off logic worked
3. Add the progress bar as a visual summary
4. Style last — functionality first

I used `localStorage` to persist data so habits survive browser refreshes without needing a backend or account.

---

## Features

### Complete
- Add named habits to your personal list
- Check off habits as complete for today
- Uncheck a habit if you made a mistake
- See a live streak counter per habit (consecutive days)
- Progress bar showing how many habits are done today
- Delete habits you no longer want to track
- Data persists in the browser via `localStorage`
- Works on mobile and desktop
- Supports light and dark mode automatically

### Would Build Next
- Weekly and monthly completion view
- Habit reordering via drag-and-drop
- Custom habit colors or icons
- Export/import data as JSON (so data can move between browsers)
- Notification reminder support via the Notifications API

---

## Technologies Used

| Technology    | Purpose                            |
|---------------|------------------------------------|
| HTML5         | Structure and semantics            |
| CSS3          | Styling, layout, responsive design |
| JavaScript    | Application logic, DOM interaction |
| localStorage  | Persistent data storage            |

No libraries, frameworks, or build tools — runs entirely in the browser.

## AI Tools Used

- **Claude (Anthropic)** — planning, code generation, debugging, and code explanation throughout the project

---

## Running the Project

No installation required.

**Option 1 — Open directly:**
Download or clone this repository, then open `index.html` in any modern web browser.

**Option 2 — Live site:**
Visit the GitHub Pages link at the top of this README.

---

## Prompt History

See [prompt-history.md](prompt-history.md) for the AI prompts used while building this project.
