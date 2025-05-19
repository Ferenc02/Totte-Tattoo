# Backend: Tottes Tattoo 🎨🖋️

## Backend functionalities overview 🌟

In this folder, called "backend", we keep the system for Totte's tattoo studio website. It handles bookings, consultations, and file uploading. 

## Tools
It is built with Node.js, using express, MongoDB & Mongoose.

## API Endpoints

### Bokningar
- `GET /api/v1/booking` - Hämta alla bokningar
- `POST /api/v1/booking` - Skapa en ny bokning

### Konsultationer
- `GET /api/v1/consultation` - Hämta alla konsultationer
- `POST /api/v1/consultation` - Skapa en ny konsultation
- `GET /api/v1/consultation/:id` - Hämta specifik konsultation

### Media (Under utveckling)
- `GET /api/v1/media` - Hämta alla media-filer
- `POST /api/v1/media` - Ladda upp ny media
- `PUT /api/v1/media/:id` - Uppdatera media

## Projektstruktur