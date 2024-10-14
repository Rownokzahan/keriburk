import { useRef, useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineSearch } from "react-icons/hi";
import storesData from "./storesData";

const DistrictDropdown = ({
  selected,
  onSelect,
  defaultText = "Select Your District",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null); // Ref for dropdown to handle outside clicks

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // Handle district selection
  const handleSelect = (item) => {
    if (!disabled) {
      onSelect(item); // Pass selected district to parent
      setIsOpen(false); // Close dropdown
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup
  }, []);

  // Filter districts based on search term
  const filteredDistricts = Object.keys(storesData).filter((district) =>
    district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={dropdownRef} className="w-full relative">
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        aria-expanded={isOpen}
        className="w-full px-4 py-2 rounded-md flex justify-between items-center bg-ui-white"
      >
        {/* Display selected district or default text */}
        {selected ? (
          <span className="truncate">{selected}</span>
        ) : (
          <span className="text-ui-gray">{defaultText}</span>
        )}

        {/* Dropdown arrow icon */}
        <TiArrowSortedDown
          className={`${isOpen ? "rotate-180" : ""} ${
            disabled ? "text-ui-gray" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute right-0 z-20 w-full mt-1 origin-top bg-ui-white border border-ui-gray rounded shadow-lg ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } transition-transform duration-300 ${
          disabled ? "pointer-events-none" : ""
        }`}
        role="listbox"
        aria-hidden={!isOpen}
      >
        {/* Search input */}
        <div className="px-4 py-2 mb-px border-b border-ui-gray flex items-start gap-2">
          <div className="text-ui-gray text-xl">
            <HiOutlineSearch /> {/* Search icon */}
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="block flex-1 focus:outline-none bg-transparent"
          />
        </div>

        {/* District list */}
        <ul className="h-48 divide-y list-none overflow-y-auto">
          {filteredDistricts.length > 0 ? (
            filteredDistricts.map((item) => (
              <li key={item} role="option" aria-selected={item === selected}>
                <button
                  onClick={() => handleSelect(item)}
                  className={`block px-4 py-2 w-full text-left ${
                    item === selected
                      ? "bg-ui-black text-ui-white"
                      : "hover:bg-ui-gray hover:bg-opacity-10"
                  } ${disabled ? "cursor-not-allowed" : ""}`}
                  disabled={disabled}
                >
                  {item}
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-ui-gray">No districts found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DistrictDropdown;
