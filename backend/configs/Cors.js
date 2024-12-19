require('dotenv').config();
const express = require('express');
const app = express();

const allowedOrigins = ['http://localhost:3001', 'https://e-learning-learn-go.vercel.app'];

const corsConfig = {
  origin: function (origin, callback) {
    // Kiểm tra xem origin có trong danh sách được phép không
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },

  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',

  allowedHeaders:
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',

  credentials: true,

  exposedHeaders: 'Content-Range,X-Content-Range,Authorization',

  optionsSuccessStatus: 200,
};

module.exports = corsConfig;
