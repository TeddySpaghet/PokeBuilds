## Steps

1. Installation and configuration
1. Create a file structure for authentication
  - controller (auth), model (user), routes(auth) ??? routes(user)
  - connect file structure to the server
1. Handle user passwords (bcrypt)
1. Handle user login (passport)
1. Handle user logout
1. Verifying that a user is authorized (protecting specific routes)


1. Tie this in to the React app
  - creating some components for logging in, registering, logging out
  - making fetch requests to the user/auth related functionality on the server
  - protecting certain components from an unauthorized