FROM node:22-slim

WORKDIR /app

RUN ls

CMD ["tail", "-f", "/dev/null"]
