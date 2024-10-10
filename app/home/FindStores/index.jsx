"use client";

import bgImage from "@/public/images/find-store-bg.jpg";
import DistrictDropdown from "./DistrictDropdown";
import { useState } from "react";
import Modal from "@/components/Modal";
import storesData from "./storesData";
import Logo from "@/components/shared/Logo";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlinePhone } from "react-icons/hi";

const FindStores = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [stores, setStores] = useState([]); // State for stores list

  // Function to handle district selection
  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);

    // Check if stores data exists for the selected district
    if (storesData[district]) {
      setStores(storesData[district]);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Hide modal
  };

  return (
    <section
      className="h-screen flex sm:items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage?.src}')` }}
    >
      <div className="container pt-28 sm:pt-0 !mt-0">
        <h3 className="text-3xl sm:text-4xl font-bold uppercase text-ui-white">
          Find The Nearest Store <br /> With Keriburk Products
        </h3>

        {/* District dropdown selection */}
        <div className="mt-6 w-60">
          <DistrictDropdown
            selected={selectedDistrict}
            onSelect={handleDistrictSelect}
            defaultText="Select Your District"
          />
        </div>
      </div>

      {/* Modal for displaying stores */}
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <div className="border-b mb-4">
          <div className="flex justify-center mb-2">
            <Logo />
          </div>

          <h4 className="text-xl font-bold mb-4 text-center">
            Stores in {selectedDistrict} {/* Display selected district */}
          </h4>
        </div>

        {/* List of stores */}
        <ul>
          {stores?.map((store, index) => (
            <li key={index} className="mb-2">
              <h5 className="font-semibold">{store.name}</h5>
              <div className="text-sm">
                <div className="flex gap-1 items-center">
                  <RiMapPinLine />
                  <p>Address: {store.address}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HiOutlinePhone />
                  <p>Phone: {store.phone}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    </section>
  );
};

export default FindStores;
