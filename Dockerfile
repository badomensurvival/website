FROM node:18-alpine as BUILD_IMAGE

# install pnpm
RUN npm install -g pnpm

WORKDIR /app
COPY package.json package-lock.json ./
# install dependencies
RUN npm install --frozen-lockfile
COPY . .
# build
RUN npm run build
# remove dev dependencies
RUN npm prune --ignore-scripts=true --prod

FROM node:18-alpine
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

CMD ["npm", "run", "start"]