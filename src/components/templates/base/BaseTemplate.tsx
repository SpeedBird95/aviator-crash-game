import Graphic from '../../Graphic/aviator/Graphic';
import { mockGraphicProps } from '../../Graphic/aviator/Graphic.mocks';
import styles from './BaseTemplate.module.css';

/* IF COMPONENT DOESN'T USE PROPS LEAVE THIS EMPTY */
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className={styles.container}>
      <p>{sampleTextProp}</p>
      <br />
      <Graphic {...mockGraphicProps.alt} />
    </div>
  );
};

export default BaseTemplate;
