// Added: streak calculation for consecutive completed days
const STORAGE_KEY = 'habit-tracker-v1';

function getTodayString() {
  return new Date().toISOString().split('T')[0];
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function loadHabits() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveHabits(habits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

// Walk backwards from today counting consecutive completed days
function calculateStreak(completedDates) {
  if (!completedDates.length) return 0;

  const dateSet = new Set(completedDates);
  const today   = new Date(getTodayString());
  let streak    = 0;
  let cursor    = new Date(today);

  while (true) {
    const dateStr = cursor.toISOString().split('T')[0];
    if (dateSet.has(dateStr)) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      if (streak === 0) {
        cursor.setDate(cursor.getDate() - 1);
        const yesterday = cursor.toISOString().split('T')[0];
        if (dateSet.has(yesterday)) {
          streak++;
          cursor.setDate(cursor.getDate() - 1);
          continue;
        }
      }
      break;
    }
  }

  return streak;
}

function render() {
  const habits   = loadHabits();
  const list     = document.getElementById('habit-list');
  const emptyMsg = document.getElementById('empty-message');
  const today    = getTodayString();

  list.innerHTML = '';

  if (!habits.length) {
    emptyMsg.hidden = false;
    return;
  }

  emptyMsg.hidden = true;

  habits.forEach(habit => {
    const isDone      = habit.completedDates.includes(today);
    const streak      = calculateStreak(habit.completedDates);
    const streakLabel = streak > 0
      ? `🔥 ${streak} day${streak !== 1 ? 's' : ''} streak`
      : 'Start your streak today!';

    const li = document.createElement('li');
    li.className  = `habit-item${isDone ? ' done' : ''}`;
    li.dataset.id = habit.id;

    li.innerHTML = `
      <button class="check-btn" aria-label="${isDone ? 'Unmark' : 'Mark'} complete: ${escapeHtml(habit.name)}">
        ${isDone ? '&#10003;' : ''}
      </button>
      <div class="habit-info">
        <span class="habit-name">${escapeHtml(habit.name)}</span>
        <span class="streak">${streakLabel}</span>
      </div>
      <button class="delete-btn" aria-label="Delete habit: ${escapeHtml(habit.name)}">&#10005;</button>
    `;

    li.querySelector('.check-btn').addEventListener('click', () => toggleHabit(habit.id));
    li.querySelector('.delete-btn').addEventListener('click', () => deleteHabit(habit.id));

    list.appendChild(li);
  });
}

function addHabit(name) {
  const habits = loadHabits();
  habits.push({
    id:             Date.now().toString(),
    name:           name.trim(),
    completedDates: [],
    createdAt:      getTodayString(),
  });
  saveHabits(habits);
  render();
}

function toggleHabit(id) {
  const habits = loadHabits();
  const today  = getTodayString();
  const habit  = habits.find(h => h.id === id);
  if (!habit) return;

  const idx = habit.completedDates.indexOf(today);
  if (idx === -1) {
    habit.completedDates.push(today);
  } else {
    habit.completedDates.splice(idx, 1);
  }

  saveHabits(habits);
  render();
}

function deleteHabit(id) {
  saveHabits(loadHabits().filter(h => h.id !== id));
  render();
}

document.getElementById('today-date').textContent = formatDate(new Date());

document.getElementById('add-habit-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('habit-input');
  const name  = input.value.trim();
  if (!name) return;
  addHabit(name);
  input.value = '';
  input.focus();
});

render();
