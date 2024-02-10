import React from "react";
import { useDispatch } from "react-redux";
import { openImagePreview } from "../../../redux/actions/commonActions";
import Iconify from "../iconify/Iconify";
import { IconButton } from "@mui/material";
import useDownlaod from "../../../hooks/useDownlaod";

const TableFile = ({ src }) => {
  const dispatch = useDispatch();
const onDownload = useDownlaod()
   
  return(<IconButton onClick={(e)=>{
    e.stopPropagation()
    onDownload(src,src)

  }}>
  <Iconify icon="ph:download-duotone"/>

  </IconButton>)
  // return (
  //   <img
  //     src={`${import.meta.env.VITE_IMAGE_URL}/${src}`}
  //     alt={`${import.meta.env.VITE_IMAGE_URL}/${src}`}
  //     style={{ width: 40, height: 40, objectFit: "contain", cursor: "pointer" }}
  //     onClick={(e) => {
  //       // e.stopPropagation();
  //       // dispatch(
  //       //   openImagePreview({
  //       //     title: "Image",
  //       //     src: `${import.meta.env.VITE_IMAGE_URL}/${src}`,
  //       //   })
  //       // );
  //     }}
  //   />
  // );
};

export default TableFile;
