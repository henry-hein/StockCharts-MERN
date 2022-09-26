const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3001;
const connectDB = require('./config/db');

// Sign in, Sign out, Password Reset
// Dashboard -> hot list, top gainers, losers, alerts
// Charts -> watchlist, all tickers
// Profile -> 

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/routes'));
// app.use('/charts');
// app.use('/signIn');
// app.use('/signOut');
// app.use('/me');

app.listen(port, () => console.log(`Server started on ${port}`));