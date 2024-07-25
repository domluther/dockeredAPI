# Start with the node image
FROM node 

# This will be in /app
WORKDIR /app

# I need package json files
COPY package*.json ./

RUN npm install

# Copy the rest of my files
COPY --chown=node:node . .

# When you start, run node server.js
ENTRYPOINT [ "node",  "index.js" ]