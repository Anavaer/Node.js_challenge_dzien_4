//Twój kod
const http = require('http');

const srv = http.createServer((req, res) => {
  const browser = req.headers['user-agent'];
  console.log(browser);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(browser);
});

srv.listen(3000, () => {
  console.log('server uruchomiony na porcie 3000');
});