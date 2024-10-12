import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css"

export function Comment(props) {
  const [likeCount, setLikeCount] = useState(0) ;

  function handleDeleteComment() {
    props.onDeleteComment(props.content) ;
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1) ;
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/v2/C4D03AQF-vXNVoKXYcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1658157894592?e=1733961600&v=beta&t=BuoqqH7SpTtvYmGwk_e5fLA77ONAccLhEcnMyC-wJW4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Silvana Ignacio Barreira</strong>
              <time
                title="04 de Agosto de 2024 às 12:00"
                dateTime="2024-08-04 12:00:22"
              >
                Cerca de 30m atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentários">
              <Trash size={20}/>
            </button>
          </header>
          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}