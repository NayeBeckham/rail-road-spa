import { context, response, rest } from "msw";
import { mockDestinationAtCreate, mockDestinationTableRows } from './destination-table-rows';
import { API_URL } from "../shared/constants";
import { mockReceiverAtUpdate, mockReceiverTableRows } from "./receiver-table-rows";

export const mockedGetDestinations = rest.get(`${API_URL}/destinations`, () => {
    return response(
      context.delay(),
      context.json(
        mockDestinationTableRows
      )
    );
  });

  export const mockedGetDestinationsError = rest.get(`${API_URL}/destinations`, () => {
    return response(
      context.delay(),
      context.json({}),
      context.status(400),
    );
  });

  export const createDestination = rest.post(`${API_URL}/destinations`, () => {
    return response(
      context.delay(),
      context.json(
        mockDestinationAtCreate
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

  export const mockedGetReceiversError = rest.get(`${API_URL}/receivers`, () => {
    return response(
      context.delay(),
      context.json({}
      ),
      context.status(400)
    );
  });


  export const updateReceiver = rest.patch(`${API_URL}/receivers/USPS`, () => {
    return response(
      context.delay(),
      context.json(
        mockReceiverAtUpdate
      )
    );
  });

  export const deleteReceiver = rest.delete(`${API_URL}/receivers/USPS`, () => {
    return response(
      context.delay(),
      context.json(
        true
      )
    );
  });

 
  

