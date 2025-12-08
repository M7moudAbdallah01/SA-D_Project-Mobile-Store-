document.getElementById('send').addEventListener('click', () => {
    const r = document.querySelectorAll('input[required], textarea[required]');
    if ([...r].every(input => input.value.trim() !== '')) {
        alert('Your message has been sent!');
    } else {
        alert('Please fill out all required fields.');
    }
});
