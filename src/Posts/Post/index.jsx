import React from 'react';
import '../Post/styles.css';


function Post({description,authorId}){
    return (
        <div className="Post">
            <img src="https://static.memrise.com/uploads/category_photos/pokemon.png" alt="Test"/>
            <p className="description">
                {description}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {authorId}
                </span>
            </div>
        </div>
    )
    
}

export default Post;