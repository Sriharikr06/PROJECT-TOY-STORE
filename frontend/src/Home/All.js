import React from 'react'
// import {  Link } from "react-router-dom";
import Navbar from './FrontPage/Navbar';
import Footer from './FrontPage/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { cartProducts } from '../Redux/actions/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const All = () => {
  const dispatch=useDispatch();
  const prod=useSelector(state=>state)
  const source=[
      {"id":1,"link":"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2FC775732F5056900B10CC7728268A1181%2Fconverted0838c620b7336a5133a3d1da3581b3e37a2aa8ed.jpg&w=2048&q=75","category":"Toy Gun","brand":"Nerf","age":"3+","desc":"Gear up for battle with Nerf Elite 2.0 blasters that feature built-in customizing capabilities so you can upgrade them and seize the advantage in Nerf competitions 5 tactical rails Comes with 24 Official Nerf darts to fully load the 10-dart clip -- and 14 more darts for reloads Go the distance with this blaster that fires darts up to 90 feet (27 meters)","name":"NERF N-STRIKE ELITE RAMPAGE","price":4999,"dprice":2999,"save":10},
      {"id":2,"link":"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2Fdea3790150569047f55ab54ebac6fefd%2F56261d4e32778cdec538de3ff91e1a37c0e94e9d.jpg&w=2048&q=75","category":"Toy Gun","brand":"Nerf","age":"6+","desc":"NERF Rampage Slam-fire Blaster: Fire 1 dart at a time from this N-Strike Elite blaster, or slam-fire all 18 darts rapidly with slam-fire action .Comes With 18 Darts And 18-dart Clip: This N-Strike Elite blaster includes 18 Official NERF Elite darts designed for distance and an 18-dart clip .Removable Stabilizing Stock: Includes a stock to stabilize your shots and is removable when the action requires a more compact blaster.","name":"NERF Rampage Slam-fire Blaster","price":4999,"dprice":3999,"save":10},
      {"id":3,"link":"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491490572/300/491490572-1.webp","category":"Doll","brand":"Barbie","age":"6+","desc":"Barbie doll comes with four complete looks to help tell stories for any time and any occasion. Four dresses, four pairs of shoes and four purses plus a pair of trendy sunglasses can be mixed and matched to inspire imaginations. Fabrics are trendy, colors are popular and accessories fun.","name":"Barbie Party Fashion Doll with Accessories","price":2000,"dprice":1700,"save":3},
      {"id":4,"link":"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490803854/300/490803854-1.webp","category":"Doll","brand":"Barbie","age":"6+","desc":"This product comes as an assortment and any 1 product will be delivered as per the availability. | A welcome addition to your little girls doll collection, this Barbie Glitz doll will make her jump with delight. This beautiful doll is dressed attractively and will capture your little princess heart with her charming features. Lots of Imaginative Playtime for Stylist: An excellent gift for birthdays and other occasions, this doll will keep your kid occupied for many hours.You can watch your girl excitedly play the role of a stylist and make her playtime imaginative and fun.","name":"Barbie Glitz Doll","price":899,"dprice":799,"save":10}, 
      {"id":5,"link":"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959953/300/491959953-1.webp","category":"Building Set","brand":"Lego","age":"6+","desc":"Join the LEGO City Police in a thrilling chase as they transport the mischievous Snake Rattler in their iconic prisoner transporter, only to have Clara The Criminal blast the cell free and make a speedy getaway in her souped-up tow truck.Can police hero Duke DeTain catch them before it's too late?","name":"Lego Police Prisoner Transport","price":2999,"dprice":1999,"save":12},
      {"id":6,"link":"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959929/300/491959929-1.webp","category":"Building Set","brand":"Lego","age":"3+","desc":"Embark on thrilling space adventures with the LEGO Cyber Drone building set - a versatile 3-in-1 toy that lets kids aged 6 and above construct their own cyber drone, mech, or scooter, igniting their imagination and providing hours of creative play.","name":"LEGO Cyber Drone Lego Blocks","price":4999,"dprice":3999,"save":5},
      {"id":7,"link":"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2FF9F95F51D7AA407BA9C64B1238945B18%2F9542f53fd849f5e8f5e3b2a5f3631f6f8ccf487a.jpg&w=2048&q=75","category":"Toy","brand":"Transformer","age":"6+","desc":"Transformers Authentics figures feature popular Transformers characters at a 4.5-inch scale. Experience the excitement of Transformers conversion play with this Transformers Authentics Bumblebee figure. It changes from robot mode to sports car mode and back in just 3 easy steps. Choose a side and collect other Transformers Authentics figures to stage epic Autobot vs. Decepticon battles (each sold separately. Subject to availability). Bumblebee is a heroic Autobot scout who’s always ready to fight for the safety of his friends and fellow Autobots.","name":"Transformers Authentics Bumblebee","price":599,"dprice":499,"save":10},
      {"id":8,"link":"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2FABA4E9B962B149A19F6380DD2433DB7E%2F0c1e7a96af2b9521c72db7992632486adfc1b1ff.jpg&w=2048&q=75","category":"Toy","brand":"Transformer","age":"6+","desc":"Picture this: me, on Earth, still cooler than everyone this side of Optimus Prime, but I've got zero memories. Now I'm on a mission to recover my memories and discover all of my awesome powers. I'll have to battle Decepticons, outrun an explosion or two, and be heroic- basically, Im in for one epic ride across the Cyberverse.-Bumblebee Grimlock, legendary Dinobot King, uses his strength to fight alongside the heroic Autobots.Convert and attack with Transformers Cyberverse Action Attackers! ","name":"Transformers Cyberverse Scout Class Grimlock","price":699,"dprice":599,"save":10},
      {"id":9,"link":"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2Feb7c5d0a50569047f5959bdd5f9b9ee3%2F744c851e43bf6f2bd2b29fcc29cc50d62c27ee9f.jpg&w=2048&q=75","category":"Board Game","brand":"Life","age":"6+","desc":"It’s the classic game of life and career choices, but it’s got a whole new electronic twist! This Electronic Banking version of The Game of Life includes an electronic unit that keeps track of everyone’s funds with a card system. When you get your salary or pay the bank to go to night school, you use your super-fast card swipe to make the transaction! Otherwise it’s the same game you know and love, with a car and pegs for children and a spouse.","name":"The Game Of Life Electronic Banking Game","price":2000,"dprice":1799,"save":2},
      {"id":10,"link":"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2F59BE93EAABA741D39E53030FFEE22426%2F591c639a70d779b7dc6c20864900962fa24a87b9.jpg&w=2048&q=75","category":"Board Game","brand":"Monopoly","age":"6+","desc":"The Monopoly Super Electronic Banking board game features an all in one electronic banking unit, and amps up the excitement with unique rewards! Each player has a bank card that will earn them different rewards for gameplay: roll a certain number, land on a certain space, or purchase a particular property. Players can also choose to fly to any property on the board, and force another player into trading one of their coveted properties.There is no paper money in this game -- the cards and banking unit track each player's cash.","name":"Monopoly Super Electronic Banking","price":2999,"dprice":1999,"save":10},
      {"id":11,"link":"https://rukminim2.flixcart.com/image/416/416/xif0q/musical-toy/y/n/y/kids-dancing-talking-cactus-toys-for-baby-boys-and-girls-120-original-imagrb34ctudsjg6.jpeg?q=70","category":"Toy","brand":"KZED","age":"6+","desc":"Singing cactus toy(120 English songs)Dancing talking cactus toy will glow and swing with the rhythm of the music. Electric dancing singing cactus will record and repeat what you say.","name":"Dancing Talking Cactus","price":599,"dprice":399,"save":2},
      {"id":12,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/p/r/prod_2fproduct-image_2ftoys_2ftru_2fwarehousecorrections_2f8906153100272_2f8906153100272_1.jpg","category":"RC Car","brand":"Seedo","age":"6+","desc":"The Seedo Monster Remote Control Truck is an exciting new product for kids. This truck is perfect for imaginative play, and it comes with light and music, for an even more exciting experience. The truck is easy to operate and comes with a wireless remote control for smooth operation. ","name":"Seedo Monster Remote Control Truck, With Light And Music","price":1999,"dprice":1799,"save":10},
      {"id":13,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/0/8/08599p_1.jpg","category":"RC Car","brand":"Playzu","age":"6+","desc":"Experience thrilling remote control racing with the Playzu Auto Perfect Racing Police Car! This 1:14 scale car is designed for speed and excitement. With its full function radio control and easy-to-use controls, it provides an exhilarating racing experience for kids and adults alike. The Lexan ultra-light body ensures durability and agility, making it perfect for high-speed maneuvers.","name":"Playzu Auto Perfect Racing Remote Control Police Car","price":2800,"dprice":2700,"save":5},
      {"id":14,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/t/r/tru_2fbrand_image_dump_2frus_kangaroo_brown_ef_2fmonobrand_2frus_kangaroo_brown_ef_2.jpg","category":"Soft Toy","brand":"Animal Alley","age":"6+","desc":"Our teddy bear has a lovely appearance, of course, as your long-term playmate, we are also special in the production of the heart, to ensure his safety and comfort, to bring you a pleasant feeling. I hope that our happiness and love in making teddy bears can be passed to you through it. It makes life more colorful.","name":"Animal Alley Huggable Lovable Soft Toy Kangaroo","price":799,"dprice":399,"save":60},
      {"id":15,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/t/r/tru_2fbrand_image_dump_2frus_36cmbrowndexterdogef_2fmonobrand_2frus_36cmbrowndexterdogef_4.jpg","category":"Soft Toy","brand":"Animal Alley","age":"6+","desc":"Our Dog Soft Toys has a lovely appearance, of course, as your long-term playmate, we are also special in the production of the heart, to ensure his safety and comfort, to bring you a pleasant feeling. I hope that our happiness and love in making it can be passed to you through it. It makes life more colorful.","name":"Animal Alley Huggable Lovable Soft Toy Dexter Dog","price":799,"dprice":199,"save":70},
      {"id":16,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/b/0/b09yvgc2c5_1.jpg","category":"Baby Cycle","brand":"Baybee","age":"6+","desc":"The Baybee Harley tricycle is great for beginner riders It offers convenience, comfort, and fun! The quiet ride tires provide a smooth ride. It comes with a colorful led light, music & a high backrest comfortable seat. These smartly designed tricycles come with special features your children will love! ","name":"Baybee Harley Kids Tricycle Cycle","price":3999,"dprice":3499,"save":10},
      {"id":17,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/4/5/456123987657_1.jpg","category":"Baby Cycle","brand":"Tygatec","age":"6+","desc":"Tygatec Yellow Swing Car Wiggle Ride On is an ideal choice for kids aged three and up. It provides a fun and exciting way to keep your child entertained. The car features a sturdy frame with an adjustable seat belt, ensuring your child's safety. It also has an easy-to-use steering wheel and four durable wheels.","name":"Tygatec Yellow Swing Car Wiggle Ride","price":4999,"dprice":2999,"save":10},
      {"id":18,"link":"https://www.shopdisney.in/media/catalog/product/cache/dff98280ed764012eadfa777851316fd/a/a/aagc0550aafm0045-1_1_.jpg","category":"Action Figures","brand":"Maverik Dreams","age":"6+","desc":"Superhero Toystore presents: Awesomely detailed officially licensed Disney statue from Enesco, giving both Big Hero 6 fans and cat lovers plenty of irresistible cuteness.","name":"Marvel Baymax With Teddy Bear Figure","price":2999,"dprice":1999,"save":10},
      {"id":19,"link":"https://www.shopdisney.in/media/catalog/product/cache/dff98280ed764012eadfa777851316fd/1/5/15903981470018_1.jpg","category":"Action Figures","brand":"Maverik Dreams","age":"6+","desc":"This superbly detailed resin figure of Mickey and Minnie getting hitched as a tux-clad Mickey carries Minnie over the threshold as the acclaimed artist Jim Shore recreates the wedding of Mickey and Minnie with his amazing artistic touch. ","name":"Disney Mickey & Minnie Wedding Figure","price":4999,"dprice":3999,"save":10},
      {"id":20,"link":"https://www.toysrus.in/media/catalog/product/cache/0eb51be5d810615cbf4198dfcb101610/t/r/tru_2fbrand_image_dump_2ftree-troopers-dollhouse_2fmonobrand_2ftree-troopers-dollhouse_1.jpg","category":"Building Set","brand":"Webby","age":"6+","desc":"Far away from the cityscapes, live the young adventurers in their secret hideout amidst the tropical woods. Escape with them to create enchanting forest tales! Let your kiddos’ imagination go wild in the home of greens and creativity! Webby brings you the innovatively designed ‘Tree Troopers - A Forest Hideout Dollhouse’ for your little foresters! Made with eco-friendly and non-toxic wood, the Tree Troopers is harmless for your little ones.","name":"Tree Troopers A Forest Hideout All Side Play Doll House","price":1999,"dprice":1299,"save":10}

      ]
  return (
    <>
    
          <Navbar/>

        <div className='main'>
          <ToastContainer/>
        {source.map((product)=>
          <div className='box' key={product.id}>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img src={product.link} className='image'></img>
                
                <div className='pri'>
                    <p id='name'>{product.name}</p>
                    <p id='price'> ₹{product.price}</p>
                    <p id='dprice'> ₹{product.dprice}</p>
                    <p id='dprice'> (Save {product.save}%)</p>
                  </div>
                  </div>
                  
                <div className='flip-box-back'>
                <p>{product.desc}</p>
                  <button type='button' class='bag'
                    onClick={()=>{
                      dispatch(cartProducts(product))
                      toast.success("Added successfully")
                    }}
                  >Add To Bag</button>
                </div>
              </div>
              </div>
          </div>
        )}
      </div>



          {/* <div className='main'>
          <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2FC775732F5056900B10CC7728268A1181%2Fconverted0838c620b7336a5133a3d1da3581b3e37a2aa8ed.jpg&w=2048&q=75"}></img>
              <h1>NERF N-STRIKE ELITE RAMPAGE</h1>
              <p id='one'>₹ 4999</p>
              <p>₹ 2999 SAVE 14%</p>
                <p></p>
              </div>
            </div>
            <div class="flip-box-back">
              <p>Gear up for battle with Nerf Elite 2.0 blasters that feature built-in customizing capabilities so you can upgrade
                 them and seize the advantage in Nerf competitions 5 tactical rails Comes
                  with 24 Official Nerf darts to fully load the 10-dart clip -- and 14 more darts for reloads Go the distance with this 
                  blaster that fires darts up to 90 feet (27 meters)</p>
              <button type='button' onClick={()=>{dispatch(cartProducts(product))}} class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2Fdea3790150569047f55ab54ebac6fefd%2F56261d4e32778cdec538de3ff91e1a37c0e94e9d.jpg&w=2048&q=75"}></img>
              <h1>NERF Rampage Slam-fire Blaster</h1>
              <p id='one'>₹ 5999</p>
              <p>₹ 3999  SAVE 10%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>NERF Rampage Slam-fire Blaster: Fire 1 dart at a time from this N-Strike Elite blaster, or slam-fire all 18 darts rapidly with slam-fire action .
Comes With 18 Darts And 18-dart Clip: This N-Strike Elite blaster includes 18 Official NERF Elite darts designed for distance and an 18-dart clip .
Removable Stabilizing Stock: Includes a stock to stabilize your shots and is removable when the action requires a more compact blaster.</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491490572/300/491490572-1.webp"}></img>
              <h1>Barbie Party Fashion Doll with Accessories</h1>
              <p id='one'>₹ 2000</p>
              <p>₹ 1700  SAVE 3%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>Barbie doll comes with four complete looks to help tell stories for any time and any occasion. Four dresses, four pairs of shoes and four purses plus a pair of trendy sunglasses can be 
                mixed and matched to inspire imaginations. Fabrics are trendy, colors are popular and accessories fun.</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490803854/300/490803854-1.webp"}></img>
              <h1>Barbie Glitz Doll</h1>
              <p id='one'>₹ 5999</p>
              <p>₹ 3999  SAVE 10%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>This product comes as an assortment and any 1 product will be delivered as per the availability. | A welcome addition to your little girls doll collection, this Barbie Glitz doll will make her jump with delight. This beautiful doll is dressed attractively and will capture your little princess heart with her charming features. Lots of Imaginative Playtime for Stylist: An excellent gift for birthdays and other occasions, this doll will keep your kid occupied for many hours. 
                You can watch your girl excitedly play the role of a stylist and make her playtime imaginative and fun.</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959953/300/491959953-1.webp"}></img>
              <h1>Lego Police Prisoner Transport </h1>
              <p id='one'>₹ 2199</p>
              <p>₹ 2155  SAVE 2%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>Join the LEGO City Police in a thrilling chase as they transport the mischievous Snake Rattler in their iconic prisoner transporter, only to have Clara The Criminal blast the cell free and make a speedy getaway in her souped-up tow truck.
                 Can police hero Duke DeTain catch them before it's too late?</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959929/300/491959929-1.webp"}></img>
              <h1>LEGO Cyber Drone Lego Blocks</h1>
              <p id='one'>₹ 5999</p>
              <p>₹ 3999  SAVE 10%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>Embark on thrilling space adventures with the LEGO Cyber Drone building set - a versatile 3-in-1 toy that lets kids aged 6 and above construct their own cyber drone, mech, or scooter, igniting their 
                imagination and providing hours of creative play.</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2FF9F95F51D7AA407BA9C64B1238945B18%2F9542f53fd849f5e8f5e3b2a5f3631f6f8ccf487a.jpg&w=2048&q=75"}></img>
              <h1>Transformers Authentics Bumblebee</h1>
              <p id='one'>₹ 599</p>
              <p>₹ 499  SAVE 2%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>Transformers Authentics figures feature popular Transformers characters at a 4.5-inch scale. Experience the excitement of Transformers conversion play with this Transformers Authentics Bumblebee figure. It changes from robot mode to sports car mode and back in just 3 easy steps. Choose a side and collect other Transformers Authentics figures to stage epic Autobot vs. Decepticon battles (each sold separately. Subject to availability). Bumblebee is a heroic Autobot scout who’s always ready
                 to fight for the safety of his friends and fellow Autobots.</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2FABA4E9B962B149A19F6380DD2433DB7E%2F0c1e7a96af2b9521c72db7992632486adfc1b1ff.jpg&w=2048&q=75"}></img>
              <h1>Transformers Cyberverse Scout Class Grimlock</h1>
              <p id='one'>₹ 699</p>
              <p>₹ 599  SAVE 2%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>"Picture this: me, on Earth, still cooler than everyone this side of Optimus Prime, but I've got zero memories. Now I'm on a mission to recover my memories and discover all of my awesome powers. I'll have to battle Decepticons, outrun an explosion or two, and be heroic- basically, I'm in for one epic ride across the Cyberverse." -Bumblebee Grimlock, legendary Dinobot King, uses his strength to fight alongside the heroic Autobots. 
                Convert and attack with Transformers Cyberverse Action Attackers! </p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2Feb7c5d0a50569047f5959bdd5f9b9ee3%2F744c851e43bf6f2bd2b29fcc29cc50d62c27ee9f.jpg&w=2048&q=75"}></img>
              <h1>The Game Of Life Electronic Banking Game</h1>
              <p id='one'>₹ 2000</p>
              <p>₹ 1799  SAVE 2%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>It’s the classic game of life and career choices, but it’s got a whole new electronic twist! This Electronic Banking version of The Game of Life includes an electronic unit that keeps track of everyone’s funds with a card system. When you get your salary or pay the bank to go to night school, you use your super-fast card swipe to make the transaction! 
                Otherwise it’s the same game you know and love, with a car and pegs for children and a spouse. </p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      <div className='box'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
              <div className='pic1'>
                <img src={"https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_IN%2F59BE93EAABA741D39E53030FFEE22426%2F591c639a70d779b7dc6c20864900962fa24a87b9.jpg&w=2048&q=75"}></img>
              <h1>Monopoly Super Electronic Banking</h1>
              <p id='one'>₹ 1800</p>
              <p>₹ 1499  SAVE 4%</p>          
              </div>
            </div>
            <div class="flip-box-back">
              <p>The Monopoly Super Electronic Banking board game features an all in one electronic banking unit, and amps up the excitement with unique rewards! Each player has a bank card that will earn them different rewards for gameplay: roll a certain number, land on a certain space, or purchase a particular property. Players can also choose to fly to any property on the board, and force another player into trading one of their coveted properties. 
                There is no paper money in this game -- the cards and banking unit track each player's cash.</p>
              <button type='button' class='bag'>Add To Bag</button><br></br>
              <button type='button' class='bag'>Wishlist</button>
            </div>
          </div>  
      </div>
      </div>
      
      </div> */}
      <Footer/>
    </>
  )
}

export default All