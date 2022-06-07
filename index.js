const express = require('express');
const app = express();

app.listen(8090, () => {
    console.log('Hello, world!!!');
});


// 누군가가 /pet 으로 방문하면, pet 관련 안내문을 띄워주자
app.get('/pet', (req, res) => {
    res.send('반갑습니다(pet)');
});


// ex) /beauty 로 접속시, 안내문 띄우기
// app.get('/beauty', (req, res) => {
//     console.log(req, res, 'this');
//     res.send('뷰티 페이지 입니다!');
// });


app.use(express.static(__dirname + '/src')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/write', (req, res) => {
    res.sendFile(__dirname + '/src/write.html');
});