# 🏋️‍♀️ Grind Mode Fitness Website

**Grind Mode** is a responsive and interactive fitness-themed website designed to promote healthy living, workouts, equipment, bootcamps, and personal training services. It includes video tutorials, user authentication forms, and real-time integration with the **ExerciseDB** public API.

---

## 🚀 Live Demo

[View the Project Live](https://your-deployed-site-link.com)  
*(Replace with your actual GitHub Pages or hosting link)*

---

## 📂 Project Structure

```
Grind-Mode/
│
├── index.html            # Main HTML file (combined site + API section)
├── css/
│   └── styles.css        # All styling for layout, forms, responsiveness
├── js/
│   └── script.js         # JavaScript for interactivity and API integration
├── images/               # Images,logos
└── README.md             # Project documentation
```

## 🌟 Features

- 🔥 Responsive homepage with stylish design and animations
- 📺 Embedded workout video tutorials
- 🧍‍♂️ Trainer and bootcamp sections with structured info
- 🥗 Healthy meals and equipment listings
- 🔐 Signup and Login forms (client-side validation)
- 🔍 Exercise Search using **ExerciseDB** API
- 📱 Mobile-friendly navigation

---

## 🧠 Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Responsive layouts, gradients, animations
- **JavaScript (ES6)** – DOM manipulation and API integration
- **ExerciseDB API** – Public API to fetch workout data
- **RapidAPI** – API key authentication and rate-limiting

---

## 📡 API Integration – ExerciseDB

This project uses the free **ExerciseDB API** via [RapidAPI](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/). The user can search for workouts by name, and the app fetches and displays data such as:

- Exercise name
- Target muscle group
- Equipment used
- Body part focused

### 📌 Example Endpoint:
```http
GET https://exercisedb.p.rapidapi.com/exercises/name/{query}
```

### 🔑 RapidAPI Key Used:
```js
headers: {
  'X-RapidAPI-Key': '4lFHMIZNY6Jl8eCQZl9zZQ==QAsXKzVmOaZMz1sQ',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
```

---

## 🧪 How to Run the Project Locally

1. Clone this repository:

```bash
git clone https://github.com/your-username/grind-mode-fitness.git
cd grind-mode-fitness
```

2. Open `index.html` in your browser:

```bash
open index.html
# or
code .
```

> 💡 No server required. All files run locally.

---

## 💬 Usage Instructions

- Navigate the site using the top menu
- Try signing up or logging in with dummy credentials
- Scroll to the "Search Exercises" section and enter a term like `"push up"` or `"squat"`
- View exercises loaded from the ExerciseDB API

---

## 📸 Screenshots

*(Optional – Add screenshots of your homepage, video section, and search results)*

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify it for personal or educational purposes.

---

## 👩‍💻 Author

**Michelle Kamau**  
Built with using HTML, CSS, JS, and public APIs  
[GitHub Profile](https://github.com/michellekamau6)