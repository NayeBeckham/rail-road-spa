import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import { useQuery } from "react-query";
import { getReceivers } from "../../api/receiverApi";
import { getDestinations } from "../../api/destinationApi";
import { CreateUpdateModal } from "./CreateUpdateModal";

export const DestinationReceiverComponent = (props) => {
  const [receivers, setReceivers] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { isReceiver } = props;

  const { data, isLoading, error, status, refetch } = isReceiver
    ? useQuery("receivers", getReceivers)
    : useQuery("destinations", getDestinations);

  useEffect(() => {
    if(!showModal) refetch();
    
    if (isReceiver) {
      if (data?.data === undefined) setReceivers([]);
      else setReceivers(data?.data);
    } else {
      if (data?.data === undefined) setDestinations([]);
      else setDestinations(data?.data);
    }
  }, [data, status, showModal]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 800 },
    { field: "priority", headerName: "Priority", width: 800 },
  ];

  return (
    <Box component="section">
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          marginTop: "20px",
          marginLeft: "7%",
          color: "#424242",
        }}
      >
        {isReceiver ? "Receiver" : "Destination"}
      </Typography>

      <div
        style={{
          margin: "auto",
          width: "85%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          sx={{ marginRight: 1, borderRadius: 2 }}
          onClick={() => setShowModal(true)}
        >
          Add
        </Button>
        <Button
          variant="contained"
          endIcon={<UpdateIcon />}
          sx={{ marginRight: 1, borderRadius: 2 }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          endIcon={<DeleteIcon />}
          sx={{ marginRight: 1, borderRadius: 2 }}
        >
          Delete
        </Button>
      </div>

      <div style={{ height: 700, margin: "auto", width: "90%" }}>
        <DataGrid
          rows={isReceiver ? receivers : destinations}
          columns={columns}
          getRowId={(row) => row?.name + Math.random()}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
          sx={{
            m: 3,
            boxShadow: 2,
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#03a9f4",
              color: "white",
              fontSize: "18px",
            },
            "& .MuiDataGrid-cell": {
              fontSize: "16px",
            },
            "& .MuiDataGrid-cell:hover": {
              color: "#616161",
            },
          }}
        />
      </div>
      <CreateUpdateModal isOpen={showModal} setShowModal={setShowModal} isReceiver={isReceiver}/>
    </Box>
  );
};
