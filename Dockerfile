FROM nginx:latest

# Remove os logs de acesso e de erro para que o Filebeat possa criar e ler os logs
RUN rm -f /var/log/nginx/access.log && rm -f /var/log/nginx/error.log