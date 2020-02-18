var ws = require('nodejs-websocket'); //引入websocket中间件
var server = ws.createServer(function(socket){
	var count = 1;
	socket.on("text",function(str){
		// 接收客户端发过来的消息
		console.log(str);

		// 向客户端回复消息
		socket.sendText("服务器端收到啦"+count++);
		
	});
}).listen(3000);//监听3000端口