import {
  Modal,
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { deleteDestination } from "../../api/destinationApi";
import { deleteReceiver } from "../../api/receiverApi";

export const DeleteModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const { isDeleteOpen, isReceiver, setShowDeleteModal, selectedRow } = props;

  useEffect(() => {
    setOpen(isDeleteOpen);
  }, [isDeleteOpen]);

  const handleClose = () => {
    setOpen(false);
    setShowDeleteModal(false);
  };

  const deleteDestinationQuery = useQuery(
    ["deleteDestination", selectedRow],
    () => deleteDestination(selectedRow),
    {
      enabled: false,
    }
  );

  const deleteReceiverQuery = useQuery(
    "deleteReceiver",
    () => deleteReceiver(selectedRow),
    {
      enabled: false,
    }
  );

  const handleDelete = () => {
    if (!isReceiver) {
      deleteDestinationQuery.refetch();
    } else {
      deleteReceiverQuery.refetch();
    }

    setOpen(false);
    setShowDeleteModal(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row-reverse" spacing={1}>
            <IconButton aria-label="delete" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginTop: "-30px" }}
          >
            {isReceiver ? "Delete Receiver" : "Delete Destination"}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: 1 }}
          >
            Are you sure to delete the information?
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 40,
            }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{
                marginRight: 1,
                backgroundColor: "#b71c1c",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                  borderColor: "#b71c1c",
                  boxShadow: "none",
                },
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "#2e7d32",
                "&:hover": {
                  backgroundColor: "#388e3c",
                  borderColor: "#2e7d32",
                  boxShadow: "none",
                },
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
