# ExpressJS + PassportJS Google OAuth2.0 working
This project demonstrates Google OAuth2.0 working using Express + PassportJS with along with express-session management.

## To Run
1. Download repository and install all packages using
```npm install```
2. Create a .env file and add following credentials obtained from creating new project in google cloud console -> APIs and Servicer -> Credentials -> Create Credentials
```
GOOGLE_CLIENT_ID=YOUR_SECRET
GOOGLE_CLIENT_SECRET=YOUR_SECRET
```
3. Open terminal in project directory and run the server by entering following command in the terminal
```npn start```
4. Open up browser and load the following URL to load the project
``` http://localhost:5000/ ```

### Following routes are available-
1. / -> Home
2. /auth/google -> Authenticate with Google OAuth2.0
3. /protected -> Protected router (cannot be accessed without authorization)
4. /logout -> To logout and delete user session.
