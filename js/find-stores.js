import { stores } from "./stores-data.js";

// Variables
const districts = stores.map((item) => item.district);
const storesModal = $("#stores-modal");

// Function to open the stores modal for a given district
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

// Function to close the stores modal
function closeStoresModal() {
  storesModal.addClass("hidden");
  $("body").removeClass("overflow-hidden");
}

// Function to display the list of districts
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

// Initialize the districts display
displayDistricts(districts);

// Event handler for district search input
$("#district-search").on("input", function () {
  const searchQuery = $(this).val().toLowerCase();

  const filteredDistricts = districts.filter((district) =>
    district.toLowerCase().includes(searchQuery)
  );
  displayDistricts(filteredDistricts);
});

// Event handler for clicking on district in the list
$("#district-list").on("click", function (event) {
  const districtName = $(event.target).data("district");
  if (districtName) {
    openStoresModal(districtName);
  }
});

// Event handler for closing the stores modal
$("#stores-modal-close-btn").on("click", closeStoresModal);

$("#select-district-btn").on("click", function () {
  const districtDropdown = $("#district-dropdown");
  if (districtDropdown.hasClass("open")) {
    districtDropdown.removeClass("open").addClass("closed");
  } else {
    districtDropdown.removeClass("closed").addClass("open");
  }
});
