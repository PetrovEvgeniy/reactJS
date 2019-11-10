import React from 'react';
import './styles.css'
import Link from '../Link';

function Footer(){
    return (
        <footer className="Footer">
            <ul>
                <Link>Link 1</Link>
                <Link>Link 2</Link>
                <Link>Link 3</Link>
                <Link>Link 4</Link>
                <Link>Link 5</Link>
                <Link>Link 6</Link>
                <Link>Link 7</Link>
                <Link>Link 8</Link>
                <Link>Link 9</Link>
                <Link>Link 10</Link>
                
                <img src="https://upload.wikimedia.org/wikipedia/en/5/55/Prince_George_Cougars_logo_2015.png" alt="Test"/>

            </ul>
            <p>Software University © 2019</p>
        </footer>
    )
    
}

export default Footer;