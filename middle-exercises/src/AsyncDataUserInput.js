import React, { Component } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      posts: undefined
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.searchFor = this.searchFor.bind(this)
    this.searchForReact = this.searchForReact.bind(this)
  }

  componentDidMount() {
    this.fetchPosts()
  }

  onSubmit(evt) {
    this.fetchPosts()
    evt.preventDefault()
  }

  fetchPosts() {
    // EXERCISE: how can you change this search query based on what
    // the user has typed into the text field
    fetch(`http://localhost:3004/posts?q=${this.state.search}`)
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  onChange(evt) {
    this.searchFor(evt.target.value)
  }

  searchFor(term) {
    this.setState({search: term}, this.fetchPosts)
  }

  searchForReact() {
    this.searchFor('react')
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          // EXERCISE: abstract this into its own component
          // and fill out the propTypes
          <li key={post.id}><p>{post.title}</p></li>
        )) }
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
          <input type="text" onChange={this.onChange} value={this.state.search} />
          <input type="submit" value="Search" />
        <button onClick={this.searchForReact} >React posts</button>
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
        </form>
      </div>
    )
  }
}
