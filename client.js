const {HelloRequest, HelloReply} = require('./helloworld_pb.js');
const {GreeterClient} = require('./helloworld_grpc_web_pb.js');

var client = new GreeterClient('http://localhost:8080');

var request = new HelloRequest();
request.setName('World');


client.sayHello(request, {}, (err, response) => {
  console.log('request');
  console.log(request);  
  //console.log(response.getMessage());
    console.log('response');
   console.log(response);
   console.log('error');
   console.log(err);
});