require('dotenv/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { verify } = require('jsonwebtoken'); 
const { hash, compare } = require('bcryptjs');

//1 Reg a user
// Login a user
// Logout a user
// Setup a protected route
// get a new accesstoken with a refresh token

const server = express(); 