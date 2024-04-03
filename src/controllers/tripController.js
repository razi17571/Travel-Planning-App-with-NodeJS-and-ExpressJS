// tripController.js
const Trip = require('../models/Trip');

async function searchDestinations(req, res) {
  try {
    // For simplicity, let's assume we return a list of destinations from the database
    const destinations = await Trip.find().distinct('destination');
    res.status(200).json({ destinations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createItinerary(req, res) {
  try {
    // Assuming request body contains necessary details for creating an itinerary
    const { userId, destination, startDate, endDate } = req.body;
    
    // Create a new itinerary document in the database
    const itinerary = await Trip.create({
      userId,
      destination,
      startDate,
      endDate,
      createdAt: new Date(), // Record the time when the itinerary is created
    });

    res.status(201).json({ itinerary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { searchDestinations, createItinerary };
