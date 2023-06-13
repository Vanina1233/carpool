const {
  createTrip,
  getTrip,
  getTripById,
  deleteTrip,
} = require("../models/trip");

const getTripController = (req, res) => {
  getTrip((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, trips: result });
    }
  });
};

const createTripController = (req, res) => {
  const data = req.body;
  createTrip(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, trip: result });
    }
  });
};

const getTripByIdController = (req, res) => {
  const id = req.params.id;
  getTripById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, trip: result });
    }
  });
};

const deleteTripController = (req, res) => {
  const id = req.params.id;
  deleteTrip(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, message: "trip deleted" });
    }
  });
};

module.exports = {
  getTripController,
  deleteTripController,
  getTripByIdController,
  createTripController,
};
