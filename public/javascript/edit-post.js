// Edit Post Function
async function editFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const content = document.querySelector('textarea[name="post-content"]').value;
  
    const response = await fetch(`/api/posts/${id}`, { // Posts Route by ID
      method: 'PUT',
      body: JSON.stringify({
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
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);