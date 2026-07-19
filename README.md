# 📝 Interactive To-Do Application

A sleek, responsive, and lightweight web-based To-Do application built using vanilla frontend technologies. The app features a modern interface with a split gradient background, fully custom circular checkboxes, and interactive task management states.

---

## 🔗 Live Demo & Repository

*   **🌐 Live Link:** [View Live Site]
*   **📂 GitHub Repository:** [Browse Source Code]

---

## 🚀 Features

*   **Dynamic Task Management:** Instantly add new tasks to your tracking list via a structured submission field.
*   **Real-Time Pending Counter:** Automatically keeps track of the exact number of active task items remaining to complete.
*   **In-Place Task Renaming:** Inline editing functionality allowing seamless task updates through interactive browser prompt dialogs.
*   **Visual Completion States:** Custom styled circular toggle switches that check off items, apply an italicized strike-through effect, fade completed content, and deduct from the active counter.
*   **Intuitive Task Deletion:** Quick-action delete buttons powered by FontAwesome icons to completely wipe items from the layout while cleanly re-balancing active counts.

---

## 🛠️ Project Structure

The codebase is modular, clean, and separated into three core structural layers:

```text
├── index.html       # Application layout and DOM structure
├── style.css        # Layout constraints, custom variables, and components styling
└── script.js        # Logic handling, state mutation, and interactive event flows
```

---

## 💻 Technical Implementation Details

*   **HTML5 & Vector Components:** Uses standard semantic layout wrappers coupled with FontAwesome `v6.4.0` CDN configurations to render high-contrast interface controls.
*   **CSS3 Styling Layer:** Utilizes `flexbox` for perfect element centering and custom controls manipulation (such as `appearance: none;` on form checkboxes) to provide custom-designed circular interfaces.
*   **Vanilla JavaScript Logic:** Leverages native browser APIs for precise DOM updates, structural item generations via template literals, and isolated closures for dynamic row management.

---