//Testimonial Data
const testimonials = [
  {
    name: "Dave",
    job: "Past client",
    testimonial:
      "You (Chris) are one of the only people I've liked coming to. Everyone else lectures me about how the brain works. I already know all that. You actually listen to me and help me with things that are happening in my life.",
  },
  {
    name: "Stacey",
    job: "Mother of past client",
    testimonial:
      "We have seen such a change in Shawn since he started coming to see you. His confidence is so much higher and his (issue) that he came to see you about is no longer a problem for him. I would love for him to continue working with you if possible, or come back to see you in the future",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;