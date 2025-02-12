const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/ping', async (req, res) => {
    try {
        res.send('Ping is Working Fine...');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Server error:', error);
        process.exit(1);
    }
});
