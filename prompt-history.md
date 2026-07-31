# Prompt History

This file documents the key prompts I used while building the Daily Habit Tracker. It shows how I collaborated with AI throughout planning, development, and debugging.

---

## Planning Phase

### Prompt 1 — Choosing a project idea

> I need to build a small web application as an admissions project. It should solve a real problem, use only HTML, CSS, and JavaScript, and be deployable to GitHub Pages. I want something simple enough to finish in a few hours but meaningful enough to talk about in an interview. Can you help me think through a few options?

**What I learned:** The AI suggested several ideas including a book tracker, habit tracker, and task list. I chose a habit tracker because building consistent habits is something I personally care about, and I knew I could speak authentically about why it matters.

---

### Prompt 2 — Defining the problem and value

> I've decided to build a habit tracker. Help me write a clear problem statement and value statement for it — the kind of thing I'd explain to someone who has never heard of the project.

**What I learned:** The AI helped me articulate that the problem isn't a lack of apps — it's friction. Most habit apps are too complex. The value is being able to check in with zero setup and no account.

---

### Prompt 3 — Planning the features

> Before I start building, I want to plan what features are actually necessary versus what I could add later. What is the smallest version of a habit tracker that proves the idea works?

**What I learned:** The AI suggested starting with just: add a habit, check it off, see it in a list. That's the Smallest Demonstration of Value. Streaks and a progress bar came second. I agreed with this ordering.

---

## Building Phase

### Prompt 4 — Initial file structure

> I'm going to build a simple habit tracker using only HTML, CSS, and JavaScript. No frameworks. It needs to work in a browser and be deployable to GitHub Pages. Can you give me the file structure I should use and explain why?

**What I learned:** The AI recommended `index.html`, `style.css`, and `script.js` — three separate files, one responsibility each. This matched what I learned about separation of concerns in the pre-course material.

---

### Prompt 5 — Building the add-habit form

> In my index.html, I want a form where users can type a habit name and click Add. When they submit, the habit should appear in a list below. Show me the HTML and JavaScript for just this part first, before we add anything else.

**What I learned:** I asked for just this feature first — not the whole app — because the course taught me to build incrementally. The AI gave me a working form and a render function. I tested it in the browser before moving on.

---

### Prompt 6 — Adding localStorage persistence

> Right now, if I refresh the page all the habits disappear. I want habits to be saved so they come back after a refresh. I don't want to use a database or any backend. What's the right approach?

**What I learned:** The AI explained `localStorage` and showed me how to serialize my habits array to JSON and read it back. I asked follow-up questions to understand why `JSON.parse` could throw an error and how to handle that safely with a try/catch.

---

### Prompt 7 — Streak calculation

> I want to add a streak counter that shows how many consecutive days a user has completed each habit. Explain the logic to me first before writing any code, so I can understand the approach.

**What I learned:** I deliberately asked for the explanation before the code. The AI walked me through the idea: start from today, check if today is in the completed dates, then check yesterday, then the day before — stop when you hit a gap. Once I understood it, the implementation made sense to me and I could have described it to someone else.

---

### Prompt 8 — Adding a progress bar

> I want to show a progress bar at the top of the habit list that shows how many habits are done today versus the total. For example "3 of 5 habits complete today." How should I build this?

**What I learned:** The AI suggested keeping this as a single function I call every time the list re-renders, not as a separate update loop. That kept the code simple and in one place.

---

## Debugging Phase

### Prompt 9 — Streak bug

> My streak calculation seems wrong. If I check a habit off today and it shows "1 day streak," but then I come back the next day without checking it off, it still shows 1. Shouldn't it show 0 once I've missed a day?

**What I learned:** The AI helped me identify that my logic was reading the streak from the last check-in date, not recalculating it forward from today. We rewrote the function to always walk backward from today's date. I tested the fix manually by mocking yesterday's date in the browser console.

---

### Prompt 10 — Asking AI to explain generated code

> In the streak function, explain what this line does: `cursor.setDate(cursor.getDate() - 1)`. I want to understand it before I keep it.

**What I learned:** The AI explained that `getDate()` returns the day of the month and `setDate()` lets you set it — passing a value like `-1` wraps automatically to the previous month. This is a JavaScript quirk I wouldn't have known about. I kept the line because I understood it.

---

## Styling Phase

### Prompt 11 — CSS design

> I want my habit tracker to look clean and professional. It should work on both desktop and mobile, and support light and dark mode without requiring a toggle — just use the system preference. I'm using plain CSS, no frameworks. Can you help me build the stylesheet?

**What I learned:** The AI used CSS custom properties (`--primary`, `--bg`, etc.) so I could change the whole color scheme in one place. It also showed me `@media (prefers-color-scheme: dark)` for automatic dark mode. I adjusted several colors after seeing them in the browser.

---

### Prompt 12 — Accessibility

> I want to make sure my buttons have proper labels for screen readers. My check button and delete button don't have visible text — how do I handle that?

**What I learned:** The AI recommended `aria-label` attributes on icon-only buttons so screen readers can announce what they do. I added these to every button in the render function.

---

## Reflection

Working with AI on this project felt like pairing with a knowledgeable collaborator who could answer any question instantly — but who also needed me to think clearly about what I actually wanted. The times I asked the AI to explain something before writing it were the most valuable. When I skipped that step, I got code I couldn't fully explain, so I went back and asked.

The biggest lesson: AI doesn't know what I'm trying to build until I tell it clearly. The better my question, the better the answer.
