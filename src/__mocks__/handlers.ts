import { context, response, rest } from "msw";
import { mockDestinationTableRows } from './destination-table-rows';
import { API_URL } from "../shared/constants";

export const mockedGetDestinations = rest.get(`${API_URL}/destinations`, () => {
    return response(
      context.delay(),
      context.json(
        mockDestinationTableRows
      )
    );
  });