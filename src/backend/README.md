# Backend: Tottes Tattoo 🎨🖋️

## Backend functionalities overview 🌟

In this folder, called "backend", we keep the system for Totte's tattoo studio website. It handles bookings, consultations, and file uploading.

## Getting started 🚀

1. `npm install`
2. `npm run dev` to start the server
3. Make sure you have MongoDB running locally on your machine.
4. The MongoDB connection is to localhost, so make sure you have it running locally.
5. Create a db called "db" in your MongoDB instance.
6. The mongoDB connection string is mongodb://127.0.0.1:27017/db

## Tools

It is built with Node.js, using express, MongoDB & Mongoose.

## API Endpoints

### Bookings

- `GET /api/v1/booking` - Get all bookings
- `POST /api/v1/booking` - Create a new booking
- `GET /api/v1/booking/:id` - Get specific booking
- `PUT /api/v1/booking/:id` - Update specific booking
- `DELETE /api/v1/booking/:id` - Delete specific booking
- `PATCH /api/v1/booking/:id` - Update part of specific booking

### Consultations (Same as bookings) (Currently not used in the frontend)

- `GET /api/v1/consultation` - Get all consultations
- `POST /api/v1/consultation` - Create a new consultation
- `GET /api/v1/consultation/:id` - Get specific consultation
- `PUT /api/v1/consultation/:id` - Update specific consultation
- `DELETE /api/v1/consultation/:id` - Delete specific consultation

### Media

- `GET /api/v1/media` - Get all media files

### All bookings

- `GET /api/v1/booking/slots` - Get all booking slots

## Architectural Decisions

We decided to separate bookings and consultations into different endpoints to make a thorough and clear structure, and so more of us could practice creating endpoints.

An alternative approach could have been to use a single booking model with a boolean flag for consultations, which would have simplified the backend structure since bookings an consultation share a lot of functionalities.

## Note

The consultation endpoints are not used in the frontend, but they are implemented for future use if needed. The frontend currently only uses the booking endpoints.

The consultation endpoints are implemented in the same way as the booking endpoints, but without specifing dates and times, since consultations are not time-based in the same way as bookings.
