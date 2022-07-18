async function logout() {
  console.log('you have called the logout function');
  const response = await fetch('/logout', {
      method: 'post',
      headers: {
          "Content-Type": "application/json"
      }
  });

  if (response.ok) {
      document.location.replace('/');
  } else {
      alert(response.statusText);
  }
}


document.querySelector('#logout').addEventListener('click', logout);