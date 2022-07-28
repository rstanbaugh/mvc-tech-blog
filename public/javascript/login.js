window.onload = () => {hideNavbar()};

async function loginFormHandler(event) {
  event.preventDefault();
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


document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
