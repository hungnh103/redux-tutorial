import React from 'react'
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('rendered')
    const url = 'https://jsonplaceholder.typicode.com/posts'

    // fetch(url)
    //   .then(response => response.json())
    //   .then(json => {
        // this.props.dispatch({
        //   type: 'LOAD_POSTS',
        //   payload: json
        // })
      // })
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: { id: this.state.postId, title: this.state.value }
    })

    this.setState({ postId: this.state.postId + 1 })
  }

  render() {
    console.log('inside render method')
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value='Submit'
            />
          </form>

          <ul>
            {/*{this.props.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}*/}
          </ul>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default App
