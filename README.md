# Install

`npm install`

---

## Purpose



---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`

---

### Tech Stack:
- Node.js
- express
- express-session (sessions, cookies)
- express-flash (error handling)
- EJS (server-side templating)
- Bootstrap
- flash
- mongoDB
    - mongoose
    - connect-mongo (store sessions)
- passport (auth)
- dotenv
- method-override (allows put/delete requests to be made from templates) - alternative to adding frontend JS
- morgan (logging)
- bcrypt
- validator

### Dev dependencies:
- nodemon
