import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'Hello world!',
};
/*THE REASON OF THIS IS BECAUSE I HAVE MORE THAN ONE DIFFERENT VERSION OF PROPS, I COULD HAVE AN ALT VERSION THAT IT SampleTextProp CAN BE 'Hello Alt World, and i can use it in my app or stories'  */

export const mockBaseTemplateProps = {
  base,
};
