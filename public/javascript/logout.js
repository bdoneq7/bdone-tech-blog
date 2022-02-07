async function logout() {
    const response = await fetch('/api/users/logout', { // Logout Route
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/'); // Direct to Home if Logged Out
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);