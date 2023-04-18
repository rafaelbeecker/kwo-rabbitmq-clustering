FROM rabbitmq:3.7.14-management as master
RUN apt-get update && apt-get install -y net-tools

COPY ./plugins/ /opt/rabbitmq/plugins
COPY ./config/.erlang.cookie /var/lib/rabbitmq/.erlang.cookie

RUN rabbitmq-plugins enable \
    rabbitmq_management \
    rabbitmq_management_agent \
    rabbitmq_delayed_message_exchange \    
    rabbitmq_message_deduplication

FROM rabbitmq:3.7.14-alpine as slave
COPY ./config/.erlang.cookie /var/lib/rabbitmq/.erlang.cookie
RUN rabbitmq-plugins enable \
    rabbitmq_management \
    rabbitmq_management_agent