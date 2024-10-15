"use client";

import { IoClose } from "react-icons/io5"; // Import close icon
import { useEffect } from "react"; // Import useEffect for side effects

const Modal = ({ isVisible, onClose, children }) => {
  // Add or remove overflow hidden from body when modal is visible
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden"); // Prevent body scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Allow body scroll
    }

    // Cleanup to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  // If modal is not visible, return null
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#0a0909] bg-opacity-70 flex justify-center items-center z-50">
      <div className="h-auto w-full md:w-96 mx-2 bg-ui-white relative">
        {/* Close button */}
        <button className="absolute top-3 right-3 text-2xl" onClick={onClose}>
          <IoClose /> {/* Close icon */}
        </button>

        {/* Modal content passed as children */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
