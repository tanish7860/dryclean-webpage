/* ==========================================================================
   TANISH DRYCLEAN — MAIN JAVASCRIPT FILE
   This file handles:
   1. Navbar shrink animation on page scroll
   2. Mobile Navigation Menu Toggle
   3. Interactive Booking Modal Popup Box (Open, Close, Submit, Backdrop/Esc key)
   4. Coupon Code Copying functionality
   ========================================================================== */

// ==========================================================================
// 1. NAVBAR SCROLL EFFECT
// Adds a shadow and shrinks navbar height when scrolling down the page
// ==========================================================================
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ==========================================================================
// 2. MOBILE MENU TOGGLE
// Opens and closes the dropdown navigation menu on small mobile screens
// ==========================================================================
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('mobile-open');
    }
}

// ==========================================================================
// 3. BOOKING MODAL POPUP FUNCTIONS
// Opens/Closes the Booking Form popup modal box
// ==========================================================================

// Function to OPEN the booking modal
function openBookingModal() {
    const overlay = document.getElementById('booking-modal-overlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    }
}

// Function to CLOSE the booking modal
function closeBookingModal() {
    const overlay = document.getElementById('booking-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restores background scrolling
    }
}

// Close modal when user clicks outside the modal card (on dark backdrop overlay)
function handleModalBackdropClick(event) {
    const overlay = document.getElementById('booking-modal-overlay');
    if (event.target === overlay) {
        closeBookingModal();
    }
}

// Handle Form Submission when user clicks "Book Laundry Now!"
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const serviceInput = document.getElementById('cust-service');
    
    const name = nameInput ? nameInput.value : 'Customer';
    const phone = phoneInput ? phoneInput.value : '';
    const service = serviceInput ? serviceInput.value : 'Laundry';

    // Friendly confirmation alert
    alert(`Thank you ${name}! Your laundry booking request for "${service}" has been received. We will contact you at ${phone} shortly for doorstep pickup!`);

    // Reset form fields and close modal
    const bookingForm = document.getElementById('laundry-booking-form');
    if (bookingForm) {
        bookingForm.reset();
    }
    closeBookingModal();
}

// Close modal when user presses the 'Escape' key on keyboard
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeBookingModal();
    }
});

// ==========================================================================
// 4. COUPON CODE COPY FUNCTION
// Copies coupon codes to clipboard and displays notification toast
// ==========================================================================
function copyCoupon(code) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(function() {
            showToast();
        }).catch(function() {
            showToast();
        });
    } else {
        showToast();
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(function () {
            toast.classList.remove('show');
        }, 2200);
    }
}
