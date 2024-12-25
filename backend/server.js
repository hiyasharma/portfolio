const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define schema and model
const reportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ }, // Email format validation
    details: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Report = mongoose.model('Report', reportSchema);

// Endpoint to handle form submissions
app.post('/report', async (req, res) => {
    // Validate if required fields are present
    if (!req.body.name || !req.body.email || !req.body.details || !req.body.category) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        const newReport = new Report(req.body);
        await newReport.save();
        res.status(201).json({ success: true, message: 'Report submitted successfully!' });
    } catch (error) {
        console.error('Error saving report:', error);
        res.status(500).json({ success: false, message: 'Error saving report.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
