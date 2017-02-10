import React, { Component } from 'react'
import Post from './Post'
import {Route} from 'react-router-dom'
import SinglePost from './SinglePost'
// EXERCISE: can you update this component so it makes an API request to fetch the posts from our dummy API, and renders them?
/*
1. fetch() the posts on componentDidMount
2. Add them to state
3. Render them in the page
*/
class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {posts: []}
  }

  componentDidMount() {
    fetch(`http://localhost:3004/posts`)
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  render() {
    return (
      <div>
        <ul>{this.state.posts.map(post => <li><Post post={post}/></li>)}</ul>
        <hr />
        <Route path="/posts/:id" component={SinglePost}/>
      </div>
    )
  }
}

export default Posts
