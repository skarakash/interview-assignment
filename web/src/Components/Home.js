import React, { Component } from 'react';

import Post from './Post';
import { getPosts, deletePost } from '../utils/asyncUtils';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AppStyles.css'


class Home extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            error: null
        };
        this.getAllPosts = this.getAllPosts.bind(this);
    }

    componentDidMount(){
        //TODO: Might check previous path, if it's /post/:id only then fecth all posts, otherwise fetch by clicking a button
        this.getAllPosts()
    }

    getAllPosts = () => getPosts().then(
        data => this.setState({posts: data})
    ).catch(error => this.setState({error}));

    deletePost =(id) => {
        deletePost(id).then(
            data => {
                if (data.ok){
                    this.getAllPosts()
                }
            }
        ).catch(error => this.setState({error}))
    };

    render(){
        const { posts } = this.state;
      return (
          <div className="container">
              <div className="wrapper">
                  {posts.length > 0 && posts.map(post => {
                      return  <Post  key={post['_id']} post={post} delete={this.deletePost}/>
                  })}
              </div>
          </div>
      );
    }
}

export default Home;
