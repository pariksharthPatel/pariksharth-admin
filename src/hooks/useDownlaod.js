

import axios from "axios";

const useDownloadFile = () => {
  const token = localStorage.getItem('token')
  const getData = async (url, fileName) => {
    await axios
      .get(`${import.meta.env.VITE_IMAGE_URL}/${url}`, {
        responseType: "blob",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        var link = document.createElement("a");

        link.href = url;
        link.download = `${fileName}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return getData;
};
export default useDownloadFile;



// const useDownlaod =()=>{

//     const onDowload = (url)=>{
//     fetch(`${import.meta.env.VITE_IMAGE_URL}/${url}`, {
//     method: 'GET',
//     // headers: {
//     //   'Content-Type': 'application/pdf',
//     // },
//   })
//   .then((response) => response.blob())
//   .then((blob) => {
//     // Create blob link to download
//     const url = window.URL.createObjectURL(
//       new Blob([blob]),
//     );
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute(
//       'download',
//       url,
//     );

//     // Append to html link element page
//     document.body.appendChild(link);

//     // Start download
//     link.click();

//     // Clean up and remove the link
//     link.parentNode.removeChild(link);
//   });
// }

// return onDowload
// }

// export default useDownlaod