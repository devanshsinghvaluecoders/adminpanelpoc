// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const jwt = require('jsonwebtoken');

export default function handler(req, res) {
  res.status(200).json({ token: jwt.sign({ user: req.body }, 'top_secret') });
}
