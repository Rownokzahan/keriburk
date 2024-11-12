$(function () {
  const banners = $(".mobile-offer-banner"); // Select all banners with the class 'mobile-offer-banner'
  let currentBannerIndex = 0;
  const totalBanners = banners.length;

  // Function to switch to the next banner
  function switchBanner() {
    banners.removeClass("active"); // Remove 'active' class from all banners

    // Increment the current banner index and loop back to 0 if it exceeds the total number of banners.
    currentBannerIndex = (currentBannerIndex + 1) % totalBanners;

    // Add 'active' class to the current banner
    $(banners[currentBannerIndex]).addClass("active");
  }
  setInterval(switchBanner, 5000); // Call switchBanner every 5 seconds
  switchBanner(); // For the first time

  // Define the base path for the product images
  const basePath = "./assets/images/product-showcase/";

  const productImagePaths = [
    "Achari-Fish-Tikka.png",
    "Achari-Ghost-Mix.png",
    "Bombay-Biryani-Mix.png",
    "Hyderabadi-haleem-Mix.png",
    "Hyderabadi-Paya.png",
    "Karachi-Beef-Biryani.png",
    "karahi-Gosht-Fry.png",
    "Lahori-Chargha.png",
    "Mughlai-korma-Mix.png",
    "Punjabi-fish-fry.png",
    "Puran-Dilhi-Mix.png",
    "Rawalpindi-Chicken-Curry.png",
    "Shahi-Badam-Kheer.png",
    "Sheer-Khurma.png",
    "Sindhi-Mutton-Biryani.png",
  ];

  const totalImages = productImagePaths.length;
  let currentImageIndex = 0;

  // Function to switch to the next product image
  function switchProductImage() {
    $(".product-showcase-image").attr(
      "src",
      `${basePath}${productImagePaths[currentImageIndex]}` // set image of current index with base path
    );

    // Increment the current image index and loop back to 0 if it exceeds the total number of images.
    currentImageIndex = (currentImageIndex + 1) % totalImages;
  }
  setInterval(switchProductImage, 3000); // Call switchProductImage every 3 seconds
  switchProductImage(); // For the first time
});
