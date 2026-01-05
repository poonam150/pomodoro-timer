# Pomodoro Timer

**Live Application:** [View Live Demo](https://poonam150.github.io/pomodoro-timer/)

---

## 📝 Project Overview

The **Pomodoro Timer** is a productivity application designed to help users manage time effectively using the Pomodoro Technique. The application breaks work into focused intervals, usually 25 minutes, separated by short breaks.

This project was engineered to demonstrate proficiency in **Vanilla JavaScript**, specifically focusing on **DOM manipulation**, **state management**, and **asynchronous programming** without relying on external frameworks.

## ✨ Key Features

* **Dynamic State Management:** Seamlessly switches between 'Work', 'Short Break', and 'Long Break' modes, automatically adjusting timer durations.
* **Accurate Timer Logic:** Implemented using `setInterval` with precise clearing mechanisms to prevent memory leaks and ensure timing accuracy.
* **Audio Feedback System:** Integrated the browser's `Audio` API to provide auditory alerts upon session completion.
* **Session Analytics:** Tracks and displays the number of completed work sessions during a user's activity.
* **Responsive Architecture:** Built with a "Mobile-First" approach using CSS Flexbox and variables, ensuring a flawless experience across desktops, tablets, and smartphones.
* **User Experience Enhancements:** Includes dynamic browser tab titles that display the remaining time, allowing users to monitor progress while multitasking.

## 🛠️ Technical Implementation Details

This project highlights several core frontend development concepts:

* **JavaScript (ES6+):**
    * Utilized **Objects** to map timer modes (`work`, `short`, `long`) to their respective durations, avoiding hardcoded conditional logic.
    * Implemented **Event Delegation** and listeners to handle user interactions efficiently.
    * Used template literals and string padding (`padStart`) for formatting time data (MM:SS).

* **CSS3 & Design:**
    * **CSS Variables (`:root`):** Used for centralized color management, making the application theme easy to maintain or switch.
    * **Flexbox:** Used for layout alignment to ensure the timer remains centered on all viewports.
    * **Animations:** Added transition effects for smoother UI changes between states.

* **HTML5:**
    * Semantic markup used throughout for better SEO and code readability.
    * Accessibility features (ARIA labels) included for screen reader support.

## 🚀 How to Run Locally

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/poonam150/pomodoro-timer.git](https://github.com/poonam150/pomodoro-timer.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd pomodoro-timer
    ```

3.  **Launch the Application:**
    Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge).

---

**Developed by Poonam Kumari Jaiswal**