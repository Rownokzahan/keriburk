import {
  getDistrictsByDivision,
  getDivisions,
  getStoresByDistrict,
} from "./stores-data.js";

// Function to create the HTML for an accordion label
const getAccordionLabel = (label) => {
  return `<button class="accordion-label">
            <span>${label}</span>
            <i class="w-6 text-ui-red rotate-0 duration-300">
                <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                    d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                ></path>
                </svg>
            </i>
        </button>`;
};

// Function to create the content for an accordion (list of districts)
const getAccordionContent = (division) => {
  const districts = getDistrictsByDivision(division);

  // Generate a list of district buttons
  const districtItems = districts
    .map(
      (district) =>
        `<button data-district=${district}>
            <i class="bi bi-geo-alt-fill text-ui-red me-1"></i>
            <span>${district}</span>
        </button>`
    )
    .join("");

  // Wrap the list in a container
  return `<div class="accordion-content close">${districtItems}</div>`;
};

// Function to create a complete accordion item for a division
const getAccordionItem = (division) => {
  // Combine the label and content of the accordion
  const accordionItem =
    getAccordionLabel(division) + getAccordionContent(division);

  return accordionItem;
};

// Function to create and populate the district dropdown menu
const createDistrictDropdown = () => {
  const districtList = $("#district-list");
  districtList.empty(); // Clear existing content

  const divisions = getDivisions(); // Fetch all divisions

  // Create accordion items for each division
  const accordion = divisions
    .map((division) => getAccordionItem(division))
    .join("");

  // Add the accordion to the dropdown container
  districtList.append(accordion);
};
createDistrictDropdown(); // Initialize district dropdown

// References to district dropdown menu
const districtDropdown = $("#district-dropdown");

// Open the district dropdown menu
function openDistrictDropdown() {
  districtDropdown.removeClass("closed").addClass("open");
}

// Close the district dropdown menu
function closeDistrictDropdown() {
  districtDropdown.removeClass("open").addClass("closed");
}

// Get selected district name
function getDistrictName() {
  return $("#district-name").text().trim();
}

// Set selected district name in the UI
function setDistrictName(districtName) {
  $("#district-name").text(districtName);
}

// Toggle district dropdown visibility on button click
$("#select-district-btn").on("click", function () {
  districtDropdown.hasClass("open")
    ? closeDistrictDropdown()
    : openDistrictDropdown();
});

// References to the stores modal
const storesModal = $("#stores-modal");

// Open the stores modal and populate it with store data for the selected district
const openStoresModal = (district) => {
  const districtStores = getStoresByDistrict(district);
  const storeList = $("#store-list");
  storeList.empty(); // Clear existing content

  // Show the modal and disable scrolling on the body
  storesModal.removeClass("hidden");
  $("body").addClass("overflow-hidden");
  $("#stores-modal-district").text(district); // Set the district name in the modal

  // Populate the store list
  districtStores.forEach((store, index) => {
    storeList.append(`
        <li>
          <h5>
            <span class="font-medium">${index + 1}. </span>
            <span class="font-semibold">${store?.name} </span>
            <span>(${store?.storeType})</span>
           </h5>
        </li>
      `);
  });
};

// Close the stores modal and reset district name
function closeStoresModal() {
  storesModal.addClass("hidden");
  $("body").removeClass("overflow-hidden");
  setDistrictName("Select Your District");
}

$("#district-dropdown .accordion-label").on("click", function () {
  const accordionContent = $(this).next(".accordion-content");

  // Close other open accordion contents
  $("#district-dropdown .accordion-content.open")
    .not(accordionContent)
    .removeClass("open")
    .addClass("close");

  // Toggle the current one
  if (accordionContent.hasClass("close")) {
    accordionContent.removeClass("close").addClass("open");
  } else {
    accordionContent.removeClass("open").addClass("close");
  }
});

// Handle district selection from the dropdown
$("#district-dropdown .accordion-content button").on("click", (event) => {
  const districtName = $(event.currentTarget).data("district");
  if (districtName) {
    setDistrictName(districtName); // Update the selected district name
    closeDistrictDropdown(); // Close the dropdown
    $("#select-district-error").addClass("hidden"); // Hide any error messages
  }
});

// Open stores modal if a district is selected
$("#search-store-btn").on("click", function () {
  closeDistrictDropdown(); // Ensure the dropdown is closed

  const districtName = getDistrictName(); // Get the selected district name
  if (districtName && districtName != "Select Your District") {
    openStoresModal(districtName); // Open the stores modal
    $("#select-district-error").addClass("hidden"); // Hide errors
  } else {
    $("#select-district-error").removeClass("hidden"); // Show error if no district is selected
  }
});

// Close the stores modal when the close button is clicked
$("#stores-modal-close-btn").on("click", closeStoresModal);
