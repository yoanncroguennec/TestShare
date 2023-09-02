import { useState, forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
  DialogTitle,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import { BsFillShareFill } from "react-icons/bs";
import Share from "../../Share";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  return (
    <div>
      <BsFillShareFill color='#000' onClick={handleClickOpen} size={35} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{"Partagez le portfolio"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            <Share
              description={" - Développeur FullStack React JS / Next JS"}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermer Popup</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
