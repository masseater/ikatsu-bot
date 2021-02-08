FROM node:14.15.1-alpine

WORKDIR /usr/src/

COPY ./package.json .
COPY ./yarn.lock .

# packages
COPY ./packages/discord-bot ./packages/discord-bot

RUN yarn install --pure-lockfile --non-interactive
RUN yarn workspace discord-bot install --pure-lockfile --non-interactive

ENV DISCORD_BOT_TOKEN=$DISCORD_BOT_TOKEN
ENTRYPOINT [ "yarn", "start:bot" ]