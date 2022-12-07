import { rest } from 'msw'
import { data } from '../utils/constants'

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(data)
    )
  }),

  rest.post('/addPost', (req, res, ctx) => {
    const newPost  = req.body;
    console.log(newPost)
    data.unshift(req.body)
  }),

  rest.post('/addComment', (req, res, ctx) => {
    const newComment  = req.body;
    console.log(newComment)
    data[newComment.postId].comments.unshift(req.body)
  })
]