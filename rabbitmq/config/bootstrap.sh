#!/bin/sh
rabbitmq-server -detached 
rabbitmqctl stop_app
rabbitmqctl reset
rabbitmqctl join_cluster rabbit@node-1
rabbitmqctl start_app
tail -f /dev/null