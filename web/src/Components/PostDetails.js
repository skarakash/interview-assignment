import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { getPost } from '../utils/asyncUtils';

import '../Styles/PostDetailsStyles.css'
import Button from 'react-bootstrap/Button';

function PostDetails({match}) {
    useEffect(() => {
       fetchPost();
    }, []);

    const [post, setPost] = useState('');

    const fetchPost = async () => {
        getPost(match.params.id).then(data => setPost(data));
    };

    if(post.data){
        return (
            <div className="container post_details">

                <h1>{post.description}</h1>
                <img src={post.data.media[0].image} />
                <div className="buttons">
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                    <Link to={`/post_edit_form/${match.params.id}`}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            </div>
        );
    } else {
       return <div>Loading...</div>
    }
}

export default PostDetails;