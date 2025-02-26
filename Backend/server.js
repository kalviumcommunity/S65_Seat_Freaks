const express = require('express');
require('dotenv').config();
const app = express();
const connetDB = require('./config/db');
const auth = require('./middleware/auth');

app.use(express.json());

app.use("/api/users", require("./routes/user"));
app.use("/api/seat", auth, require("./routes/seat"));
app.use("/api/reviews", auth, require("./routes/review"));
app.use("/api/reports", auth, require("./routes/report"));
app.use("/api/leaderboard", auth, require("./routes/leaderboard"));

app.get('/ping', (req, res) => {
    try {
        res.status(200).send("Ping Working Fine");
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error",
            message: "Ping route is not Working Fine",
            description: error.message
        });
    }
});

app.listen(3000, (req, res) => {
    try {
        connetDB();
        console.log("Server is Listening at Port 3000");
    } catch (error) {
        console.log(error.message);
    }
});


