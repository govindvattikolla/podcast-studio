document.addEventListener("DOMContentLoaded", function() {
  const nav = document.getElementById("navMenu");
  const toggle = document.querySelector(".menu-toggle");
  const header = document.querySelector("header");

  // Toggle menu open/close
  toggle.addEventListener("click", function(e) {
    e.stopPropagation();
    nav.classList.toggle("active");
    toggle.classList.toggle("active"); 
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    }
  });

  // Close menu when link clicked (mobile)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });

  // Scroll header effect
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    header.style.background =
      currentScroll > 100
        ? "rgba(10, 10, 10, 0.95)"
        : "rgba(10, 10, 10, 0.8)";
  });
});

// 3rd section animations
  const observerOptions1 = {
            threshold: 0.3,
            rootMargin: '0px'
        };

        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                   
                    entry.target.classList.remove('animate');
                }
            });
        }, observerOptions1);

        // Observe elements
        const content = document.querySelector('.content');
        const visual = document.querySelector('.visual');

        if (content) observer1.observe(content);
        if (visual) observer1.observe(visual);

        // 4th section
          
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    // Reset animation when scrolling out of view
                    entry.target.classList.remove('animate');
                }
            });
        }, observerOptions);

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Observe all animated elements
            const elementsToAnimate = document.querySelectorAll('.studio-header, .studio-image, .floating-actions');
            elementsToAnimate.forEach(el => observer.observe(el));

            // Trigger animation immediately if section is in viewport on load
            setTimeout(() => {
                const section = document.querySelector('.studio-section');
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    elementsToAnimate.forEach(el => el.classList.add('animate'));
                }
            }, 100);
        });

        // Smooth scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Open WhatsApp
        function openWhatsApp() {
            const phoneNumber = '1234567890'; // Replace with actual number
            const message = encodeURIComponent('Hello! I am interested in booking the studio space.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }

        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        


        (function(){
      // IntersectionObserver to trigger animations when cards come into view
      const options = { root: null, rootMargin: '0px', threshold: 0.18 };
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sbf-show');
            obs.unobserve(entry.target); // animate once
          }
        });
      }, options);

      document.querySelectorAll('.sbf-card').forEach(card => observer.observe(card));
    })();
