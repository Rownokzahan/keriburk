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

  const productImagePaths = [
    "./assets/images/product-showcase/Achari-Fish-Tikka.png",
    "./assets/images/product-showcase/Achari-Ghost-Mix.png",
    "./assets/images/product-showcase/Bombay-Biryani-Mix.png",
    "./assets/images/product-showcase/Hyderabadi-haleem-Mix.png",
    "./assets/images/product-showcase/Hyderabadi-Paya.png",
    "./assets/images/product-showcase/Karachi-Beef-Biryani.png",
    "./assets/images/product-showcase/karahi-Gosht-Fry.png",
    "./assets/images/product-showcase/Lahori-Chargha.png",
    "./assets/images/product-showcase/Mughlai-korma-Mix.png",
    "./assets/images/product-showcase/Punjabi-fish-fry.png",
    "./assets/images/product-showcase/Puran-Dilhi-Mix.png",
    "./assets/images/product-showcase/Rawalpindi-Chicken-Curry.png",
    "./assets/images/product-showcase/Shahi-Badam-Kheer.png",
    "./assets/images/product-showcase/Sheer-Khurma.png",
    "./assets/images/product-showcase/Sindhi-Mutton-Biryani.png",
  ];
  const totalImages = productImagePaths.length;
  let currentImageIndex = 0;

  // Function to switch to the next product image
  function switchProductImage() {
    $(".product-showcase-image").attr(
      "src",
      productImagePaths[currentImageIndex] // set image of current index
    );

    // Increment the current image index and loop back to 0 if it exceeds the total number of images.
    currentImageIndex = (currentImageIndex + 1) % totalImages;
  }
  setInterval(switchProductImage, 3000); // Call switchProductImage every 3 seconds
  switchProductImage(); // For the first time
});
