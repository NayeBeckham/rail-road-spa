import type { Meta, StoryObj } from '@storybook/react';
import { DestinationReceiverComponent } from '../components/DestinationReceiver/DestinationReceiverComponen';

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
};