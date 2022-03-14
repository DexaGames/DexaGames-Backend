FROM node:14.18.3-alpine3.15 as development

WORKDIR /usr/src/app

EXPOSE 3042
EXPOSE 80
EXPOSE 443 

COPY package*.json ./

#RUN npm install --only=development
RUN npm install

RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

CMD node dist/main