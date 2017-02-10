import React, {Component} from 'react'

// make sure you've got the API running first!

const Post = props => <h1 id={`post-${props.post.id}`}>{props.post.id}. {props.post.title}</h1>
Post.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
  }).isRequired
}

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/posts').then(data => data.json()).then(posts => {
      this.setState({posts: posts})
    })
  }

  renderPosts() {
    return (
      <header>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </header>
    )
  }
  render() {
    return (
      <div>
        {!this.state.posts && <p>Loading</p>}
        {this.state.posts && this.renderPosts()}
      </div>
    )
  }
}
