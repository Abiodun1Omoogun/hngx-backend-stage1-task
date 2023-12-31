const express = require('express');
const _ = require('lodash');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(cors());

app.get('/api', (req, res) => {
    const { slack_name, track } = req.query;

    //  validate correct input parameters
    if (!slack_name || !track) {
        return res.status(400).json({ error: 'slack_name and track parameters are required' });   
    }

    // slack name & track
    const slackName = 'Emmalex';
    const hngxTrack = 'backend';

    // Github repo & file
    const githubFileUrl = 'https://github.com/Abiodun1Omoogun/hngx-backend-stage1-task/blob/main/emmalex.js';
    const githubRepoUrl = 'https://github.com/Abiodun1Omoogun/hngx-backend-stage1-task';

    //  current day
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getUTCDay();
    const currentDay = daysOfWeek[currentDayIndex];

    // current UTC time 
    const date = new Date();
    // const utcTime = new Date(date .getTime() + (date.getTimezoneOffset() + 2 * 60) * 60000);

    const utcTime = date.toISOString().replace(/\.\d{3}Z$/, 'Z');

    const response = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: hngxTrack,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200,
    };

    res.status(200).json(response);
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Api Server is running ${PORT}...`));
