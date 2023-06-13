const cors = require("cors");
const express = require("express");
const app = express();

const { PrismaContext } = require("./config/prisma");
const env = require("./config/env");

const userRouter = require("./routes/user");
const tripRouter = require("./routes/trip");

const startServer = async () => {
  const prisma = new PrismaContext();
  await prisma.start();

  app.use(express.static("public"));

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/user", userRouter);
  app.use("/api/trip", tripRouter);

  app.listen(env.port, () => {
    console.log(`server is running on port ${env.port}...`);
  });
};

startServer();
