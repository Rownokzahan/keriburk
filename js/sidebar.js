$(function () {
  const $sidebar = $("#sidebar");
  const $overlay = $("#overlay");

  function openSidebar() {
    $sidebar.removeClass("sidebar-closed").addClass("sidebar-open");
    $overlay.removeClass("hidden");
  }

  function closeSidebar() {
    $sidebar.removeClass("sidebar-open").addClass("sidebar-closed");
    $overlay.addClass("hidden");
  }

  // When the menu button is clicked
  $("#sidebar-open-btn").on("click", openSidebar);

  // When the close button is clicked
  $("#sidebar-close-btn").on("click", closeSidebar);

  $overlay.on("click", closeSidebar);
});
