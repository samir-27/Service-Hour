import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillFacebook} from "react-icons/ai"
const Home = () => {
  return (
   <>
    <div className="home" id='home'>
        <main>
            <h1>Service Hour</h1>
            <p>Solution to all Your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="" />
      <div>
        <p>
        At Solution Agency, we thrive on tackling complex problems head-on. With our diverse team of experts and innovative approach, we provide tailored solutions that propel businesses forward. From strategic planning to technological advancements, our comprehensive services empower organizations to overcome obstacles, achieve sustainable growth, and seize opportunities in a rapidly evolving world.
        </p>
      </div>

    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who We Are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam accusamus assumenda sunt,
          
           possimus voluptate magni reiciendis aut voluptatem exercitationem debitis.
           Modi debitis porro nostrum facilis, unde doloremque corrupti impedit.
           
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla error eum, suscipit facere quas quo saepe impedit facilis ad iusto voluptatibus vero! Commodi cumque dolor, veniam aliquid, voluptatibus, tempore sit illo optio aspernatur at ipsa doloremque vero. Qui quo magnam deleniti non doloribus officiis! Ipsam molestias repudiandae eos impedit!
           
           
           </p>
      </div>
    </div>
    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s",}}>
            <AiFillGoogleCircle />
            <p>Google</p>

          </div>
          <div style={{animationDelay:"0.5s",}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>

          </div>
          <div style={{animationDelay:"0.7s",}}>
            <AiFillYoutube />
            <p>Youtube</p>

          </div>
          <div style={{animationDelay:"0.9s",}}>
            <AiFillFacebook />
            <p>Facebook</p>

          </div>
        </article>
      </div>
    </div>
   </>
  )
}

export default Home
