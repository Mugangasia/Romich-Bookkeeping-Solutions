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