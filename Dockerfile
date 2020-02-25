FROM node:9.3.0

ENV NODE_ENV='production' PORT=3000 WORK_DIR='/var/www/html'

WORKDIR ${WORK_DIR}
COPY . ${WORK_DIR}/

RUN npm install

RUN npm install --prefix ./server

EXPOSE $PORT

CMD ["npm", "run", "prod"]