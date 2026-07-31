# Prompt History — Daily Habit Tracker

This file documents the key prompts used while building this project.
Each prompt follows a structured format to demonstrate intentional AI collaboration.

---

## Prompt Format

Every prompt I used follows this structure:

| Field | Purpose |
|---|---|
| **Role** | Who or what the AI should act as |
| **Context** | Background the AI needs before answering |
| **Task** | Exactly what I am asking for |
| **Constraints** | What to avoid or limit |
| **Output Format** | How I want the response structured |
| **Verification** | How I confirmed the output was correct |

---

## Prompt 1 — Choose a Problem

| Field | |
|---|---|
| **Role** | Software planning advisor |
| **Context** | I am completing an admissions project for a software engineering program. The project requires a small web application built with HTML, CSS, and JavaScript — no frameworks, no backend. It must be deployable to GitHub Pages. |
| **Task** | Help me choose a problem to solve. Give me 3 simple options that are small enough to finish in a few hours, easy to explain, and genuinely useful to another person. |
| **Constraints** | Do not suggest anything that requires a database, user accounts, or external APIs. Keep it simple. |
| **Output Format** | A short list. For each option: the problem, the value it creates, and why it fits this project. |
| **Verification** | I can explain the problem and value in one sentence without looking at notes. |

**Prompt:**
> I need to build a small web application as an admissions project. It should solve a real problem using only HTML, CSS, and JavaScript — no frameworks or backend. It needs to deploy to GitHub Pages. Give me 3 simple project ideas. For each one, tell me the problem it solves, the value it creates, and why it fits a one-day build.

**Outcome:** Chose the Habit Tracker. I could explain the problem ("people forget to build habits") and value ("one place to check in with no friction") immediately, which meant I'd be able to talk about it confidently in an interview.

---

## Prompt 2 — Plan Before Building

| Field | |
|---|---|
| **Role** | Engineering mentor |
| **Context** | I chose to build a Daily Habit Tracker. I have not written any code yet. |
| **Task** | Help me define the Smallest Demonstration of Value — the minimum version that proves the idea works — and list only the features that are truly required. |
| **Constraints** | Do not add features I did not ask for. No stretch goals unless I ask. One version at a time. |
| **Output Format** | Problem → Value → Smallest working version → Required features → Optional features (separate list) |
| **Verification** | The required feature list is short enough to build in one session. |

**Prompt:**
> I'm building a Daily Habit Tracker using only HTML, CSS, and JavaScript. Before I write any code, help me define the smallest version that proves the idea works. What features are truly required versus optional? Keep the required list short — I want to build value first and add features second.

**Outcome:** Required features became: add a habit, check it off today, see the list. That's it. Streaks and progress bar moved to "build next." This prevented me from overbuilding.

---

## Prompt 3 — File Structure First

| Field | |
|---|---|
| **Role** | Frontend developer |
| **Context** | I am building a static web app — HTML, CSS, JavaScript only. No build tools. Must work by opening index.html directly in a browser and deploy to GitHub Pages. |
| **Task** | Give me the correct file structure and explain why each file exists. |
| **Constraints** | No frameworks. No build steps. No extra files I do not need. |
| **Output Format** | File tree, then one sentence per file explaining its role. |
| **Verification** | I can explain what each file does and why it is separate from the others. |

**Prompt:**
> I'm building a static web app — HTML, CSS, JavaScript only, no build tools or frameworks. It needs to work by opening index.html in a browser and deploy to GitHub Pages. What is the correct file structure and why does each file exist separately?

**Outcome:** Three files: `index.html` (structure), `style.css` (presentation), `script.js` (behavior). I understood why they are separate before I wrote a single line of code.

---

## Prompt 4 — Build the Form First

| Field | |
|---|---|
| **Role** | JavaScript developer |
| **Context** | I have an empty index.html and script.js. I want to build the habit tracker one feature at a time, starting with the add-habit form. |
| **Task** | Give me the HTML for a form with a text input and submit button, and the JavaScript to capture the submission and add the habit to a list on the page. |
| **Constraints** | No localStorage yet. No streaks. No styling. Just the form and the list working together. Stop there. |
| **Output Format** | HTML snippet first, then JavaScript. Explain what each block does in one line. |
| **Verification** | I open the page, type a habit name, click Add, and it appears in the list. |

**Prompt:**
> I'm building a habit tracker one feature at a time. Right now I only want the add-habit form working. Give me the HTML for a form with a text input and submit button, and the JavaScript to capture the submission and display the habit in a list. No localStorage, no streaks, no styling yet — just the form and the list. Explain what each part does.

**Outcome:** Form and list worked on first test. I checked off the feature before moving on.

---

## Prompt 5 — Add Persistence

| Field | |
|---|---|
| **Role** | JavaScript developer |
| **Context** | My habit form and list are working. When I refresh the page, all habits disappear because they are stored in a JavaScript array in memory. I want habits to survive a page refresh without using a backend or database. |
| **Task** | Show me how to save and load the habits array using localStorage. Explain the approach before writing the code. |
| **Constraints** | No backend. No external libraries. Explain JSON.parse risk and how to handle it safely. |
| **Output Format** | Explanation first, then two functions: one to save, one to load. Show where to call them. |
| **Verification** | I add a habit, refresh the page, and it is still there. |

**Prompt:**
> My habit tracker works but habits disappear on refresh. I want to persist them using localStorage — no backend, no libraries. Before writing the code, explain the approach and any risks I should know about. Then give me a save function and a load function, and show me where to call them.

**Outcome:** Learned that `JSON.parse` can throw on corrupted data and added a try/catch. Asked a follow-up: "Why would localStorage data get corrupted?" — answer helped me understand browser storage limits.

---

## Prompt 6 — Streak Logic, Explained First

| Field | |
|---|---|
| **Role** | JavaScript developer and teacher |
| **Context** | Each habit has a `completedDates` array of date strings like "2026-07-31". I want to show how many consecutive days a habit has been completed, counting backward from today. |
| **Task** | Explain the algorithm in plain English before writing any code. I want to understand the logic so I can describe it to someone else. |
| **Constraints** | Do not write the function until I say I understand the explanation. |
| **Output Format** | Step-by-step plain English explanation. Wait for my confirmation before writing code. |
| **Verification** | I can explain the streak algorithm out loud without reading the code. |

**Prompt:**
> I want to add a streak counter to each habit. The habit has a completedDates array of strings like "2026-07-31". I want to count how many consecutive days it has been completed, walking backward from today. Explain the algorithm in plain English first — do not write the function yet. I want to understand the logic before I see the code.

**Outcome:** Understood the approach: start from today, check if it is in the array, move back one day, repeat until there is a gap. Wrote the logic in my own words before asking for the implementation. This is the prompt I am most proud of — I chose to understand before using.

---

## Prompt 7 — Ask AI to Explain Its Own Code

| Field | |
|---|---|
| **Role** | JavaScript teacher |
| **Context** | The streak function uses `cursor.setDate(cursor.getDate() - 1)` to move back one day in a loop. I have never seen this pattern before. |
| **Task** | Explain exactly what this line does, why it works across month and year boundaries, and whether there is a risk of an infinite loop. |
| **Constraints** | Explain it simply. Do not rewrite the function. |
| **Output Format** | Plain English explanation. One concrete example showing a month boundary. |
| **Verification** | I can explain this line to someone who has never seen it. |

**Prompt:**
> In my streak function there is this line: `cursor.setDate(cursor.getDate() - 1)`. Explain exactly what it does, why it works at month and year boundaries, and whether there is any risk of an infinite loop. Do not rewrite the function — just explain this line.

**Outcome:** Learned that JavaScript's Date object handles month rollover automatically — passing day 0 gives the last day of the previous month. This was a JavaScript behavior I would not have found in a tutorial. I kept the line because I understood it.

---

## Prompt 8 — Debug a Logic Error

| Field | |
|---|---|
| **Role** | Debugging partner |
| **Context** | My streak counter shows "1 day streak" when I check a habit today. But when I come back the next day without checking it, it still shows "1" instead of resetting to "0." |
| **Task** | Help me find where the streak calculation is wrong. Walk me through the logic step by step to identify where it breaks. |
| **Constraints** | Do not rewrite the entire function immediately. Help me find the bug first. |
| **Output Format** | Walk through the logic with me. Ask me questions. Point to the line that is wrong and explain why before suggesting a fix. |
| **Verification** | After the fix, a missed day shows 0 and a returning day starts the streak over. |

**Prompt:**
> My streak counter has a bug. If I check a habit today it shows "1 day streak." But if I skip tomorrow and come back the day after, it still shows "1" instead of resetting. Walk me through the logic to find where it breaks — do not rewrite the function immediately. Help me understand what is wrong first.

**Outcome:** Found that the original logic was reading the last check-in date rather than walking backward from today. The fix was to always start from today's date and move backward. I manually tested the fix using the browser console before accepting it.

---

## Reflection

The most valuable pattern I developed: **always ask for an explanation before asking for code.**

When I skipped that step, I got working code I could not explain. When I included it, I understood what I was building and could have written it myself with more time.

AI is most useful when I treat it like a senior developer who can answer any question — not a machine that writes code so I do not have to think.
