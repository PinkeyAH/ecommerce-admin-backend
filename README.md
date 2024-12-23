# E-commerce Backend API
ecommerce-admin-backend

## Description
Backend APIs for Pagination, Searching, and Sorting in an Admin Portal.

## Features
- Pagination
- Keyword Searching
- Field Sorting

## Installation Setup and Run

1. Clone the repository:
   ```bash
   git clone https://github.com/PinkeyAH/ecommerce-admin-backend.git
   cd ecommerce-admin-backend


2. Install dependencies:
   ```bash
   npm install
   
3. Set up the .env file:

   PORT=5000
   DB_NAME=data.sqlite

4. Start the server:
   npm run dev

##  API Endpoints
   GET /api/items?page={page}&limit={limit}&search={keyword}&sort={field}&order={asc|desc}

## Example
1. Get items:
   curl "http://localhost:5000/api/items?page=1&limit=10&sort=name&order=asc"

## Test APIs

Use Postman to test the API with different query parameters.
Example API Requests:
1. Get Paginated Results:
   GET http://localhost:5000/api/items?page=1&limit=5

2. Search by Name:
   GET http://localhost:5000/api/items?search=Item

3. Sort by Size:
   GET http://localhost:5000/api/items?sort=size&order=DESC



