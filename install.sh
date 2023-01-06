#!/bin/bash
#Remove node_modules and install
rm -r ./node_modules
#rm -r ./node_modules/inet-core
#rm -r ./node_modules/inet-ui
file_package_lock="package-lock.json"
[ -f $file_package_lock ] && rm $file_package_lock && echo 'Removed '$file_package_lock
file_yarn_lock="yarn.lock"
[ -f $file_yarn_lock ] && rm $file_yarn_lock && echo 'Removed '$file_yarn_lock
yarn install
