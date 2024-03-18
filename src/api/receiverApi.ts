import axios from "axios";
import { API_URL } from "../shared/constants";
import { Receiver } from "../models/Receiver";

export const getReceivers = async () => {
  const response = await axios.get(`${API_URL}/receivers`);

  return response;
};

export const createReceiver = async (receiver: Receiver) => {
  const response = await axios.post(`${API_URL}/receivers`, receiver);

  return response;
};

export const deleteReceiver = async (name) => {
  const response = await axios.delete(`${API_URL}/receivers/${name}`);

  return response;
};
