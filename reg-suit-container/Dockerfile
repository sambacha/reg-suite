FROM node:18-alpine

RUN mkdir /out /old /new
RUN chown node:node /out /old /new

USER node
WORKDIR /home/node

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node ./regconfig.json ./
COPY --chown=node:node ./main.js ./

ENTRYPOINT ["node", "main.js"]