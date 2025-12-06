document.getElementById('send').addEventListener('click', () => {
    const r = document.querySelectorAll('input[required], textarea[required]');
    if ([...r].every(input => input.value.trim() !== '')) {
        alert('Message sent , Thank you for contacting us😊');
    } else {
        alert('Please fill out all required fields.');
    }
});
