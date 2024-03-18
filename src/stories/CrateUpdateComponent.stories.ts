import type { Meta, StoryObj } from '@storybook/react';
import { CreateUpdateModal } from '../components/DestinationReceiver/CreateUpdateModal';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CreateUpdateModal> = {
  component: CreateUpdateModal,
};

export default meta;
type Story = StoryObj<typeof CreateUpdateModal>;

export const CreateUpdateComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};