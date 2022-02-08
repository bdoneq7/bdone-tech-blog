// Delete Post Function
async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, { // Posts Route
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard'); // Direct to Dashboard
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);