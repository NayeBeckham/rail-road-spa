import type { Meta, StoryObj } from '@storybook/react';
import { CarComponent } from '../components/Car/CarComponent';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CarComponent> = {
  component: CarComponent,
};

export default meta;
type Story = StoryObj<typeof CarComponent>;

export const CarComponentStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};