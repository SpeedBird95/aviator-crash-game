import styles from './BaseTemplate.module.css';

/* IF COMPONENT DOESN'T USE PROPS LEAVE THIS EMPTY */
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
