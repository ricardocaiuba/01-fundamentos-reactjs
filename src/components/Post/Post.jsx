import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { ArrowFatRight } from "phosphor-react";

import styles from "./Post.module.css" ;

export function Post({author, publichedAt, content}) {1
  const publishedDateFormattedWithIntl = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).format(publichedAt) ;

  const publishedDateFormatted = format(publichedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publichedAt, { locale: ptBR, addSuffix: true}) ;

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
          content.map((line, index) => {
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>
            } else if (line.type === "link") {
              return <p key={index}><a href="#"><ArrowFatRight size={20} />{line.content}</a></p>
            }
          }) 
        }
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