// Add Post Function
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('textarea[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;
  
    const response = await fetch(`/api/posts`, { // Post Route
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard'); // Direct to Dashboard
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);