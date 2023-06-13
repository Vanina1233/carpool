const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTrip = async (data, callback) => {
  try {
    const trip = await prisma.trip.create({
      data: data,
    });
    callback(null, trip);
  } catch (err) {
    callback(err, null);
  }
};

const getTrip = async (callback) => {
  try {
    const trips = await prisma.trip.findMany();
    callback(null, trips);
  } catch (err) {
    callback(err, null);
  }
};

const getTripById = async (id, callback) => {
  try {
    const trip = await prisma.trip.findUnique({
      where: { id },
    });
    callback(null, trip);
  } catch (err) {
    callback(err, null);
  }
};

const deleteTrip = async (id, callback) => {
  try {
    const trip = await prisma.trip.delete({ where: { id } });
    callback(null, trip);
  } catch (err) {
    callback(err, null);
  }
};

module.exports = {
  createTrip,
  getTrip,
  getTripById,
  deleteTrip,
};
