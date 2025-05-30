# URL-Shortener-Project-for-MicroIT

# Project Overview
This is a basic but fully functional URL Shortener web application created using **Node.js**, **Express**, **MongoDB**, and **EJS templates**. The purpose of this project is to shorten long URLs into compact and shareable links, and to track how many times each link is clicked.

This project is developed as part of my **Micro IT Internship** and demonstrates my understanding of backend and frontend integration.

# Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript Templates)
- dotenv
- shortid

# Features
- Accepts any valid long URL and generates a short link
- Displays result with shortened URL
- Redirects short URL to the original URL
- Tracks number of clicks per URL
- 404 page for invalid or broken links
- Data stored in MongoDB database

# How to Run This Project Locally

## 1. Clone the Repository

        git clone https://github.com/Tasleemfirdous/URL-Shortener-Project-for-MicroIT.git
        cd URL-Shortener-Project-for-MicroIT

- `git clone` downloads the project.
- `cd` navigates into your project folder.


## 2. Install Required Packages

    npm install
      
## 3. Set up Environment Variables
Create a .env file in the root folder and add:

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/urlShortenerDB
    BASE_URL=http://localhost:3000
    
## 4. Start the Server

   npm start
  
## 5. Open in Browser

   http://localhost:3000

# Project Status 
  Completed
