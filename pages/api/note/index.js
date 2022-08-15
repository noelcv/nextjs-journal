import nc from 'next-connect'
//replace with db
import notes from '../../../src/data/data'

//middleware example to protect api
// const checkAuth = (req, res, next) => {
//   if(req.headers.auth) {
//     return next()
//   }
//   res.status(401);
// }

const handler = nc()
    // .use(checkAuth()) //we can also pass middleware
    .post((req, res) => {
      const note = {...req.body, 
      id: Date.now()
      }
      notes.push(note)
      res.json({data: note})
    })
    .get((req, res) => {
      res.json({data: notes})
    })
    

export default handler;