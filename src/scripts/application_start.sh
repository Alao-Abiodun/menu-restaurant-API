#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/menu-restaurant-API/deploy.log

echo 'pm2 restart app-server' >> /home/ec2-user/menu-restaurant-API/deploy.log
pm2 restart app-server >> /home/ec2-user/menu-restaurant-API/deploy.log