require('dotenv').config()
const PORT = process.env.PORT || 3000
const http = require('http')
const server = http.createServer((req, res) => {
	  res.statusCode = 200
	  res.setHeader('Content-Type', 'text/plain')
	  res.end(`Hello ${process.env.MY_PARAM_VALUE}`)
})

server.listen(PORT, () => {
	  console.log(`Server running on port:${PORT}/`)
})

