const express = require('express');
const app = express();

app.set('port', 3000);

const indexRouter = require('./routes/index.js')
app.use('/', indexRouter)

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})