import type { Meta, StoryObj } from '@storybook/react';
import Root from '../root.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Root> = {
  component: Root,
};

export default meta;
type Story = StoryObj<typeof Root>;

export const RootComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};