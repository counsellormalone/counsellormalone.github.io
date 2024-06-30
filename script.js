document.querySelectorAll(".carousel__container").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonHtml = Array.from(items, () => {
      return `<span class="carousel__btn"></span>`;
    });
    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="carousel__nav">${buttonHtml.join("")}</div>`
    );
  
    const carouselBtns = carousel.querySelectorAll(".carousel__btn");
  
    carouselBtns.forEach((carouselBtn, i) => {
      carouselBtn.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        carouselBtns.forEach((carouselBtn) =>
          carouselBtn.classList.remove("carousel__btn--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        carouselBtn.classList.add("carousel__btn--selected");
      });
    });
  });