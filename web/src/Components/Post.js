import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/PostStyles.css'

class Post extends Component {
    constructor(){
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        const {post} = this.props;
        this.props.delete(post['_id'])
    }

    render(){
        const {post} = this.props;
        const {data} = post;
        //TODO: destructure post object properly
        return (
            <>
                <Card className='card'>
                    <Card.Img variant="top" src={data.media[0].image}/>
                    <Card.Body>
                        <Card.Title>{data.media[0].description}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleDelete}>Delete</Button>
                        <Link to={`/post/${post['_id']}`} ><Button variant="primary">Details</Button></Link>
                        <Link to={`/post_edit_form/${post['_id']}`} ><Button variant="primary">Edit</Button></Link>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Post;