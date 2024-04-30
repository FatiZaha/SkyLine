FROM node:latest
WORKDIR /code
COPY package.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]