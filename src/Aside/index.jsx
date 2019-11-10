import React from 'react';
import './styles.css'
import Link from '../Link';

function Aside(){
    return (
        <aside className="Aside">
            <ul>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
                <Link>Link 5</Link>
            </ul>
        </aside>
    )
    
}

export default Aside;