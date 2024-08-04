import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css" ;

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://media.licdn.com/dms/image/D4D03AQGkPTcBy3uuhA/profile-displayphoto-shrink_800_800/0/1705054376815?e=1728518400&v=beta&t=KpY3ZR3FEohc68dgpyvnG1IEeB6jgR-PVhGMfCH67pM" />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Desenvolvimento</span>
          </div>
        </div>
        <time
          title="04 de Agosto de 2024 às 10:13"
          dateTime="2024-08-04 10:33:45"
        >
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        {props.content}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}