import { Article } from "../../types";

interface CardProps {
  article: Article
}

import styles from './card.module.css';

export function Card({ article }: CardProps) {
  return (
    <div className={styles.card} key={article.video_id}>
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
  )
}