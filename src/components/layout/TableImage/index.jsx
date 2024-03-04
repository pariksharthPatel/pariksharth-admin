import React from "react";
import { useDispatch } from "react-redux";
import { openImagePreview } from "../../../redux/actions/commonActions";
import { isValidUrl } from "../../../utils/isValidUrl";

const TableImage = ({ src }) => {
  const dispatch = useDispatch();
  const imgUrl = isValidUrl(src)
    ? src
    : `${import.meta.env.VITE_IMAGE_URL}/${src}`;
  return (
    <img
      src={imgUrl}
      alt={imgUrl}
      style={{ width: 40, height: 40, objectFit: "contain", cursor: "pointer" }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          openImagePreview({
            title: "Image",
            src: imgUrl,
          })
        );
      }}
    />
  );
};

export default TableImage;
