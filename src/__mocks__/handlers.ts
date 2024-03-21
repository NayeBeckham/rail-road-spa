import { context, response, rest } from "msw";
import { mockDestinationTableRows } from './destination-table-rows';
import { API_URL } from "../shared/constants";
import { mockReceiverTableRows } from "./receiver-table-rows";

export const mockedGetDestinations = rest.get(`${API_URL}/destinations`, () => {
    return response(
      context.delay(),
      context.json(
        mockDestinationTableRows
      )
    );
  });

  export const mockedGetReceivers = rest.get(`${API_URL}/receivers`, () => {
    return response(
      context.delay(),
      context.json(
        mockReceiverTableRows
      )
    );
  });