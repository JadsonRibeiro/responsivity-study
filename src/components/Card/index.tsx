import { useState } from 'react';
import ReactModal from 'react-modal';

import { Article } from "../../types";

interface CardProps {
  article: Article,
}

import styles from './card.module.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export function Card({ article }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={styles.card} key={article.video_id}
        onClick={() => setIsOpen(true)}
      >
        <div className={styles.image}>
          <img src={article.thumb} />
        </div>
        <div className={styles.content}>
          <p className={`${styles.title} ${styles.textMedium}`}>
            {article.title}
          </p>
          <div className={styles.info}>
            <p className={styles.textMedium}>{article.duration}</p>
            <p className={`${styles.price} ${styles.textMedium}`}>Free</p>
          </div>
        </div>
      </div>
      <ReactModal 
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyles}
      >
        <iframe 
          src={`https://www.youtube.com/embed/${article.video_id}`}
          allowFullScreen
          style={{ width: '90%', height: '90%' }}
        ></iframe>
      </ReactModal>
    </>
  )
}