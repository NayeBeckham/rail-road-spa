import axios from "axios";
import { API_URL } from "../shared/constants";
import { Destination } from "../models/Destination";

export const getDestinations = async () => {

    const response = await axios.get(
        `${API_URL}/destinations`
    )

    return response;

}

export const createDestination = async (destination: Destination) => {
    const response = await axios.post(`${API_URL}/destinations`, destination)

    return response;
}