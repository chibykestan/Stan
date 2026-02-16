// Fade-in on scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Form submission handlers
function submitOrder() {
    const name = document.getElementById('orderName').value;
    const email = document.getElementById('orderEmail').value;
    const phone = document.getElementById('orderPhone').value;
    const type = document.getElementById('orderType').value;
    const details = document.getElementById('orderDetails').value;

    if (name && email && phone && type && details) {
        alert(`Thank you, ${name}! Your order has been received.\nWe will contact you at ${phone} to confirm.`);
        document.getElementById('orderForm').reset();
        bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
    } else {
        alert('Please fill in all fields.');
    }
}

function submitContact() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (name && email && subject && message) {
        alert(`Thank you, ${name}! Your message has been sent.\nWe will get back to you at ${email} soon.`);
        document.getElementById('contactForm').reset();
        bootstrap.Modal.getInstance(document.getElementById('contactModal')).hide();
    } else {
        alert('Please fill in all fields.');
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
