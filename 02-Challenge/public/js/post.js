

const createPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out both the title and content!');
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'GET',
        });
        if (response.ok) {
            const postData = await response.json();

            // Populate form with existing post data
            document.querySelector('#update-post-title').value = postData.title;
            document.querySelector('#update-post-content').value = postData.content;

            // Store the post ID in the form for later use
            document.querySelector('#update-post-form').setAttribute('data-id', id);

            // Show the update form
            document.querySelector('#update-post-form-container').classList.remove('hidden');
        } else {
            alert('Failed to load post data');
        }
    }
};

const updatePostHandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('#update-post-title').value.trim();
    const content = document.querySelector('#update-post-content').value.trim();
    const id = document.querySelector('#update-post-form').getAttribute('data-id');

    if (title && content && id) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out both the title and content!');
    }
};

// Toggle new post form visibility
document.querySelector('.new-post-button').addEventListener('click', (event) => {
    event.preventDefault();
    const formContainer = document.querySelector('#new-post-form-container');
    formContainer.classList.toggle('hidden');
});

// Handle new post form submission
document.querySelector('#new-post-form').addEventListener('submit', createPostHandler);

// Handle delete and update buttons in the dashboard
document.querySelector('.dashboard-container').addEventListener('click', (event) => {
    if (event.target.matches('.delete-comments-button')) {
        delButtonHandler(event);
    } else if (event.target.matches('.update-comments-button')) {
        updateButtonHandler(event);
    }
});

// Handle update post form submission
document.querySelector('#update-post-form').addEventListener('submit', updatePostHandler);

// Cancel update form visibility
document.querySelector('.cancel-update-button').addEventListener('click', () => {
    document.querySelector('#update-post-form-container').classList.add('hidden');
});
