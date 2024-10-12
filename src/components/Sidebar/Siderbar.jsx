import { Avatar } from "../Avatar/Avatar";
import {PencilLine} from "phosphor-react"

import styles from "./Sidebar.module.css"

import planoFundo from "../../assets/plano-fundo.png"

// https://media.licdn.com/dms/image/C4D03AQF-vXNVoKXYcA/profile-displayphoto-shrink_800_800/0/1658157894592?e=1728518400&v=beta&t=1sn2iD-T8qWP43iMjY9-7rRlngFAS9veacIwjHeTqP4
//https://media.licdn.com/dms/image/D4D03AQGkPTcBy3uuhA/profile-displayphoto-shrink_800_800/0/1705054376815?e=1728518400&v=beta&t=KpY3ZR3FEohc68dgpyvnG1IEeB6jgR-PVhGMfCH67pM

//https://media.licdn.com/dms/image/v2/D4D03AQGkPTcBy3uuhA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705054376815?e=1733961600&v=beta&t=8P0nDjJh8Q3Gxm5HB6CXwx-I-lg5kKxj54RLnh8yL10

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src={planoFundo}
        alt="Plano de Fundo"
      />
      <div className={styles.profile}>
        <Avatar src="https://media.licdn.com/dms/image/v2/C4D03AQF-vXNVoKXYcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1658157894592?e=1733961600&v=beta&t=BuoqqH7SpTtvYmGwk_e5fLA77ONAccLhEcnMyC-wJW4" />
        <strong>Silvana Ignacio Barreira</strong>
        <span>Gerente de RH</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}