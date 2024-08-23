

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('input_message', (message) => {
    // Simulate processing of input and emit a result
    const result = {
      user_id: message.id,
      ads: [
        {
          id: 24957,
          name: "Hp Trendsetter Backpack",
          image: "https://m.media-amazon.com/images/I/81LGV9+CxDL.AC_UL320.jpg",
          link: "https://www.amazon.in/HP-Hp-Trendsetter-Backpack/dp/B01I1CH5L0/ref=sr_1_8262_mod_primary_new?qid=1679144169&s=luggage&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-8262",
          actual_price: "₹2,999",
          discount_price: "₹2,250"
        },
        {
          id: 17151,
          name: "Genie School Backpack",
          image: "https://m.media-amazon.com/images/I/71BpZCSzZ9L.AC_UL320.jpg",
          link: "https://www.amazon.in/Genie-Ltrs-School-Backpack-ZINNIA19SBPIN/dp/B07Q4NYGHQ/ref=sr_1_221?qid=1679143893&s=luggage&sr=1-221",
          actual_price: "₹2,559",
          discount_price: "₹999"
        },
        {
          id: 18213,
          name: "Gear Casual Backpack",
          image: "https://m.media-amazon.com/images/I/918DJfyv9rL.AC_UL320.jpg",
          link: "https://www.amazon.in/Gear-Black-Casual-Backpack-MDBKPECO50104/dp/B0757MBSS6/ref=sr_1_1308?qid=1679143932&s=luggage&sr=1-1308",
          actual_price: "₹999",
          discount_price: "₹449"
        }
      ]
    };

    // Emit the result back to the client
    socket.emit('output_message', result);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
