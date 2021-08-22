import {createSlice, nanoid} from '@reduxjs/toolkit'
const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!'
  }, {
    id: '2',
    title: 'Second Post',
    content: 'More text'
  }]


const postsSlice = createSlice({
  name : 'posts',
  initialState,
  reducers : {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
    postUpdated: {
      reducer: (state, action) => {
        const {id, title, content} = action.payload
        const postToUpdate = state.find(post => post.id == id)
        if (postToUpdate) {
          postToUpdate.title = title
          postToUpdate.content = content
        }
      },
      prepare: (title, content) => {
        return {
          paylaod: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
  }
})

export const {postAdded, postUpdated} = postsSlice.actions
export default postsSlice.reducer