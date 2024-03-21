import { Receiver } from "../models/Receiver";


export const mockReceiverTableRows: Receiver[] = [
  { name: "USPS", priority: 3, type: "receiver" },
  { name: "DHL", priority: 2, type: "receiver" },
  { name: "FedEx", priority: 1, type: "receiver" },
];

export const mockReceiverAtUpdate: Receiver =
  { name: "USPS", priority: 2, type: "receiver" };

