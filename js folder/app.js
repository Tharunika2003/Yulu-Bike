const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelectorAll('.arrow-btn')[0];
const nextBtn = document.querySelectorAll('.arrow-btn')[1];
const currentSpan = document.querySelector('.current');
const totalSpan = document.querySelector('.total');

let currentIndex = 0;
const total = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });

  currentSpan.textContent = String(index + 1).padStart(2, '0');
  totalSpan.textContent = String(total).padStart(2, '0');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + total) % total;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % total;
  showTestimonial(currentIndex);
});

showTestimonial(currentIndex);





  


