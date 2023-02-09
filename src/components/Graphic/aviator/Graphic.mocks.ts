import { IGraphic } from './Graphic';

const base: IGraphic = {
  tag: 'Felines',
  title: `What's new in Cats`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'Alex',
  time: '2h ago',
};
const alt = {
  tag: 'asdf',
  title: `asdfas`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  author: 'asdfa',
  time: 'nashe',
};
/*THE REASON OF THIS IS BECAUSE I HAVE MORE THAN ONE DIFFERENT VERSION OF PROPS, I COULD HAVE AN ALT VERSION THAT IT SampleTextProp CAN BE 'Hello Alt World, and i can use it in my app or stories'  */

export const mockGraphicProps = {
  base,
  alt,
};
