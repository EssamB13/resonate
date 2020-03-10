const mount = require('koa-mount')
const jalla = require('jalla')
const app = jalla('index.js')

require('dotenv').config()

const PORT = process.env.APP_PORT || 8080

// only allow robots in production
app.use(mount('/robots.txt', function (ctx, next) {
  ctx.type = 'text/plain'
  ctx.body = `
    User-agent: *
    Disallow: ${process.env.NODE_ENV === 'production' ? '' : '/'}
  `
}))

app.listen(PORT)
