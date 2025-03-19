        // Mobile menu toggle functionality
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const nav = document.querySelector('nav');
        
        mobileNavToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });

// Consultation form 

// Add this to your existing script tag or create a new one before </body>
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('consultationModal');
    const closeBtn = document.querySelector('.close-modal');
    const consultationForm = document.getElementById('consultationForm');
    const formMessage = document.getElementById('form-message');
    
    // Get all buttons that should open the modal
    const consultationBtns = document.querySelectorAll('a[href="#contact"], .btn-secondary');
    
    // Open modal when buttons are clicked
    consultationBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        setTimeout(() => {
          modal.classList.add('visible');
          document.body.classList.add('modal-open');
        }, 10);
      });
    });
    
    // Close modal when X is clicked
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Close modal function
    function closeModal() {
      modal.classList.remove('visible');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }, 300);
    }
    
    // Handle form submission
    if (consultationForm) {
      consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For demonstration, we'll just show a success message
        
        formMessage.textContent = "Thank you! Your consultation request has been received. We'll contact you shortly to confirm your appointment.";
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        
        // Reset form after submission
        consultationForm.reset();
        
        // Close modal after 3 seconds
        setTimeout(function() {
          closeModal();
          // Reset message after modal closes
          setTimeout(() => {
            formMessage.style.display = 'none';
          }, 300);
        }, 3000);
      });
    }
  });

// Add this to your existing script tag or create a new one before </body>
// Add this to your existing JavaScript before the closing </body> tag

// Set active navigation link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

function setActiveNavLink() {
    let scrollPosition = window.scrollY + 100; // Adding offset for fixed header
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Set active class on page load and scroll
window.addEventListener('load', setActiveNavLink);
window.addEventListener('scroll', setActiveNavLink);

// Add active class when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add this to your existing JavaScript before the closing </body> tag

// Mobile dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtns = document.querySelectorAll('.dropbtn');
  
  // For mobile - toggle dropdown on click
  dropdownBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          // Only prevent default on mobile
          if (window.innerWidth <= 768) {
              e.preventDefault();
              this.parentElement.classList.toggle('active');
          }
      });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
      dropdownBtns.forEach(btn => {
          if (!btn.contains(e.target) && window.innerWidth <= 768) {
              btn.parentElement.classList.remove('active');
          }
      });
  });
});