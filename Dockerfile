FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npm install @angular/cli -g

ENV NG_CLI_ANALYTICS=false

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
