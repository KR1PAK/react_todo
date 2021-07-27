import { Button, Dialog, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import "./DialogDelete.scss";

const DialogDelete = ({ isDialogDeleteOpened, setIsDialogDeleteOpened, deleteFunction }) => {
  function close() {
    setIsDialogDeleteOpened(false);
  }

  return (
    <Dialog open={isDialogDeleteOpened} className="dialog-delete" onClose={close}>
      <div className="dialog-delete__box">
        <IconButton size="small" onClick={close}>
          <Close />
        </IconButton>
        Are you sure you want to delete TODO
        <div className="dialog-delete__actions">
          <Button color="primary" variant="outlined" onClick={close}>
            No
          </Button>
          <Button color="secondary" variant="contained" onClick={deleteFunction}>
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogDelete;
