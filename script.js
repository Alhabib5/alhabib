console.log("JavaScript file is loaded!");
// script.js
document.getElementById("contactButton").addEventListener("click", function() {
    document.getElementById("contactMessage").innerHTML = "Thank you for your inquiry! We will contact you soon.";
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const testimonialSlider = document.getElementById("testimonialSlider");
const prevButton = document.getElementById("prevTestimonial");
const nextButton = document.getElementById("nextTestimonial");

function showTestimonial(index) {
    testimonialSlider.style.transform = translateX(-${index * 100}%);
}

nextButton.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

prevButton.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length; // Handle negative index
    showTestimonial(currentTestimonial);
});

showTestimonial(currentTestimonial); // Show the first testimonial initially