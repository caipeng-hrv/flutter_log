var ws = require('nodejs-websocket');


const WebSocket = function(){
	var server = ws.createServer(function(con){
		con.on('connect',function(){
			console.log('some connected!')
		})
	});
	server.listen(3001,function(){
		console.log('WebSocket listened on 3001')
	})
	
	this.server = server
}
WebSocket.prototype.broadcast = function(msg){
	this.server.connections.forEach(con => {
		con.send(msg)
	});
}
module.exports = WebSocket;