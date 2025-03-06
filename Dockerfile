FROM node:20.5.1
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "dev" ]