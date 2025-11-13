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
  threshold: 0.05, 
  rootMargin: '120px 0px' 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.studio-header, .studio-image, .floating-actions');
  elementsToAnimate.forEach(el => observer.observe(el));

  // Small delay to check visible elements immediately on load
  requestAnimationFrame(() => {
    const section = document.querySelector('.studio-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        elementsToAnimate.forEach(el => el.classList.add('animate'));
      }
    }
  });
});


// Scroll to top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openWhatsApp() {
    window.open("https://wa.me/91XXXXXXXXXX", "_blank"); 
  }


        document.documentElement.style.scrollBehavior = 'smooth';
        

        // 5th section

        (function(){
     
      const options = { root: null, rootMargin: ' 0px', threshold: 0.2 };
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sbf-show');
            obs.unobserve(entry.target); // animate once
          }
        });
      }, options);

      document.querySelectorAll('.sbf-card').forEach(card => observer.observe(card));
    } )();

     // Intersection Observer for scroll animations
        const observerOptions3 = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer3 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions3);

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('.testimonial-header');
            const cards = document.querySelectorAll('.testimonial-card');
            const cta = document.querySelector('.testimonial-cta');

            if (header) observer3.observe(header);
            cards.forEach(card => observer3.observe(card));
            if (cta) observer3.observe(cta);
        });

        // Book Studio Function
        function bookStudio() {
            alert('Redirecting to booking page...');
            // Add your booking logic here
        }



    


  
