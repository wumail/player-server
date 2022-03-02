require('module-alias/register');
const app = require('router/index.js')


// app.use(function (req, res) {   
//     res.setHeader('Content-Type', 'text/plain')   
//     res.write('you posted:\n') 
//     res.end(JSON.stringify(req.body, null, 2)) 
// })

app.get('/', (req, res) => {
    res.send('Hello World!')
})