import React from "react";
import Title from "../../components/Title";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import kate7 from "../../pages/HomePage/images/Kate7.jpg";
import kate10 from "../../pages/HomePage/images/Kate10.png";
import './About.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


const About = () => {
  return(
    <div class="about-container">
        <header class="section-header">
          <h1 class="about" > ABOUT </h1>
        </header>

        <div class="image">

         <img src={kate7} />

        </div>

        <div className="text">


          <h2>how this journey started…</h2>

          <p> I like to think of myself as a regular modern woman, just like you, on a mission to re-shape stereotypes and provide women around the world with the tools they need to step out of the “mould” or “box” they occupy, take ownership of their lives, live unapologetically, dream BIG and ultimately... rise and conquer.

          <br />
          <br />

          I live my life by one simple phrase; No One is You, And That Is Your Power.  We are all so different, and as women, we are often scared to embrace our differences. My goal is to show you that different is unique. Different is your biggest asset to creating your dream life. Different is powerful. Whatever you dreams are, I want to help you achieve them - the same way I have achieved mine. Repeat after me; no one is you, and that is your power.  Who’s ready to step into their power with me? Let’s do this!

          <br />
          <br />

          My whole life growing up, I believed “success” meant earning an exceptional salary, working in a highly esteemed career path, and even weighing less. So naturally, I developed an unhealthy obsession with health and fitness, I studied hard to land a career in Law, and I earned my spot in a well known Law firm after I graduated from University.

          <br />
          <br />

          I didn’t do these things because I truly wanted to do them. I did these things because I thought that I should be doing them.

          And you know what? After I had achieved everything society told me to achieve, I didn’t feel successful or fulfilled. I wanted more from life.

          <br />
          <br />

          Less than a year into my career, I made the decision to part from Law and took the leap to follow my true passions. I am creative, I love a balanced intuitive approach to health and fitness, I am goal driven and I crave a bigger platform for the messages I wish to share.

          <br />
          <br />

          That’s where Georgie 2.0 came in! I took my passions and figured out how to make them a sustainable career out of them. Basically, I gave myself permission to do what makes ME happy. To explore whatever lights me up. Now, I own (and co-own) TWO successful brands, I get to wake up every day and do what I love, and most importantly, I enjoy life. And I want to show you how you can, too.
          </p>

          </div>

          <div class="image">

           <img src={kate10} />

          </div>

          

    </div>



  )
}

export default About;
