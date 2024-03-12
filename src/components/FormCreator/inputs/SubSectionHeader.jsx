import React from "react";

const SubSectionHeader = ({ title, size = 30 }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    // <>
    <span style={{ fontSize: `${size}px`, textTransform: "capitalize" }}>
      {/* {capitalizeFirstLetter(title)} */}
      {title}
    </span>
    // </>
  );
};

export default SubSectionHeader;
