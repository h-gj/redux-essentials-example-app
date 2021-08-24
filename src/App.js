import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import {PostsList} from './features/posts/postsList'
import {AddPostForm} from './features/posts/addPostForm'
import {SinglePostPage} from './features/posts/singlePostPage'
import { EditPostForm } from './features/posts/editPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <React.Fragment>
                  <AddPostForm />
                  <PostsList />
                </React.Fragment>
              </section>
            )}
          />
          <Route exact path='/posts/:postId' component={SinglePostPage}></Route>
          <Route exact path='/editPost/:postId' component={EditPostForm}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
