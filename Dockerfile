FROM node:12.16.0

WORKDIR /app

#ENV PORT=3000 \
#   USERNAME=ixzxsrpbhfpqii \
#   PASSWORD=5d544a1047f5bf0365edd81c4f1c83ab5f9fd9cc35e4373475aedd3a5560fa27 \
#   DATABASE=ddrgpkpbcrt9m9 \
#   DB_HOST=ec2-50-17-178-87.compute-1.amazonaws.com \
#   JWT_KEY=secretKey \
#   NODE_ENV=production

COPY ./package.json .
COPY ./yarn.lock .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]