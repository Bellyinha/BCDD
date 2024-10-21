const express = require('express');

const { PrismaClient } = require("@prisma/client");
const { request } = require('../app');

const router = express.Router();
const prisma = new PrismaClient();

const register = async(request, response) => {
  // to do
}

router.post("/register", register);

module.exports = router;
