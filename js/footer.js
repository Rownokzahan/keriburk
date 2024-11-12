// Define the base path for the images
const basePath = "../assets/images/infinite-slider/";

// Image arrays for the first and second sliders
const sliderImages1 = [
  "Achari-gosht.jpg",
  "Bombay-chicken-biryani.jpg",
  "Fish-tikka.jpg",
  "Haleem.jpg",
  "Karachi-beef-biryani.jpg",
  "Karahi-Fry-Gosht.jpg",
  "Lahori-chargha.jpg",
  "Mughlai-Korma-mix.jpg",
  "Nehari.jpg",
];

const sliderImages2 = [
  "Mughlai-Korma-mix.jpg",
  "Nehari.jpg",
  "Paya.jpg",
  "Punjabi-fish-fry.jpg",
  "Rawalpindi.jpg",
  "Shahi-badam-kheer-mix.jpg",
  "Sheer-khurma-mix.jpg",
  "Sindhi-mutton.jpg",
  "Achari-gosht.jpg",
];

// Function to add images to the slider with duplicates for larger screens
function addSliderImages(imagesContainer, images) {
  imagesContainer.empty(); // Clear existing images

  // Append each image for default display
  images.forEach((image) => {
    imagesContainer.append(`
      <figure class="w-24 sm:w-28 flex-shrink-0">
        <img
          alt="Sliding Image"
          loading="lazy"
          class="w-full"
          src="${basePath}${image}"
        />
      </figure>
    `);
  });

  // Duplicate images for larger screens
  images.forEach((image) => {
    imagesContainer.append(`
      <figure class="w-24 sm:w-28 flex-shrink-0">
        <img
          alt="Sliding Image"
          loading="lazy"
          class="w-full"
          src="${basePath}${image}"
        />
      </figure>
    `);
  });

  // Duplicate images again for extra-large screens
  images.forEach((image) => {
    imagesContainer.append(`
      <figure class="w-24 sm:w-28 flex-shrink-0">
        <img
          alt="Sliding Image"
          loading="lazy"
          class="w-full"
          src="${basePath}${image}"
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
