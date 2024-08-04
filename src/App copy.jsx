import { Heander } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Siderbar";
import { Post } from "./components/Post/Post" ;

import { ArrowFatRight } from "phosphor-react";

import styles from "./App.module.css" ;

import "./global.css"

export function App() {
  
  return (
    <div>
      <Heander />
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Ricardo Rodrigues"
            content={
              <>
                <p>Olá Silvana!!!</p>
                <p>Acabei de pedir que programe minhas férias para o dia 02 de Setembro de 2024.</p>
                <p>Poderia aprovar, por favor?</p>
                <p><a href="#"> <ArrowFatRight size={20} />Clique aqui para aprovar</a></p>
                <p>Muito obrigado. []s</p>
              </>
            }
          />
          <Post 
          author = "Ricardo Rodrigues dos Santos"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ipsum enim, consectetur cum rem aliquid reiciendis eos"
          />
        </main>
      </div>
    </div>
  )
}