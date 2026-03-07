const express = require('express');
const app = express();

// Important: parse application/x-www-form-urlencoded (that's what <form> sends)
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    console.log('──────────────────────────────');
    console.log('Username :', req.body.userName);
    console.log('Password :', req.body.password);
    console.log('──────────────────────────────');

    res.send('Login attempt recorded.');
});

app.listen(3000, () => {
    console.log('Backend listening →  http://localhost:3000');
});