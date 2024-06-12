function storeData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;

    const applicantData = {
        name: name,
        email: email,
        phone: phone,
        experience: experience
    };

    localStorage.setItem('applicantData', JSON.stringify(applicantData));
    window.location.href = 'confirmation.html';
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};

        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        localStorage.setItem('applicantData', JSON.stringify(jsonData));

        // Submit the form
        form.submit();
    });
});
