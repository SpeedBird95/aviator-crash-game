import { ComponentMeta, ComponentStory } from '@storybook/react';
import Graphic, { IGraphic } from './Graphic';
import { mockGraphicProps } from './Graphic.mocks';

export default {
  title: 'Graphic',
  component: Graphic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    actions: { handles: ['click', '.btn'] },
  },
} as ComponentMeta<typeof Graphic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Graphic> = (args) => (
  <Graphic {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGraphicProps.base,
} as IGraphic;
