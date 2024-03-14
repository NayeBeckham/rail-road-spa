import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "@mui/icons-material/Sort";

export const DestinationReceiverComponent = (props) => {

  const { isReceiver } = props;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Name", width: 600 },
    { field: "priority", headerName: "Priority", width: 600 },
  ];

  const rows = [
    { id: 1, name: "Houston", priority: 1 },
    { id: 2, name: "LA", priority: 2 },
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
        {isReceiver ? 'Receiver' : 'Destination'}
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
        >
          Add
        </Button>
        <Button
          variant="contained"
          endIcon={<SortIcon />}
          sx={{ marginRight: 1, borderRadius: 2 }}
        >
          Sort
        </Button>
        <Button
          variant="contained"
          endIcon={<DeleteIcon />}
          sx={{ marginRight: 1, borderRadius: 2 }}
        >
          Delete
        </Button>
      </div>

      <div style={{ height: 500, margin: "auto", width: "90%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
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
    </Box>
  );
};
