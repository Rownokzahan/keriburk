import { stores } from "./stores-data.js";

// Get a list of districts and initialize main UI elements
const districts = stores.map((item) => item.district);
const districtDropdown = $("#district-dropdown");
const storesModal = $("#stores-modal");

// Display the list of districts in the dropdown
function displayDistricts(districts) {
  const districtList = $("#district-list");
  districtList.empty();

  if (districts.length === 0) {
    districtList.append(
      `<li class="block px-4 py-2 w-full text-left border-t border-ui-black">No District Found</li>`
    );
  } else {
    districts.forEach((district) => {
      districtList.append(`
        <li>
          <button class="block px-4 py-2 w-full text-left border-t border-ui-black" data-district="${district}">
            ${district}
          </button>
        </li>
      `);
    });
  }
}

displayDistricts(districts); // Initial display of districts

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

// Open the stores modal for the selected district
function openStoresModal(districtName) {
  const district = stores.find((item) => item.district === districtName);
  const districtStores = district?.stores || [];
  const storeList = $("#store-list");
  storeList.empty();

  storesModal.removeClass("hidden");
  $("body").addClass("overflow-hidden");
  $("#stores-modal-district").text(district.district);

  if (districtStores.length === 0) {
    storeList.append(`<li>No Store Found</li>`);
  } else {
    districtStores.forEach((store) => {
      storeList.append(`
        <li>
          <h5 class="font-semibold">${store?.name}</h5>
          <div class="flex gap-1 items-baseline">          
            <div class="mt-px"><i class="bi bi-geo-alt text-sm"></i></div>
            <p>Address: ${store?.address}</p>
          </div>

          <div class="flex gap-1 items-start">
            <div class="-mt-2"><i class="bi bi-telephone text-xs"></i></div>            
            <p>Phone: ${store?.phone}</p>
          </div>
        </li>
      `);
    });
  }
}

// Toggle district dropdown visibility on button click
$("#select-district-btn").on("click", function () {
  districtDropdown.hasClass("open")
    ? closeDistrictDropdown()
    : openDistrictDropdown();
});

// Filter and display districts based on search input
$("#district-search").on("input", function () {
  const searchQuery = $(this).val().toLowerCase();
  const filteredDistricts = districts.filter((district) =>
    district.toLowerCase().includes(searchQuery)
  );
  displayDistricts(filteredDistricts);
});

// Close the stores modal and reset district name
function closeStoresModal() {
  storesModal.addClass("hidden");
  $("body").removeClass("overflow-hidden");
  setDistrictName("Select Your District");
}

$("#stores-modal-close-btn").on("click", closeStoresModal); // Close modal button

// Set selected district name from dropdown and close dropdown
$("#district-list").on("click", function (event) {
  const districtName = $(event.target).data("district");
  if (districtName) {
    setDistrictName(districtName);
    closeDistrictDropdown();
    $("#select-district-error").addClass("hidden");
  }
});

// Open stores modal if a district is selected
$("#search-store-btn").on("click", function () {
  closeDistrictDropdown();
  const districtName = getDistrictName();
  if (districtName && districtName != "Select Your District") {
    openStoresModal(districtName);
    $("#select-district-error").addClass("hidden");
  } else {
    $("#select-district-error").removeClass("hidden");
  }
});
