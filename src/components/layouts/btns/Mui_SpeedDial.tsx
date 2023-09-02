"use client";

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
// import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";
// import EditIcon from "@mui/icons-material/Edit";

import { AiFillPrinter, AiFillEdit } from "react-icons/ai";

import AlertDialogSlide from "./Demo";
// const actions = [
//   { icon: <FileCopyIcon />, name: "Copy" },
//   { icon: <SaveIcon />, name: "Save" },
//   { icon: <PrintIcon />, name: "Print" },
//   { icon: <ShareIcon />, name: "Share" },
// ];

const actions = [
  // { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <AiFillPrinter size={45} />, name: "DarkMode" },
  { icon: <AlertDialogSlide />, name: "Partager" },
];


export default function Mui_SpeedDial() {
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        zIndex: 9999,
        cursor: "pointer",
        position: "fixed",
        bottom: "0",
        right: "150px",
      }}
    >
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        // sx={{ position: "fixed", bottom: 16, right: 16 }}
        // sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<AiFillEdit size={30} />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
