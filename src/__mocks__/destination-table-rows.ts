import { Destination } from "../models/Destination";

export const mockDestinationTableRows: Destination[] = [
  { name: "Chicago", priority: 3, type: "destination" },
  { name: "Hermosillo", priority: 2, type: "destination" },
  { name: "LA", priority: 5, type: "destination" },
  { name: "Guaymas", priority: 6, type: "destination" },
  { name: "Nogales", priority: 2, type: "destination" },
  { name: "Texas", priority: 1, type: "destination" },
  { name: "San Diego", priority: 1, type: "destination" },
];

export const mockDestinationAtCreate: Destination = {
  name: "Las Vegas",
  priority: 1,
  type: "destination",
};
