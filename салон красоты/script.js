document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.scroll-animate');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.2 // Срабатывает при пересечении 50% области видимости
    });
  
    images.forEach(image => {
      observer.observe(image);
    });
  });
