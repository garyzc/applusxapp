const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('./mock/faker-data.js')
const router = jsonServer.router(db())
const middlewares = jsonServer.defaults()
const host = 'localhost'
const port = 3004

server.use(jsonServer.bodyParser);

server.use(middlewares)
// server.use((req, res, next) => {
//  if (isAuthorized(req)) { // 在这儿添加你的权限逻辑
//    next() // 继续json-server路由
//  } else {
//    res.sendStatus(401)
//  }
// })
router.render = (req, res) => {
    res.jsonp({
        code: 0,
        data: res.locals.data
    })
}
server.use(router)
server.listen({
    host: host,
    port: port
}, () => {
  console.log(`JSON Server is running http://${host}:${port}`)
})