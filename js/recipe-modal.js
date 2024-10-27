const recipeModal = $("#recipe-modal");
const recipeModalTitle = $("#recipe-modal-title");
const recipeModalIframe = $("#recipe-modal-iframe");

function openRecipeModal({ title, videoUrl }) {
  recipeModal.removeClass("hidden");
  recipeModalTitle.text(title);
  recipeModalIframe.attr("src", videoUrl);
  $("body").addClass("overflow-hidden");
}

function closeRecipeModal() {
  recipeModal.addClass("hidden");
  $("body").removeClass("overflow-hidden");
}

