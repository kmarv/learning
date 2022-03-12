// import React, { useRef, useState } from 'react';

// export default function CopyExample() {

//   const [copySuccess, setCopySuccess] = useState('');
//   const textAreaRef = useRef(null);

//   function copyToClipboard(e) {
//     textAreaRef.current.select();
//     document.execCommand('copy');
//     // This is just personal preference.
//     // I prefer to not show the whole text area selected.
//     e.target.focus();
//     setCopySuccess('Copied!');
//   };

//   return (
//     <div>
//       {
//        /* Logical shortcut for only displaying the
//           button if the copy command exists */
//        document.queryCommandSupported('copy') &&
//         <div>
//           <button onClick={copyToClipboard}>Copy</button>
//           {copySuccess}
//         </div>
//       }
//       <form>
//         <textarea
//           ref={textAreaRef}
//           value='Some text to copy'
//         />
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { Button } from "antd";

// const CopyExample = () => {
//   const [copySuccess, setCopySuccess] = useState("");

//   // your function to copy here

//   const copyToClipBoard = async (copyMe) => {
//     try {
//       await navigator.clipboard.writeText(copyMe);
//       setCopySuccess("Copied!");
//     } catch (err) {
//       setCopySuccess("Failed to copy!");
//     }
//   };

//   return (
//     <div>
//       <Button onClick={() => copyToClipBoard("some text to copy")}>
//         Click here to copy
//       </Button>
//       {/* after copying see the message here */}
//       {copySuccess}
//     </div>
//   );
// };
// export default CopyExample;

import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

const CopyExample = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <>
      <IconButton onClick={handleClick} color="primary">
        <ShareIcon />
      </IconButton>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={20000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyExample;
