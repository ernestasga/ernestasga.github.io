FROM node:20.10.0-slim

LABEL name="portfolio"
ARG APP_ROOT=/app

# Create app directory
WORKDIR ${APP_ROOT}

# Copy source code
COPY ./ ./

# Install dependencies
RUN npm install

# Expoose port
EXPOSE 3000