import axios from "axios";
import { Car } from "../models/Car";

export const getSortedCars = async (carList: Car[]) => {

    const response = await axios.post(
        `http://localhost:8080/sort`, carList
    )

    return response.data;

}