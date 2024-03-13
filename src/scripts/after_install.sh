#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/menu-restaurant-API/deploy.log

echo 'cd /home/ec2-user/menu-restaurant-API' >> /home/ec2-user/menu-restaurant-API/deploy.log
cd /home/ec2-user/menu-restaurant-API >> /home/ec2-user/menu-restaurant-API/deploy.log

echo 'yarn install' >> /home/ec2-user/menu-restaurant-API/deploy.log 
yarn install >> /home/ec2-user/menu-restaurant-API/deploy.log