import React, { Component, PropTypes } from 'react'


// note: in our own apps, we'd have each of these components in their own file
// but for the exercise leave them all in this one!

// make sure you've got the API running first!

const Post = props => (
  <p>{props.post.title}</p>
)
Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default class ChildParentCommunication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/posts')
      .then(data => data.json())
      .then(posts => this.setState({ posts }))
  }

  onNewPost(post) {
    this.setState({
      posts: this.state.posts.concat([post])
    })
  }

  deletePost(id) {
    fetch(`http://localhost:3004/posts/${id}`,{
        'method': 'DELETE'
    }).then(response => {
      this.setState({
        posts: this.state.posts.filter(post => post.id !== id)
      })
    })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          <li key={post.id}><Post post={post} /><button onClick={this.deletePost.bind(this, post.id)}>Delete</button></li>
        )) }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        <AddNewPost onNewPost={post => this.onNewPost(post)} />
      </div>
    )
  }
}

class AddNewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  onSubmit(e) {
    e.preventDefault()
    // EXERCISE: make this function:
    // 1. POST the new post to http://localhost:3004/posts using the fetch API
    // 2. Call the onNewPost prop to tell the parent component about the new post

    if (!this.state.inputValue) {
      return
    }
    // to help: here's how to make a POST request using the fetch api
    fetch('http://localhost:3004/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.inputValue
      })
    })
    .then(newPost => newPost.json())
    .then(newPost => this.props.onNewPost(newPost))
    .then(() => this.setState({inputValue: ''}))
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <p>Enter your new blog post:</p>
        <input type="text" onChange={e => this.onInputChange(e)} value={this.state.inputValue} />
        <input type="submit" value="Save" />
      </form>
    )
  }
}
AddNewPost.propTypes = {
  onNewPost: React.PropTypes.func.isRequired
}
