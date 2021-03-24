const express = require('express');
const app = express();

app.set('port', 3000);

const indexRouter = require('./routes/index.js')
const imageRouter = require('./routes/image.js')
const menuRouter = require('./routes/menuInfo.js')
app.use('/', indexRouter)
app.use('/image', imageRouter)
app.use('/menu-info', menuRouter)

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})