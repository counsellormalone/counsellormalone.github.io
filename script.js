//Testimonial Data
const testimonials = [
  {
    name: "Dave",
    job: "Past client",
    testimonial:
      "I've been to speak with a few other professionals. You are one of the only people I've liked coming to talk to. Everyone else lectures me about how the brain works, I already know all that and don't need to keep hearing about it. You actually listen to me and help me with things that are happening in my life.",
  },
  {
    name: "Stacey",
    job: "Mother of past client",
    testimonial:
      "We have seen such a change in Shawn since he started having regular appointments with you. His confidence is so much higher and his anxiety regarding certain things is no longer a problem for him. I'd love for him to continue seeing you, or at least come back to see you in the future if you think it would help him with other things.",
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