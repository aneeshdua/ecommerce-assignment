FROM node:21-alpine

COPY . .
RUN yarn install
RUN yarn build
RUN npm install -g serve

EXPOSE 8080
CMD ["serve","-p","8080","build/"]
