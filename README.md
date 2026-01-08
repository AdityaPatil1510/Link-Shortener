**LINK SHORTENER**

---

PROJECT SUMMARY

This project is a backend Link Shortener application developed as part of Task 4 of the internship assignment.
The application converts long URLs into short, shareable links and redirects users back to the original URL when accessed.

The project demonstrates strong fundamentals in backend development, REST API design, MongoDB integration, and clean code structure.

---

KEY HIGHLIGHTS

• RESTful API built using Node.js and Express
• MongoDB database integration using Mongoose
• Unique short URL generation
• Automatic redirection to original URLs
• Click tracking for basic analytics
• Clean, modular, and scalable project structure
• Step-by-step Git commit history following best practices

---

TECHNOLOGY STACK

• Node.js
• Express.js
• MongoDB
• Mongoose
• shortid
• dotenv
• cors

---

PROJECT ARCHITECTURE

The application follows a modular backend architecture for maintainability and scalability.

Main components:

• server.js
Entry point of the application. Initializes the Express server and middleware.

• config/db.js
Handles MongoDB connection logic using environment variables.

• models/Url.js
Defines the URL schema for storing long URLs, short codes, click counts, and timestamps.

• routes/urlRoutes.js
Contains API routes for URL shortening and redirection logic.

• .env
Stores environment-specific configuration such as database URI and server port.

---

APPLICATION FLOW

1. The server initializes and establishes a connection with MongoDB.
2. A client sends a long URL to the backend through a POST request.
3. The backend generates a unique short code for the URL.
4. The long URL and short code are stored securely in MongoDB.
5. A short URL is returned to the client.
6. When the short URL is accessed:
   • The backend retrieves the original URL
   • Increments the click count
   • Redirects the user to the original destination

---

API ENDPOINTS

POST /shorten
Purpose: Generate a short URL from a long URL
Input: Long URL in JSON format
Output: Generated short URL

GET /:code
Purpose: Redirect to the original long URL
Input: Short code in the URL path
Output: Redirects to the original website

---

TESTING AND VERIFICATION

The API is tested using Postman to ensure reliability and correctness.

Testing process:
• Send a POST request with a valid long URL
• Receive a generated short URL
• Access the short URL in a browser
• Verify successful redirection
• Confirm click count updates in MongoDB

All endpoints return appropriate HTTP status codes and error messages.

---

DATABASE DESIGN

Database: url_shortener
Collection: urls

Stored fields include:
• longUrl
• shortCode
• clicks
• createdAt
• updatedAt

This structure enables efficient lookup, redirection, and analytics tracking.

---

ERROR HANDLING AND VALIDATION

• Returns validation error if long URL is missing
• Returns not found error for invalid short URLs
• Handles internal server errors gracefully
• Uses proper HTTP status codes for all responses

---

CODE QUALITY AND BEST PRACTICES

• Clean and readable codebase
• Modular folder structure
• Environment variables for sensitive configuration
• Proper error handling and logging
• Incremental Git commits with meaningful messages

---

PROJECT OUTCOME

This project successfully demonstrates:
• Backend API development skills
• Database design and integration
• Real-world problem solving
• Professional project structuring
• Internship-level coding standards

---

FINAL NOTE

This URL Shortener application is fully functional, tested, and ready for evaluation.
It reflects practical backend development knowledge and follows industry-standard practices.

---