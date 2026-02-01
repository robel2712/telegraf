import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import cors from 'cors'
import axios from 'axios'
import { Telegraf } from 'telegraf'
dotenv.config({quiet:true});
const app = express();
const server = http.createServer(app);
const bot = new Telegraf(process.env.token)

app.use(express.json());
app.use(
  cors({
    origin: "*", // or '*', for all origins (not recommended for production)
    credentials: true,
  })
);
app.get('/',(req,res)=>{
  res.json({message:"hello there!"})
});
bot.start((ctx)=>{
  
  
  ctx.telegram.sendMessage(ctx.chat.id,`hi ${ctx.chat.first_name}, how can i help you?`)
});
// bot.on('text', (ctx) => {
//   console.log(ctx.message.text);
//   console.log(ctx);
// });
bot.on('text',async(ctx)=>{
  try {
   const userMessage = ctx.message.text;
   await ctx.telegram.sendChatAction(ctx.chat.id,'typing'); 

   const response= await axios.post('https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'groq/compound',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userMessage }
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      })
      const aiReply = response.data.choices[0].message.content

    ctx.reply(aiReply)
  } catch (error) {
    console.error(error.response?.data||error.message);
  }
  // ctx.reply(`hi ${ctx.chat.first_name}`)
})
bot.use((ctx, next) => {
  console.log(ctx);
  return next();
});

bot.launch().then(()=>console.log('bot started')
);

server.listen(process.env.port,()=>{
            console.log(`running on port ${process.env.port}`);
            
        })
        
    
