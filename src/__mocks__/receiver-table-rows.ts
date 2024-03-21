import { Receiver } from "../models/Receiver";


export const mockReceiverTableRows: Receiver[] = [
  { name: "USPS", priority: 3, type: "destination" },
  { name: "DHL", priority: 2, type: "destination" },
  { name: "FedEx", priority: 1, type: "destination" },
];
