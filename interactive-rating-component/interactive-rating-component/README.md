# ⭐ Interactive Rating Component

A clean, responsive rating card interface built to provide smooth interactive feedback. This component tracks user input through structured React state workflows and transitions seamlessly to a distinct "Thank You" screen upon a successful submission.

[🔗 Live Demo on Vercel](https://interactive-rating-component-psi-two.vercel.app/) 

---

## 🚀 Key Features

* **Dynamic State Management:** Tracks rating numbers cleanly using React state variables.
* **Smart UI Feedback:** Dynamically updates button styling (active vs default states) when a number is clicked, moving away from fragile CSS active-state selectors.
* **Dynamic Content Mapping:** Displays customized tooltip text matching each score (from "Very Bad" to "Very Good") using conditional key lookups.
* **Component Communication:** Clean destructuring and props handling to pass chosen states down to the confirmation screen.
* **Responsive Layout:** Designed mobile-first utilizing fluid Tailwind CSS styling.

---

## 🛠️ Tech Stack

* **Framework:** React 19 (TypeScript)
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Deployment:** Vercel
