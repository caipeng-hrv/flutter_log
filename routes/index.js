const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/info', async (ctx, next) => {
  var msg = ctx.request.body
  console.log(msg)
  global.wsServer.broadcast(msg.type + ': ' + msg.msg);
  ctx.body = 'send sucess';
})

module.exports = router
