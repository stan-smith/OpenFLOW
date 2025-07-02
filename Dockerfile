FROM node:24-alpine AS builder
WORKDIR /work
COPY . .
RUN npm ci && npm run build

FROM busybox:1.37
RUN adduser -D static
USER static
WORKDIR /home/static
COPY --chown=static:static --from=builder /work/dist ./
EXPOSE 3000
CMD ["busybox", "httpd", "-f",  "-p", "3000"]
