import React from 'react';
import '../Link/styles.css';


function Link({children}){
    return (
        <li className="listItem">
        <a href="https://google.com">{children}</a>
        </li>
    )
    
}

export default Link;