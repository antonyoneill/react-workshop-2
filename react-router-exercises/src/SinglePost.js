import React, { Component } from 'react'

// EXERCISE: can you update this component so it makes an API request to fetch the post based on the ID?
/*
1. fetch() the post
2. Add it to the state
3. Render it
4. Deal with the case of a post not being found
*/
class SinglePost extends Component {

  constructor(props) {
    super(props)
    this.state = {
      post: undefined
    }
  }

  fetchPost() {
    fetch(`http://localhost:3004/posts/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(post => {
        this.setState({
          post: post,
        })
      })
  }

  componentWillMount() {
    this.fetchPost()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchPost()
    }
  }

  render() {
    if (this.state.post) {
      return (
        <div>
          <p>A single post! ID: {this.props.match.params.id}</p>
          <p>{this.state.post && this.state.post.title}</p>
        </div>
      )
    } else {
      return <span>Still loading!</span>
    }
  }
}

export default SinglePost
