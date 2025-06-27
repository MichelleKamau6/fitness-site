// Toggle menu for mobile nav
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');

  if (menu) {
    menu.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Signup form
  const signupForm = document.getElementById('signup-form');
  const signupMsg = document.getElementById('signup-message');

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      if (email && password) {
        signupMsg.textContent = '✅ Signup successful!';
        signupMsg.style.color = 'green';
        signupForm.reset();
      } else {
        signupMsg.textContent = '❌ Please fill all fields.';
        signupMsg.style.color = 'red';
      }
    });
  }

  // Login form
  const loginForm = document.getElementById('login-form');
  const loginMsg = document.getElementById('login-message');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      if (email === 'user@example.com' && password === 'password') {
        loginMsg.textContent = '✅ Login successful!';
        loginMsg.style.color = 'green';
        loginForm.reset();
      } else {
        loginMsg.textContent = '❌ Invalid credentials!';
        loginMsg.style.color = 'red';
      }
    });
  }

  // Exercise Search API Feature
  const exerciseForm = document.getElementById('exercise-form');
  const resultsDiv = document.getElementById('exercise-results');

  if (exerciseForm && resultsDiv) {
    exerciseForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = document.getElementById('exercise-input').value.trim();

      if (query) {
        fetchExercises(query);
      } else {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
      }
    });
  }

  // Fetch exercises from ExerciseDB
  async function fetchExercises(query) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4lFHMIZNY6Jl8eCQZl9zZQ==QAsXKzVmOaZMz1sQ',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      resultsDiv.innerHTML = '<p>Loading...</p>';
      const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${query}`, options);

      if (!response.ok) throw new Error('Error fetching exercises.');

      const data = await response.json();

      if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No exercises found.</p>';
        return;
      }

      resultsDiv.innerHTML = '';
      data.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
          <h3>${exercise.name}</h3>
          <p><strong>Target:</strong> ${exercise.target}</p>
          <p><strong>Equipment:</strong> ${exercise.equipment}</p>
          <p><strong>Body Part:</strong> ${exercise.bodyPart}</p>
        `;
        resultsDiv.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      resultsDiv.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
  }
});
