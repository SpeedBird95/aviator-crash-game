import Image from 'next/image';
import styles from './Graphic.module.css';

/* IF COMPONENT DOESN'T USE PROPS LEAVE THIS EMPTY */
export interface IGraphic {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const Graphic: React.FC<IGraphic> = ({ tag, title, body, author, time }) => {
  const action = () => {
    console.log('asdfads');
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
          <button onClick={() => action()}>Anashe</button>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphic;
