const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { api } = require('./routers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/', api)
app.use(express.static('public'));
app.use(express.static('views'));
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
})
app.use((req, res) => {
    res.status(500).send('<h1>500 Internal Server Error</h1>');
})

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

