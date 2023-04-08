import { PencilLine} from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'></img>
            
            <div className={styles.profile}>
                <Avatar src='https://github.com/pablomartins1515.png' />
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>               
                <a href='#'>
                    <PencilLine size={20} />                    
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    ); 
        
}