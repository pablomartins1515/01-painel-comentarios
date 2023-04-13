import { Header } from './components/Header';
import { Post } from './components/Post';
import { PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css"; 

import "./global.css"; 

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/pablomartins1515.png',
      name: 'Pablo Martins',
      role: 'CTO @nada',
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera ✌'},
      {type: 'paragraph', content: 'Acabei de subir meu portifólio. É um projeto que fiz no nlw/return.'},
      {type: 'link', content: 'jane.designer/doctorcare'},
    ],
    publishedAt: new Date('2023-04-08 18:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/diego3g.png',
      name: 'Pablo Martins',
      role: 'CTO @rockeseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera ✌'},
      {type: 'paragraph', content: 'Acabei de subir meu portifólio. É um projeto que fiz no nlw/return.'},
      {type: 'link', content: 'jane.designer/doctorcare'},
    ],
    publishedAt: new Date('2023-04-08 18:10:00'),
  }
];


export function App() {
  return (
   <div>    
    <Header />   

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
          {posts.map(post => {
            
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}        
      </main>
    </div>
   </div>
  )
}

