# dynamic-backend-url
THIS IS JUST A CONCEPT DESIGN NOT A PRODUCTION READY VERSION!

A simple way for a react frontend to get the url of the backend service.
With this method, the URL that the frontend fetches for backend information can be dynamically passed via an environment variable. So you have 2 sets of your application running. One production application (frontend: 5000, backend: 4000) and one for development purposes (frontend: 3000, backend: 2000)

How to start:
1. Clone this repository (needs node, yarn (can be replaced with npm), and ports 2000, 3000, 4000, 5000 available)
2. Install node_modules in `./client`, `./deploy`, `./server`.
3. Start development backend: `cd server && yarn dev` (port 2000)
4. Start developlment frontend `cd client && yarn dev` (port 3000)
5. Start production backend: `cd server && yarn prod` (port 4000)
6. Start production frontend `cd client && yarn prod` (port 5000)
7. Open `http://localhost:3000` and `http://localhost:5000` in a browser.