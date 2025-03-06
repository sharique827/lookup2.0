# Use a stable Node.js version
FROM node:20  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci  

# Copy the entire project into the container
COPY . .

# Build the application
RUN npm run build  

# Run the application
CMD ["npm", "run", "start:dev"]  # Use `start:dev` for NestJS hot-reloading
