import axios from "axios";
import { Car } from "../models/Car";
import { API_URL } from "../shared/constants";

export const getSortedCars = async (carList: Car[]) => {

    const response = await axios.post(
        `${API_URL}/sort`, carList
    )

    return response.data;

}