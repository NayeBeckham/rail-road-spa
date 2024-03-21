import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { deleteReceiver } from "../__mocks__/handlers";
import { DeleteModal } from "../components/DestinationReceiver/DeleteModal";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
});

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DeleteModal> = {
  component: DeleteModal,
};

export default meta;
type Story = StoryObj<typeof DeleteModal>;

export const DeleteComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    isReceiver: true,
    isDeleteOpen: true,
    selectedRow: "USPS"
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        {Story()}
        </QueryClientProvider>
    ),
  ],
  parameters: {
    msw: {
      handlers: [
        deleteReceiver
      ]
    }
  }
};