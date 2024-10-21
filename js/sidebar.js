$(function () {
  const $sidebar = $("#sidebar");
  const $overlay = $("#overlay");

  function openSidebar() {
    $sidebar.removeClass("-translate-x-full");
    $sidebar.addClass("translate-x-0");
    $overlay.removeClass("hidden");
  }

  function closeSidebar() {
    $sidebar.removeClass("translate-x-0");
    $sidebar.addClass("-translate-x-full");
    $overlay.addClass("hidden");
  }

  // When the menu button is clicked
  $("#sidebar-open-btn").on("click", openSidebar);

  // When the close button is clicked
  $("#sidebar-close-btn").on("click", closeSidebar);

  $overlay.on("click", closeSidebar);
});
