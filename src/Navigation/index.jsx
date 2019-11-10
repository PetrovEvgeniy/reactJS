import React from 'react';
import './styles.css'
import Link from '../Link';

function Navigation(){
    return (
        <nav className="Navigation" style={{position:"fixed"}}>
            <ul>
                <img src="https://upload.wikimedia.org/wikipedia/en/5/55/Prince_George_Cougars_logo_2015.png" alt="Test"/>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
                <Link>Link 5</Link>
            </ul>
            
        </nav>
    
        
    )
    
}

export default Navigation;