import axios from "axios";
import { API_URL } from "../shared/constants";
import { Destination } from "../models/Destination";

export const getDestinations = async () => {
  const response = await axios.get(`${API_URL}/destinations`);

  return response;
};

export const createDestination = async (destination: Destination) => {
  const response = await axios.post(`${API_URL}/destinations`, destination);

  return response;
};

export const deleteDestination = async (name) => {
  const response = await axios.delete(`${API_URL}/destinations/${name}`);

  return response;
};

export const getDestinationByName = async (name) => {
  const response = await axios.get(`${API_URL}/destinations/${name}`);

  return response.data;
};

export const updateDestinationByName = async (destination) => {
  const { currentDestination, name, priority } = destination;
  const response = await axios.patch(`${API_URL}/destinations/${name}`, {
    destination: currentDestination,
    priority,
  });

  console.log(response)

  return response.data;
};
