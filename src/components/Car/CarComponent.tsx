import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import AddIcon from "@mui/icons-material/Add";
import { useMutation } from "react-query";
import { getSortedCars } from "../../api/carApi";
import { Car } from "../../models/Car";

export const CarComponent = () => {
  const [roadCars, setRoadCars] = useState([]);

  let newCarsList: Car[] = [
    {
      id: 1,
      name: "Box Car 1",
      destination: "Houston",
      receiver: "UPS",
      destinationPriority: 1,
      receiverPriority: 1,
    },
    {
      id: 2,
      name: "Box Car 2",
      destination: "LA",
      receiver: "Old Dominion",
      destinationPriority: 2,
      receiverPriority: 3,
    },
    {
      id: 3,
      name: "Box Car 3",
      destination: "Chicago",
      receiver: "FedEx",
      destinationPriority: 3,
      receiverPriority: 2,
    },
  ];

  useEffect(() => {
    setRoadCars(newCarsList);
  }, []);

  const carsMutation = useMutation(getSortedCars);

  const getCarsMutation = async (carsList) => {
    try {
      const cars = await carsMutation.mutateAsync(carsList);
      for (let car of cars) {
        let id = roadCars.find(roadCar => roadCar.name === car.name).id;
        car.id = id;
      }
      setRoadCars(cars);
    } catch (error) {
      console.log(error);
    }
  };

  const openCreateRoadModal = () => {};

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    { field: "name", headerName: "Name of Car", width: 400 },
    { field: "destination", headerName: "Destination", width: 400 },
    { field: "receiver", headerName: "Receiver", width: 400 },
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
        Cars
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
          onClick={openCreateRoadModal}
        >
          Add
        </Button>
        <Button
          variant="contained"
          endIcon={<SortIcon />}
          sx={{ marginRight: 1, borderRadius: 2 }}
          onClick={() => getCarsMutation(newCarsList)}
        >
          Sort
        </Button>
      </div>

      <div style={{ height: 500, margin: "auto", width: "90%" }}>
        <DataGrid
          rows={roadCars}
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
