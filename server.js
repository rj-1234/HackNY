var http = require("http");
 
var server = http.createServer(function (req, res) {
   if(req.url == '/'){
    var TwitterPackage = require('twitter');
var secret = {
  consumer_key: 
  consumer_secret: 
  access_token_key: 
  access_token_secret: 
}
var T = new TwitterPackage(secret);
  
var paths = require('path');

var image = require('fs').readFileSync(paths.join(__dirname,'capture/test.png'));


T.post('media/upload', {media: image}, function(err, data, res) {
if (err) console.log(err);
	console.log(data);
T.post('statuses/update', {status: '#accident #calamity #waste #garbage #vehicle# people #abend #damage #wreck #battle #car #demolition #pollution #flood #hurricane #injury', media_ids: data.media_id_string}, function(err, params, res) {
	if (err) console.log(err);
console.log(params);
});
});
   
  res.setHeader('Content-Type', 'text/html')
  res.end('<body style="background:#2d9add;"><h1 style="color:white;">Your Tweet has been posted.</h1></body>');
   
}
console.log(req.url);
});

server.listen(8082, function(){
console.log('listening to 8080');
});