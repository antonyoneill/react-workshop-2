import React, { Component } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined,
      term: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.searchForReact = this.searchForReact.bind(this)
    this.fetchPosts()
  }

  componentDidMount() {
    this.fetchPosts()
  }

  onSubmit(evt) {
    this.fetchPosts()
    evt.preventDefault()
  }

  fetchPosts() {
    fetch(`http://localhost:3004/posts`)
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  onChange(evt) {
    this.setState({term: evt.target.value},
    this.renderPosts)
  }

  searchForReact() {
    this.renderPosts('react')
  }

  renderPosts() {
    return (
      <ul>
        {
          this.state.posts
            .filter(post => post.title.match(this.state.term))
            .map(post => <li key={post.id}><p>{post.title}</p></li>)
        }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        { /* EXERCISE: bind to the onSubmit event on this form so we can search when the user submits */ }
        { /* EXERCISE: you'll need to bind to the onChange event of the input to know the latest value that the user has typed */}
        <form onSubmit={this.onSubmit}>
          { /* EXERCISE: csn you make this input auto focus when the user visits the page, like we did earlier on Codepen? */ }
          <input type="text" onChange={this.onChange} value={this.state.term} />
          <input type="submit" value="Search" />
        <button onClick={this.searchForReact} >React posts</button>
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
        </form>
      </div>
    )
  }
}
