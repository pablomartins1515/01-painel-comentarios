import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <Avatar src="https://avatars.githubusercontent.com/u/58120519?v=4" />
              <div className={styles.authorInfo}>
                <strong >Diego Fernandes</strong>
                <span>Web Developer</span>
              </div>
            </div>

             <time title='11 de maio às 08:13h' dataTime='2022-05-11 08:13:30'>Publicado há 1h</time>
          </header>

            <div className={styles.content}>
              <p>Fala Galera ✌</p>
              <p>Acabei de subir meu portifólio. É um projeto que fiz no nlw/return</p>
              <p>👉{' '}<a href="">jane.designer/doctorcare</a></p>
              <p>
                <a href="">#projetonovo</a>{' '}
                <a href="">#figma</a>{' '}
                <a href="">#react</a>{' '}
              </p>
            </div>     

            <form className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>
              <textarea
                placeholder='Deixe um comentário'
              />
              <footer>
                <button type='submit'>Publicar</button>
              </footer>
            </form> 

            <div className={styles.commentList}>
              <Comment />
            </div>      
        </article>
  )
}

