import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css"; 

import "./global.css"; 

export function App() {
  return (
   <div>    
    <Header />   

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post 
          author="Diego Fernandes"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ea deleniti ratione cum dicta, dolore ab nisi quod necessitatibus obcaecati omnis, tempore placeat, commodi perferendis ullam earum pariatur nostrum explicabo!"
          />
        <Post
          author="Diego Fernandes"
          content="Outro Post legal"    
        />
      </main>
    </div>
   </div>
  )
}

