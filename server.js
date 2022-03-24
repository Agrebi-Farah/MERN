const express = require('express');
const connectDb = require('./config/connectDb');
require ('dotenv').config();
const authRoute = require('./routes/auth');
const route = require('./routes/product') ;
const cors = require('cors')
const productSchema = require('./models/product.models')
const categoriesSchema = require('./models/categories.models')
const app = express();

app.use(cors())
connectDb();
const port=process.env.PORT;
app.use(express.json());
app.use('/',authRoute);
app.use('/Add', route)
app.use ('/Get', route)
{/*init()
async function init (){
    try {
        const product = await productSchema.find();
        
if(!product.length){
     await productSchema.insertMany([
        {
          img: "https://static.zara.net/photos///2022/V/0/1/p/2298/232/800/2/w/750/2298232800_6_1_1.jpg?ts=1644570790993",
          name: "DRESS",
          category: "lady",
          price: 50,
        },
        {
          img: "https://static.zara.net/photos///2022/V/0/1/p/7969/273/800/2/w/444/7969273800_6_1_1.jpg?ts=1642604787896",
          name: "JACKET",
          category: "lady",
          price: 150,
        },
        {
          img: "https://static.zara.net/photos///2021/I/0/1/p/8417/814/800/2/w/750/8417814800_6_1_1.jpg?ts=1631005081139",
          name: "PANTS",
          category: "lady",
          price: 100,
        },
        {
          img: "https://static.zara.net/photos///2021/I/1/1/p/6022/810/040/2/w/750/6022810040_6_1_1.jpg?ts=1626301958074",
          name: "BAG",
          category: "lady",
          price: 10,
        },
        {
          img: "https://static.zara.net/photos///2022/V/1/1/p/2172/810/040/2/w/750/2172810040_6_1_1.jpg?ts=1644318361472",
          name: "SHOES",
          category: "lady",
          price: 20,
        },
        {
          img: "https://static.zara.net/photos///2022/V/0/3/p/8501/528/712/2/w/750/8501528712_6_1_1.jpg?ts=1637833225384",
          name: "PYJAMAS",
          category: "baby",
          price: 10,
        },
        {
          img: "https://static.zara.net/photos///2022/V/0/3/p/5643/558/803/2/w/750/5643558803_6_1_1.jpg?ts=1643885199163",
          name: "BABY DRESS",
          category: "baby",
          price: 100,
        },
        {
          img: "https://static.zara.net/photos///2022/V/1/3/p/1576/930/002/2/w/750/1576930002_6_1_1.jpg?ts=1643735615752",
          name: "MATERNITY BAG",
          category: "baby",
          price: 30,
        },
        {
          img: "https://static.zara.net/photos///2022/V/1/3/p/6405/930/001/2/w/444/6405930001_6_1_1.jpg?ts=1641388048061",
          name: "BABY SHOES",
          category: "baby",
          price: 120,
        },
        {
          img: "https://static.zara.net/photos///2022/V/T/3/p/0900/054/712/2/w/750/0900054712_1_1_1.jpg?ts=1646041079305",
          name: "BABY CLOTHES",
          category: "baby",
          price: 120,
        },
        {
          img: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/3132/073/712/3132073712_2_7_2.jpg?t=1643038422932",
          name: "CHAIR",
          category: "home",
          price: 100,
        },
        {
      
          img: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/9479/703/955/9479703955_1_1_6.jpg?t=1639666660624",
          name: "REED DIFFUSERS",
          category: "home",
          price: 70,
        },
        {
          img: "https://static.zarahome.net/8/photos4/2022/V/4/1/b/7138/000/250/BH/NI/7138000250_1_1_2.jpg?t=1641218779197",
          name: "CANDELS",
          category: "home",
          price: 60,
        },
        {
          img: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/2584/049/052/2584049052_2_7_2.jpg?t=1642421944888",
          name: "LAUNDRY BASKET",
          category: "home",
          price: 90,
        },
        {
          img: "https://static.zarahome.net/8/photos4/2022/V/4/1/p/9523/049/712/9523049712_2_7_2.jpg?t=1645797133293",
          name: "BASKET",
          category: "home",
          price: 50,
        },
      ])
      console.log('added successfully')
    }
    } catch (error) {
        console.log(error)
    }

}
*/}
init ()
async function init () {
    try {
      const categories = await categoriesSchema.find();
      
if(!categories.length){
   await categoriesSchema.insertMany( [
    {
    
      img: "https://cdn.cliqueinc.com/posts/279024/expensive-looking-zara-items-279024-1554300218769-product.700x0c.jpg",
      title: "LADY TROC",
      cat: "women",
    },
    {
     
      img: "https://www.dailydreamdecor.com/wp-content/uploads/2020/08/10-zara-home-new-item-fall-2020-cover.jpg",
      title: "HOME TROC",
      cat: "home",
    },
    {
    
      img: "https://i.pinimg.com/736x/7d/34/ff/7d34ff3fb9d13b84ef1984575438c107.jpg",
      title: "BABY TROC",
      cat: "baby",
    },
  ])
  console.log('added successfully')
}
  } catch (error) {
    console.log(error)

  }
}

app.listen(port, (err) => 
err ? console.error(err) : console.log(`Our server is listnening to the port ${port}`)) 