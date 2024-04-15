FROM node:21-alpine

COPY . .
RUN yarn install
RUN yarn build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve","-p","3000","build/"]
