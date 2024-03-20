import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { DestinationReceiverComponent } from '../components/DestinationReceiver/DestinationReceiverComponen';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
});

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DestinationReceiverComponent> = {
  component: DestinationReceiverComponent,
};

export default meta;
type Story = StoryObj<typeof DestinationReceiverComponent>;

export const DestinationReceiverComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        {Story()}
        </QueryClientProvider>
    ),
  ],
};