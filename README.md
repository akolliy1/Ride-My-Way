[![Build Status](https://travis-ci.org/DanielAdek/Ride-My-Way.svg?branch=ch%2Ftravis-ci-%23158577021)](https://travis-ci.org/DanielAdek/Ride-My-Way)[![Coverage Status](https://coveralls.io/repos/github/DanielAdek/Ride-My-Way/badge.svg?branch=ch%2Ftravis-ci-%23158577021)](https://coveralls.io/github/DanielAdek/Ride-My-Way?branch=ch%2Ftravis-ci-%23158577021)
# Ride-My-Way
Ride my way connect drivers and passengers together so that a passenger can get a ride through the Ride-My-Way app.
An application that allows passengers to make request to rides offered by drivers.

## Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
 * [Api-endpoints](#api-endpoints)
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Testing](#testing)
    * [Development](#development)
    
    

### Pivotal Tracker
Project is currently being built with the Project Management Tool, Pivotal Tracker.
You can find the template at [https://www.pivotaltracker.com/n/projects/2179186](https://www.pivotaltracker.com/n/projects/2179186)

### Template
Template is hosted at [https://danieladek.github.io/Ride-My-Way/UI/](https://danieladek.github.io/Ride-My-Way/UI/)

### API Deployment
API is deployed at [https://ridemyway-danieladek.herokuapp.com/api/v1](https://ridemyway-danieladek.herokuapp.com/api/v1)

### Documentation
Documentation is hosted at [https://ridemyway-danieladek.herokuapp.com/api/v1/docs](https://ridemyway-danieladek.herokuapp.com/api/v1/docs)

## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework

### Supporting Packages

#### Linter(s)

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test Tools

* [Mocha](https://mochajs.org/) - JavaScript Test Framework for API Tests
* [Chai](http://chaijs.com/) - TDD/BDD Assertion Library for Node
  library for testing node.js HTTP servers
* [nyc](https://istanbul.js.org/) - Code Coverage Generator

## Features

### Drivers
* Signup and Login
* Create Rides Offers
* Accept A Request From Passengers
* Reject A Request From Passengers
* Get Notifications On Passenger's Request
* Modify Profile
* Use Google Map To Find Locations

### Customers
* Signup and Login
* Modify Profile
* Make A Request To An Available Ride
* Get Notifications On Driver's Response
* Use Google Map To Find Locations

## Getting Started

### Installation

* git clone
  [Ride-My-Way](https://github.com/DanielAdek/Ride-My-Way)
* Run `npm install` to install packages
* Run `npm start` to start the server
* Navigate to [localhost:8000](http://localhost:8080/) in browser to access the
  application

### Testing

#### Prerequisites

* [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

* After installing as shown above
* Navigate to [localhost:8080](http://localhost:8080/) in
  [Postman](https://getpostman.com/) to access the application

#### Testing with Coverage Data

* After installing as shown 

* Run `npm run test`
* It will lint code, run test and display coverage data as generated by
  Istanbul's [nyc](https://github.com/istanbuljs/nyc)

### Development
You can run `npm run start:dev` in development to use [Nodemon](https://nodemon.io/)

[Nodemon](https://nodemon.io/) watches for file changes and restarts your code. 

## Api-endpoints


##### Open the postman and test the following existing routes
<table>
    <tr>
        <th>API</th>
        <th>HTTP verb</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>/api/v1/signup</td>
        <td>POST</td>
        <td>Create new user</td>
    </tr>
    <tr>
        <td>/api/v1/login</td>
        <td>POST</td>
        <td>Log in user</td>
    </tr>
    <tr>
        <td>/api/v1/rides</td>
        <td>POST</td>
        <td>Create new ride offer</td>
    </tr>
    <tr>
        <td>/api/v1/rides/{rideId}</td>
        <td>GET</td>
        <td>Get a ride</td>
    </tr>
    <tr>
        <td>/api/v1/rids/{rideId}/request</td>
        <td>POST</td>
        <td>Request a ride</td>
    </tr>
    <tr>
        <td>/api/v1/rides</td>
        <td> GET</td>
        <td>Fetch all avaliable rides </td>
    </tr>
</table>