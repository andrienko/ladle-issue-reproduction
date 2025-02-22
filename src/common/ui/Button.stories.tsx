import type { Story, StoryDefault } from '@ladle/react';
import { Button } from '@common/ui';

export default {
  title: 'Components / Controls',
} satisfies StoryDefault;

export const ButtonStory: Story = () => (
  <div className="ladle-center flex-col u-pad-xl">
    <Button.Group>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </Button.Group>
  </div>
);
ButtonStory.storyName = 'Button';
