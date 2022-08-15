import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
      req.json({message: "ok"})
    })
    .post((req, res) => {
      req.json({message: "posted"})
    })

export default handler;