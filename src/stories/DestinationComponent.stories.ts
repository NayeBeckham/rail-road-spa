import type { Meta, StoryObj } from '@storybook/react';
import { DestinationComponent } from '../components/DestinationReceiver/DestinationComponen';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DestinationComponent> = {
  component: DestinationComponent,
};

export default meta;
type Story = StoryObj<typeof DestinationComponent>;

export const DestinationComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};