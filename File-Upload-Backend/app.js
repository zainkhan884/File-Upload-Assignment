const  express  =  require('express')
const  app  =  express()
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploads' });
const  port  =  3000
const bodyParser = require("body-parser");

app.get('/api/upload', (req, res) => {
    res.json({
        'message': 'File Upload Assignment'
    });
});

app.post('/api/upload', multipartMiddleware, (req, res) => {
    res.json({
        'message': 'File uploaded successfully'
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, () => console.log(`Application Running on port ${port}!`))