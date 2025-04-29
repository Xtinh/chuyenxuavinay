# Build stage
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js application
RUN yarn build

# Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app ./

# Expose port 3088
EXPOSE 3000

# Start the application in production mode
CMD ["yarn", "start"]
