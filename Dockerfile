# Build stage
FROM node:18-alpine AS builder

# Enable BuildKit cache
ARG BUILDKIT_INLINE_CACHE=1

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with cache
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy source
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built assets
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./

# Install production dependencies only
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

# Set environment variables
ENV NODE_ENV=production

# Start application
CMD ["npm", "start"]
