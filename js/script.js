document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');

  if (menu) {
    menu.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // === SIGN UP ===
  const signupForm = document.getElementById('signup-form');
  const signupMsg = document.getElementById('signup-message');

  if (signupForm) {
    signupForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;

      if (!name || !email || !password || !confirmPassword) {
        signupMsg.textContent = '❌ All fields are required.';
        signupMsg.style.color = 'red';
        return;
      }

      if (password !== confirmPassword) {
        signupMsg.textContent = '❌ Passwords do not match.';
        signupMsg.style.color = 'red';
        return;
      }

      try {
        const res = await fetch(`http://localhost:3000/users?email=${email}`);
        const users = await res.json();
        if (users.length > 0) {
          signupMsg.textContent = '❌ User already exists.';
          signupMsg.style.color = 'red';
          return;
        }

        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });

        if (!response.ok) throw new Error('Signup failed.');

        signupMsg.textContent = '✅ Signup successful!';
        signupMsg.style.color = 'green';
        signupForm.reset();
      } catch (err) {
        signupMsg.textContent = '❌ Something went wrong.';
        signupMsg.style.color = 'red';
        console.error(err);
      }
    });
  }

  // === LOGIN ===
  const loginForm = document.getElementById('login-form');
  const loginMsg = document.getElementById('login-message');

  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
        const users = await res.json();

        if (users.length === 1) {
          loginMsg.textContent = '✅ Login successful!';
          loginMsg.style.color = 'green';
          loginForm.reset();
        } else {
          loginMsg.textContent = '❌ Invalid credentials!';
          loginMsg.style.color = 'red';
        }
      } catch (err) {
        loginMsg.textContent = '❌ Login error.';
        loginMsg.style.color = 'red';
        console.error(err);
      }
    });
  }

  // === EXERCISE SEARCH ===
  const exerciseForm = document.getElementById('exercise-form');
  const resultsDiv = document.getElementById('exercise-results');

  if (exerciseForm && resultsDiv) {
    exerciseForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = document.getElementById('exercise-input').value.trim();

      if (query) {
        fetchExercises(query);
        saveSearchToJSON(query); // <-- now correctly defined below
      } else {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
      }
    });
  }

  // Fetch exercise data from API
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

  // ✅ Save search query to db.json
  function saveSearchToJSON(query) {
    fetch('http://localhost:3000/searches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        timestamp: new Date().toISOString()
      })
    })
      .then(res => {
        if (!res.ok) throw new Error('POST /searches failed');
        return res.json();
      })
      .then(data => {
        console.log('Search saved to db.json:', data);
      })
      .catch(err => {
        console.error('Failed to save search:', err);
      });
  }
});