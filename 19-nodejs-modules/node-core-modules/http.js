const http = require('http');
const fs = require('fs');

const posts = [
  { id: 1, title: 'Post One', body: 'This is post 1' },
  { id: 2, title: 'Post Two', body: 'This is post 2' },
];

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url);

  if (url === '/') {
    fs.readFile('index.html', (error, file) => {
      if (error) {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end('<h1>Welcome</h1>');
      }
    });
  } else if (url === '/api/post') {
    response.writeHead(200, { 'content-type': 'application.json' });
    response.end(JSON.stringify({ success: true, data: posts }));
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page Not Found</h1>');
  }
});

server.listen(5000, () => {
  console.log('Server is listening... on port 5000');
});
