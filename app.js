Stream = require('node-rtsp-stream');
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://admin:admin1234@ngduchanh2.ddns.net:554/cam/realmonitor?channel=2&subtype=0',
  wsPort: 9999
})
