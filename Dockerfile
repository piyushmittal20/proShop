#Stage 1 to build the client image
FROM node:16-alpine as frontend

WORKDIR /usr/app/frontend/

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

RUN ls

RUN npm run build

#Stage 2 to build the backend image
FROM node:alpine3.12

WORKDIR /usr/src/app/

COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/

WORKDIR /usr/src/app/

COPY package*.json ./

ENV MONGO_URI=mongodb+srv://piyushm:piyush1234@cluster0.0zvjwm5.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET=abc12345
ENV NODE_ENV=production
ENV PORT=5000
ENV PAYPAL_CLIENT_ID=Af87y0hK-QxLwv1mg0zrc0H5D685sOsyMRfe8I_wC6r-sgE1Zq1ZEYY0zDZkmhmE-q314r7ZAZgtPmUO

RUN npm install

COPY backend/ ./

EXPOSE 5000

CMD ["node", "server.js"]