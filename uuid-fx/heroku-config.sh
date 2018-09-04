heroku buildpacks:add -i 1 -a damp-wildwood-81394 https://github.com/lstoll/heroku-buildpack-monorepo
heroku buildpacks:add -a damp-wildwood-81394 https://github.com/heroku/heroku-buildpack-nodejs

heroku config:set \
  APP_BASE=uuid-fx \
  SALESFORCE_ACCESS_TOKEN=00DL00000061k1z!ARUAQPKCPuTgWFcM_Um_g4LVp.ijzWmSMQpynUdFQTI0PhkxyBLhUaylgIx02RbrZA7pOJTG5c2hvZxXSS.gCsjs3U2tpE39 \
  SALESFORCE_INSTANCE_URL=https://app-speed-745-dev-ed.cs8.my.salesforce.com \
  VERBOSE=true \
  PLUGIN_NAMES=invoke-functions \
  OBSERVE_SALESFORCE_TOPIC_NAMES=/event/Heroku_Function_Generate_UUID_Invoke__e \
  READ_MODE=changes

#SALESFORCE_USERNAME=test-j7blajfbxxx5@example.com \
#SALESFORCE_PASSWORD=eventdriven1 \
