import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {getPost, updatePost} from "../utils/asyncUtils";

class PostEditForm extends Component{
    constructor(){
        super();
        this.state = {
            post: {},
            text: '',
            redirect: false
        };
        this.fetchPost = this.fetchPost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fetchPost = async () => {
        const {match } = this.props;
        getPost(match.params.id).then(data => this.setState({post: data}));
    };

    componentDidMount(){
        this.fetchPost();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { text, post } = this.state;
        const id = post["_id"];
        updatePost(id, text).then(
            () => this.props.history.push('/')
        )
    };

    handleChange = (text) => {
        this.setState({text});
    };

    render(){
        const {post} = this.state;
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="post_descr">
                        <Form.Label>Post Description</Form.Label>
                        <Form.Control type="text" placeholder="Edit post" defaultValue={post.description || ''} onChange={e => this.handleChange(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

}

export default PostEditForm;