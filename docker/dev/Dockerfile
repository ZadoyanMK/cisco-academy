FROM python:3.7-slim
MAINTAINER zadoyan_mk@localhost

COPY ./app /app

WORKDIR /app

RUN pip install --no-cache-dir -r requirements/dev.txt

COPY ./docker/dev/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]