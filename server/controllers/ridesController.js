// import db from '../dummydb/userdb';
import ridesdb from '../dummydb/ridesdb';

// let id = 2;
let onRequest = [];
/**
 * @class Rides
 */
export default class Rides {
  /**
   * getAllRides();
     * @description get all rides
     * @param {*} req
     * @param {*} res
     * @returns {object} json
     */
  static getAllRides(req, res) {
    return new Promise((resolve, reject) => {
      const offeredRides = ridesdb.map(allAvailableRides => allAvailableRides);
      if (offeredRides.length < +true) {
        reject(new Error('Cannot find any ride offers yet! please, Try Again In 20 Minutes'));
      }
      resolve(offeredRides);
    }).then((rides) => {
      res.status(200).json({
        message: `Here You Are!, ${rides.length} rides for You`,
        rides
      });
    }).catch((err) => {
      res.status(200).json({
        error: 'Oops Sorry!,',
        message: err.message
      });
    });
  }

  /**
   * getSingleRide();
     * @description get one ride
     * @param {*} req HTTP request object
     * @param {*} res HTTP response object
     * @returns {object} json
     */
  static getSingleRide(req, res) {
    let ride;
    const { rideId } = req.params;
    ridesdb
      .forEach((rides) => {
        if (rides.rideId === rideId) {
          ride = rides;
        }
      });
    return new Promise((resolve, reject) => {
      if (!ride) {
        reject(new Error('Cannot find any ride from this driver'));
      }
      resolve(ride);
    })
      .then((driverRide) => {
        res.status(200).json({
          message: 'Here You Are!',
          driverRide
        });
      })
      .catch((err) => {
        res.status(200).json({
          error: 'Oops Sorry!,',
          message: err.message
        });
      });
  }

  /**
   * createRideOffer();
     * @description Create ride offers
     * @param {*} req HTTP request object
     * @param {*} res HTTP response object
     * @returns {object} json
     */
  static createRideOffer(req, res) {
    const {
      rideId, departure, arrival, time, date, spotInCar, cost
    } = req.body;
    return new Promise((resolve, reject) => {
      ridesdb
        .push({
          rideId, departure, arrival, time, date, spotInCar, cost, onRequest
        });
      resolve('new Ride successfully created');
      reject(new Error('There was a problem creating the ride offer, try again'));
    })
      .then(newRideOffer => res.status(201).json({
        message: newRideOffer
      })).catch(err => res.status(500).json({ message: err.message }));
  }
}