# Build stage
FROM node:18 AS builder

WORKDIR /app

# Copy only package.json first
COPY package.json ./

# Install dependencies with npm
RUN npm install

# Copy source code
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built app
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
