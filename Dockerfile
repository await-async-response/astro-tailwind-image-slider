# Stage 1: Build the Astro project
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the Astro project
RUN npm run build

# Stage 2: Serve the built project
FROM node:22-alpine

# Install a lightweight static server
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port that serve will use
EXPOSE 3000

# Command to serve the static files
CMD ["serve", "-s", "dist", "-l", "3000"]
