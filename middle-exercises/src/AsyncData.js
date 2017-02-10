import React, {Component} from 'react'

// make sure you've got the API running first!

const Post = props => <span>{props.id}. {props.title}</span>
Post.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
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
      this.setState({
        posts: posts
      })
      // EXERCISE: how do I store the new posts as state on the component?
    })
  }

  renderPosts() {
    // EXERCISE: render each post here
    // EXERCISE: abstract a <Post> component
    // and define propTypes for it
    return (
      <ul>
        {this.state.posts.map(post => <li><Post {...post} /></li>)}
      </ul>
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
