##### Build Image #####
FROM node as builder

WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn

# Build app
COPY . .
RUN yarn build

##### Runtime Image #####
FROM nginx:latest

LABEL org.opencontainers.image.source=https://github.com/Den4200/dennispham.me

# Copy react code
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
