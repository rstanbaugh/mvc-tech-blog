window.onload = () => {hideNavbar()};

async function loginFormHandler(event) {
  console.log('entering loginFormHandler')
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  if (email && password) {
      const response = await fetch("/api/users/login", {
          method: "post",
          body: JSON.stringify({
              email,
              password
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });
      if (response.ok) {
          document.location.replace("/dashboard");
      } else {
          alert(response.statusText);
      }
  }
}

async function signupFormHandler(event) {
  console.log('signupFormHandler Started')
  // event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const twitter = document.querySelector('#twitter-signup').value.trim();
  const github = document.querySelector('#github-signup').value.trim();

  console.log({ username, email, password, twitter, github });

  if (username && email && password) {
      const response = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({
              username,
              email,
              password,
              twitter,
              github
          }),
          headers: {
              "Content-Type": "application/json"
          }
      });
      if (response.ok) {
          document.location.replace("/dashboard");
      } else {
          alert(response.statusText);
      }
  }
};

function hideNavbar(){
  navbarEl = document.querySelector('.navbar');
  footerNavbarEl = document.querySelector('#footerLogin');

  if (navbarEl.style.display === 'none'){
    navbarEl.style.display = 'block';
  } else {
    navbarEl.style.display = 'none';
  }
  if (footerNavbarEl.style.display === 'none'){
    footerNavbarEl.style.display = 'block';
  } else {
    footerNavbarEl.style.display = 'none';
  }
}
