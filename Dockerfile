# Setting the image
FROM node:22-slim

# Specifying the primary directory
WORKDIR /app

# Providing copies of the package.json and package.lock.json in the primary directory
COPY package*.json ./

# This will install all necessary dependencies
RUN npm install

# This copies all other files from our local directory (this folder) into the container's primary directory
COPY . .

# Opens up a port for the express app to run on (in this case port 3000)
EXPOSE 3000

# A command to start up/lauch the app
CMD ["npm", "start"]