import {
  Modal,
  Box,
  Typography,
  Stack,
  IconButton,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import {
  createDestination,
  getDestinationByName,
  updateDestinationByName,
} from "../../api/destinationApi";
import { Destination } from "../../models/Destination";
import { createReceiver, getReceiverByName, updateReceiverByName } from '../../api/receiverApi';
import { Receiver } from "../../models/Receiver";

export const CreateUpdateModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const {
    isOpen,
    isReceiver,
    setShowModal,
    isUpdateOpen,
    setShowUpdateModal,
    setIsUpdate,
    isUpdate,
    selectedRow,
  } = props;

  let destination, receiver;

  useEffect(() => {
    if (!isUpdate) setOpen(isOpen);
    else {
      if(isReceiver){
        getReceiver
        .refetch()
        .then((data) => 
        {
          setName(data.data.name);
          setPriority(data.data.priority);
        }
        );
      }
      else {
        getDestination
        .refetch()
        .then((data) => {
          setName(data.data.name);
          setPriority(data.data.priority);
        });
      }
      setOpen(isUpdateOpen);
    }
  }, [isOpen, isUpdateOpen]);

  const handleClose = () => {
    setOpen(false);
    setShowModal(false);
    setShowUpdateModal(false);
    setIsUpdate(false);
  };

  const destinationMutation = useMutation(createDestination);
  const destinationUpdateMutation = useMutation(updateDestinationByName);
  const receiverMutation = useMutation(createReceiver);
  const receiverUpdateMutation = useMutation(updateReceiverByName);

  const handleSave = async (name, priority) => {
    if (!isReceiver) {
      let newDestination: Destination = {
        name,
        priority,
        type: "destination",
      };

      if(!isUpdate) destination = await destinationMutation.mutateAsync(newDestination);
      else {
        let currentDestination: Destination = {
          name: selectedRow,
          priority,
          type: "destination",
        };

        destination = await destinationUpdateMutation.mutateAsync({currentDestination, name, priority});
      }
    } else {
      let newReceiver: Receiver = {
        name,
        priority,
        type: "receiver",
      };
      if(!isUpdate) receiver = await receiverMutation.mutateAsync(newReceiver);
      else {
        let currentReceiver: Receiver = {
          name: selectedRow,
          priority,
          type: "receiver",
        };
  
        receiver = await receiverUpdateMutation.mutateAsync({currentReceiver, name, priority});
      }
    }

    setOpen(false);
    setShowModal(false);
    setName("");
    setPriority("");

    // if (destination.status === 200 || receiver.status === 200)
    //   return <Alert severity="success">Saved succesfully!</Alert>;
  };

  const handleNameTextInputChange = (event) => {
    setName(event.target.value);
  };

  const handlePriorityTextInputChange = (event) => {
    setPriority(event.target.value);
  };

  const getReceiver = useQuery(
    "getReceiverByName",
    () => getReceiverByName(selectedRow),
    {
      enabled: false,
    }
  );

  const getDestination = useQuery(
    "getDestinationByName",
    () => getDestinationByName(selectedRow),
    {
      enabled: false,
    }
  );

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
            {isUpdate ? "Update " : "Create "}
            {isReceiver ? "Receiver" : "Destination"}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: 1 }}
          >
            Name
          </Typography>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            value={name}
            onChange={handleNameTextInputChange}
            fullWidth
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: 1 }}
          >
            Priority
          </Typography>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            type="number"
            value={priority}
            onChange={handlePriorityTextInputChange}
            fullWidth
          />
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
              onClick={() => handleSave(name, priority)}
            >
              {isUpdate ? "Update" : "Save"}
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
