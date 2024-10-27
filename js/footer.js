// Image arrays for the first and second sliders
const sliderImages1 = [
  "../assets/images/infinite-slider/Achari-gosht.jpg",
  "../assets/images/infinite-slider/Bombay-chicken-biryani.jpg",
  "../assets/images/infinite-slider/Fish-tikka.jpg",
  "../assets/images/infinite-slider/Haleem.jpg",
  "../assets/images/infinite-slider/Karachi-beef-biryani.jpg",
  "../assets/images/infinite-slider/Karahi-Fry-Gosht.jpg",
  "../assets/images/infinite-slider/Lahori-chargha.jpg",
  "../assets/images/infinite-slider/Mughlai-Korma-mix.jpg",
  "../assets/images/infinite-slider/Nehari.jpg",
];

const sliderImages2 = [
  "../assets/images/infinite-slider/Mughlai-Korma-mix.jpg",
  "../assets/images/infinite-slider/Nehari.jpg",
  "../assets/images/infinite-slider/Paya.jpg",
  "../assets/images/infinite-slider/Punjabi-fish-fry.jpg",
  "../assets/images/infinite-slider/Rawalpindi.jpg",
  "../assets/images/infinite-slider/Shahi-badam-kheer-mix.jpg",
  "../assets/images/infinite-slider/Sheer-khurma-mix.jpg",
  "../assets/images/infinite-slider/Sindhi-mutton.jpg",
  "../assets/images/infinite-slider/Achari-gosht.jpg",
];

// Function to add images to the slider with duplicates for larger screens
function addSliderImages(imagesContainer, images) {
  imagesContainer.empty(); // Clear existing images

  // Append each image for default display
  images.forEach((image) => {
    imagesContainer.append(`
        <figure class="min-w-24 sm:min-w-28">
          <img
            alt="Sliding Image"
            loading="lazy"
            class="w-full"
            src="${image}"
            />
        </figure>
      `);
  });

  // Duplicate images for larger screens
  images.forEach((image) => {
    imagesContainer.append(`
        <figure class="min-w-24 sm:min-w-28">
          <img
            alt="Sliding Image"
            loading="lazy"
            class="w-full"
            src="${image}"
            />
        </figure>
      `);
  });

  // Duplicate images again for extra-large screens
  images.forEach((image) => {
    imagesContainer.append(`
        <figure class="min-w-24 sm:min-w-28">
          <img
            alt="Sliding Image"
            loading="lazy"
            class="w-full"
            src="${image}"
            />
        </figure>
      `);
  });
}

$(function () {
  // Initialize sliders with images
  addSliderImages($("#infinite-slider-left"), sliderImages1);
  addSliderImages($("#infinite-slider-right"), sliderImages2);

  // Toggle accordion content visibility
  $("#footer-accordion .accordion-title").on("click", function () {
    const $content = $(this).next(".accordion-content");
    if ($content.hasClass("closed")) {
      $content.removeClass("closed").addClass("open");
    } else {
      $content.removeClass("open").addClass("closed");
    }
  });
});
