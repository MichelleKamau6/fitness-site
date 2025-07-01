# 🏋️‍♀️ Grind Mode Fitness Website

**Grind Mode** is a responsive and interactive fitness-themed website designed to promote healthy living, workouts, equipment, bootcamps, and personal training services. It includes video tutorials, user authentication forms, and real-time integration with the **ExerciseDB** public API.

---

## 🚀 Live Demo

[View the Project Live](https://michellekamau6.github.io/Grind-Mode-Fitness/)

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
├── images/               # Images, logos
├── db.json               # JSON Server data for signup/login and searches
└── README.md             # Project documentation
```

## 🌟 Features

- 🔥 Responsive homepage with stylish design and animations
- 📺 Embedded workout video tutorials
- 🧍‍♂️ Trainer and bootcamp sections with structured info
- 🥗 Healthy meals and equipment listings
- 🔐 Signup and Login forms (client-side validation and local JSON storage)
- 🔍 Exercise Search using **ExerciseDB** API
- 📱 Mobile-friendly navigation

---

## 🧠 Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Responsive layouts, gradients, animations
- **JavaScript (ES6)** – DOM manipulation and API integration
- **ExerciseDB API** – Public API to fetch workout data
- **JSON Server** – Local database for user authentication and searches

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
  'X-RapidAPI-Key': 'YOUR_API_KEY',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
```
> 🔐 *Do not expose your API key in public repositories. Use environment variables or manual input in local development.*

---

## 🔧 JSON Server Setup (For Signup/Login)

Install JSON Server globally:
```bash
npm install -g json-server
```

Start the server:
```bash
json-server --watch db.json
```

Available endpoints:
- `http://localhost:3000/users` – for signup/login
- `http://localhost:3000/searches` – to save exercise search results

---

## 🧪 How to Run the Project Locally

1. Clone this repository:
```bash
git clone https://github.com/michellekamau6/Grind-Mode-Fitness.git
cd Grind-Mode-Fitness
```

2. Start JSON Server (optional for signup/login):
```bash
json-server --watch db.json
```

3. Open `index.html` in your browser:
```bash
open index.html
# or
code .
```

> 💡 No backend required for static content. Only use JSON Server if using local user/auth data.

---

## 💬 Usage Instructions

- Navigate the site using the top menu
- Try signing up or logging in with dummy credentials
- Scroll to the "Search Exercises" section and enter a term like `push up` or `squat`
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
Built with HTML, CSS, JS, JSON Server, and public APIs  
[GitHub Profile](https://github.com/michellekamau6)