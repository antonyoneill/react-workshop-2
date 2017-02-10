import React, { Component } from 'react'

// EXERCISE: can you update this component so it makes an API request to fetch the posts from our dummy API, and renders them?
/*
1. fetch() the posts on componentDidMount
2. Add them to state
3. Render them in the page
*/
class Post extends Component {
  render() {
    return (
      <a>{this.props.post.id} {this.props.post.title}</a>
    )
  }
}

export default Post
