import { Heander } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Siderbar";
import { Post } from "./components/Post/Post" ;

import styles from "./App.module.css" ;

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGkPTcBy3uuhA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705054376815?e=1733961600&v=beta&t=8P0nDjJh8Q3Gxm5HB6CXwx-I-lg5kKxj54RLnh8yL10",
      name: "Ricardo Rodrigues",
      role: "Desenvolvimento"
    },
    content: [
      {
        type: "paragraph", 
        content: "Olá Silvana!!"
      },
      {
        type: "paragraph", 
        content: "Acabei de pedir que programe minhas férias para o dia 02 de Setembro de 2024."
      },
      {
        type: "paragraph", 
        content: "Poderia aprovar, por favor?"
      },
      {
        type: "link", 
        content: "Clique aqui para aprovar"
      },
      {
        type: "paragraph", 
        content: "Muito obrigado. []s"
      }
    ],
    publichedAt: new Date("2024-08-05 19:52:12")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGkPTcBy3uuhA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705054376815?e=1733961600&v=beta&t=8P0nDjJh8Q3Gxm5HB6CXwx-I-lg5kKxj54RLnh8yL10",
      name: "Ricardo Rodrigues dos Santos",
      role: "Gerente de Desenvolvimento"
    },
    content: [
      {
        type: "paragraph", 
        content: "Olá Silvana!!"
      },
      {
        type: "paragraph", 
        content: "Acabei de pedir que programe minhas férias para o dia 02 de Setembro de 2024."
      },
      {
        type: "paragraph", 
        content: "Poderia aprovar, por favor?"
      },
      {
        type: "link", 
        content: "Clique aqui para aprovar"
      },
      {
        type: "paragraph", 
        content: "Muito obrigado. []s"
      }
    ],
    publichedAt: new Date("2024-08-04 10:11:42")
  }
] ;

export function App() {
  
  return (
    <div>
      <Heander />
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publichedAt={post.publichedAt}
                />
            )
            })
          }
        </main>
      </div>
    </div>
  )
}