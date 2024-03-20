import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { CarComponent } from '../components/Car/CarComponent';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
});

// //👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CarComponent> = {
  component: CarComponent,
};

export default meta;
type Story = StoryObj<typeof CarComponent>;

export const CarComponentStory: Story = {
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
