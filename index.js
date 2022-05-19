const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const cors = require('cors');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    app.use(cors());
    next();
});

app.use("/api/quotes", apiRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port 8080"));