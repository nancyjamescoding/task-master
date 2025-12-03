document.addEventListener('DOMContentLoaded', () => {
    const postInput = document.querySelector('.post-input');
    const postButton = document.getElementById('postButton');
    
    postInput.addEventListener('input', () => {
        
        if (postInput.value.trim().length > 0) {
            postButton.disabled = false;
        } else {
            postButton.disabled = true;
        }
    });

    postButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        const postContent = postInput.value.trim();
        
        if (postContent.length > 0) {
            alert('Posting the following content: \n\n"' + postContent + '"');
            postInput.value = '';
            postButton.disabled = true;
        }
    });
});