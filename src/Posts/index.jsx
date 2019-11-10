import React from 'react';
import '../Posts/';
import Post from './Post';
import postService from '../services/post-service';


class Posts extends React.Component {
    state = {
        posts: null
    }

    componentDidMount(){
        postService.load().then(posts => {
            this.setState({posts});
        })
    }

    render(){
        const { posts } = this.state;

        return posts ? (
            <div className="Posts">
                {posts.map((post) => <Post key={post.id} description={post.body} authorId={post.userId}></Post>)}
            </div>
        ) : (<h1>Loading posts...</h1> ) ;
    }
}

export default Posts;