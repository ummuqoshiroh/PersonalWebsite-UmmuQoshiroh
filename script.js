// Toggle menu untuk tampilan mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});

// Validasi form kontak dengan JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (name.value.trim() === '') {
                isValid = false;
                alert('Nama harus diisi');
            }
            
            if (email.value.trim() === '' || !validateEmail(email.value)) {
                isValid = false;
                alert('Email tidak valid');
            }
            
            if (message.value.trim() === '') {
                isValid = false;
                alert('Pesan harus diisi');
            }
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});

// Fungsi validasi email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}