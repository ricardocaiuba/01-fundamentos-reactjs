import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { ArrowFatRight } from "phosphor-react";

import styles from "./Post.module.css" ;
import { useState } from "react";

export function Post({author, publichedAt, content}) {1
  const [comments, setComments] = useState([
    "Infelizmente neste dia não será possível pois ainda não se completou o período aquisitivo. Por favor, informe novo requerimento com data superior a 14 de novembro. Se atentar com inicio sempre nas segundas-feiras."
  ])

  const [newCommentText, setNewCommentText] = useState("");


  const publishedDateFormattedWithIntl = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).format(publichedAt) ;

  const publishedDateFormatted = format(publichedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publichedAt, { locale: ptBR, addSuffix: true}) ;

  function handleCreateNewComment() {
    event.preventDefault() ;

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  } 

  function deleteComment(comment) {
    console.log(`Deletar comentário ${comment}`) ;
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publichedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === "link") {
              return <p key={line.content}><a href="#"><ArrowFatRight size={20} />{line.content}</a></p>
            }
          }) 
        }
      </div>

      <form onSubmit = {handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}

        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}