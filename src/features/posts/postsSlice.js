import {createSlice, nanoid} from '@reduxjs/toolkit'
import {sub} from 'date-fns'
const initialState = []
  // {
  //   id: '1',
  //   title: 'First Post!',
  //   content: 'Hello!',
  //   date: sub(new Date(), {minute: 10}).toISOString()
  // }, {
  //   id: '2',
  //   title: 'Second Post',
  //   content: 'More text',
  //   date: sub(new Date(), {minute: 5}).toISOString()
  // }]


const postsSlice = createSlice({
  name : 'posts',
  initialState,
  reducers : {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0
            }
          }
        }
      }
    },
    postUpdated: {
      reducer: (state, action) => {
        const {id, title, content} = action.payload
        const postToUpdate = state.find(post => post.id == id)
        console.log('postToUpdatepostToUpdate', postToUpdate);
        if (postToUpdate) {
          postToUpdate.title = title
          postToUpdate.content = content
        }
      }
    },
    reactionAdded(state, action) {
      const {postId, reaction} = action.payload
      const post = state.find(post => post.id === postId)
      if(post) {
        post.reactions[reaction]++
      }
    }
  }
})

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions
export default postsSlice.reducer