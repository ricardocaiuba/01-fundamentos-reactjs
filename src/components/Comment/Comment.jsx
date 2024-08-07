import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/C4D03AQF-vXNVoKXYcA/profile-displayphoto-shrink_800_800/0/1658157894592?e=1728518400&v=beta&t=1sn2iD-T8qWP43iMjY9-7rRlngFAS9veacIwjHeTqP4"
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
            <button title="Deletar comentários">
              <Trash size={20}/>
            </button>
          </header>

          <p>Infelizmente neste dia não será possível pois ainda não se completou o período aquisitivo</p>
          <p>Por favor, informe novo requerimento com data superior a 14 de novembro.</p>
          <p>Se atentar com inicio sempre nas segundas-feiras.</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Ciente <span>sim</span>
          </button>
        </footer>
      </div>
    </div>
  );
}