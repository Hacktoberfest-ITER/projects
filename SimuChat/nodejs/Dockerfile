FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy packages & install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "node", "index.js" ]