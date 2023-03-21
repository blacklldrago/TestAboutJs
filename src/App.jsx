import './App.css'
import logo from './assets/logo.png';
import gift1 from './assets/gift1.png';
import gift2 from './assets/gift2.png';
import gift3 from './assets/gift3.png';
import sofa from './assets/sofa.svg';
import bees from './assets/bees.png';
import bees1 from './assets/bees1.png';
import footer from './assets/footer.png';
import videoImg from './assets/videoImg.png';
import InfoIcon from '@mui/icons-material/Info';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import Feedback from './components/feedback/Feedback';
import StarIcon from '@mui/icons-material/Star';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

function App () {

  return (<div>
    <div className="container1 bg-[#F0F9FF] pb-[100px]">
      <div className="container">
          <div className="navbar bg-[white] flex justify-around items-center ">
            <div className="start">
              <img src={logo} alt="" />
            </div>
            <div className='finish'>
              <Button>Info<InfoIcon/></Button>
            </div>
          </div>
          <div className="center text-center pt-[100px]">
          <img className=' float-right mb-[20px]' src={bees} alt="" />
          <img src={bees} alt="" />
            <h1 className='text-[56px] font-[700] leading-[150%] text-[#222735]'>You are invited to Honeygain!</h1>
            <p className='my-[20px] text-[#222735] text-[20px] leading-[150%] font-[500]'>Join the passive income app and start earning today ― effortlessly.</p>
            <p className='bg-[#E5F9C8] rounded-[8px] w-[400px] m-auto px-[8px] py-[8px] mb-[50px]'><RedeemIcon className='text-[#4C750D] mb-[3px] mr-[2px]'/>You get a $5 gift when you register to Honeygain!</p>
            <button className='font-[600] h-[64px] bg-[#0171D3] rounded-[8px] w-[256px] text-[white] text-[16px] leading-[150%]'>Register to claim $5</button>
          </div>
      </div>
    </div>
    <div className="container2 pb-[100px]">
      <div className="container">
        <h1 className='text-[38px] font-[700] leading-[150%] text-[#232836] text-center pt-[80px]'>Claim your $5 gift in 3 easy steps!</h1>
        <div className="row flex justify-evenly">
          <div className='text-center'>
            <img src={gift1} alt="" />
            <h1 className='w-[257px] text-[24px] text-[#222735] font-[700]'>Register to Honeygain</h1>
            <p className='w-[280px] text-[16px]'>Create your account and the $5 gift will be added to its balance</p>
          </div>
          <div className='text-center'>
            <img src={gift2} alt="" />
            <h1 className='w-[257px] text-[24px] text-[#222735] font-[700]'>Install the app</h1>
            <p  className='w-[280px] text-[16px]'>Download the app from the website’s main dashboard</p>
          </div>
          <div className='text-center'>
            <img src={gift3} alt="" />
            <h1 className='w-[280px] text-[24px] text-[#222735] font-[700]'>Share traffic & get paid</h1>
            <p  className='w-[280px] text-[16px]'>Share your traffic, collect at least $20, and withdraw it in USD or JMPT</p>
          </div>
        </div>
        <div className='text-center pt-[20px]'>
          <button className='font-[600] h-[64px] bg-[#0171D3] rounded-[8px] w-[256px] text-[white] text-[16px] leading-[150%]'>Register to claim $5</button>
        </div>
          
      </div>
    </div>
    <div className="container3 bg-[#F0F9FF] pb-[80px] pt-[100px]">
      <div className="container">
        <div className="month flex justify-evenly  items-center">
          <div className='leftMonth w-[536px]'>
            <p className='text-[14px] font-[700] leading-[150%] text-[#222735]'>100% PASSIVELY</p>
            <h1 className='text-[38px] font-[700] leading-[150%] text-[#222735]'>Earn up to $50 a month</h1>
            <p className='my-[20px] text-[16px] font-[400] leading-[150%] text-[#222735]'>Honeygain is the first-ever app that allows its users to make money online by sharing their Internet connection. Reach your networks' full potential by getting paid in USD or JMPT!</p>
            <button className='font-[600] h-[64px] bg-[#0171D3] rounded-[8px] w-[256px] text-[white] text-[16px] leading-[150%]'>Register to claim $5</button>
          </div>
          <div className="rightMonth">
            <img className='w-[536px] h-[301px]' src={videoImg} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className='container4 pt-[30px] pb-[80px]'>
      <div className="container">
        <h1 className='text-[38px] font-[700] leading-[150%] text-[#232836] text-center pt-[80px]'>Check what our community has to say</h1>
        <p className='text-center font-[600x] text-[20px] mt-[20px]'>See our 10,138 reviews on <StarIcon sx={{color:"#00B67A"}}/> <a href={"https://www.trustpilot.com/review/honeygain.com?utm_medium=trustbox&utm_source=MicroReviewCount"}><span className='font-[700]'>Trustpilot</span></a> </p>
        <div className='feedbacks pt-[70px] w-[80%] m-auto cursor-pointer'>

        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop = {true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <Feedback text1 = "“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”"
        
        text2 = "Andryu Vera"
        /></SwiperSlide>
        <SwiperSlide> <Feedback text1 = "“Simple and best app for passive income by sharing ur internet nd gain some $ or crypto coins.“"
        
        text2 = "Matthew Talbot-Paine"
        /></SwiperSlide>
        <SwiperSlide> <Feedback text1 = "“ Service is excellent. Payout was credited to me instantly. Thank you.😆“"
        
        text2 = "ANNA LISA AGUILA"
        /></SwiperSlide>
        <SwiperSlide> <Feedback text1 = "“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”"
        
        text2 = "Matthew Talbot-Paine"
        /></SwiperSlide>
        <SwiperSlide> <Feedback text1 = "“Simple and best app for passive income by sharing ur internet nd gain some $ or crypto coins.“"
        
        text2 = "Andryu Vera"
        /></SwiperSlide>
        <SwiperSlide> <Feedback text1 = "“ Service is excellent. Payout was credited to me instantly. Thank you.😆“"
        
        text2 = "ANNA LISA AGUILA"
        /></SwiperSlide>
      </Swiper>
    </>
        </div>
      </div>
    </div>
    <div className="container5 pb-[100px]">
      <div className="container">
        <h1 className='text-[38px] font-[700] leading-[150%] text-[#232836] text-center pt-[40px] pb-[50px]'>Frequently asked questions</h1>
        <div className='accord w-[40%] m-auto'>
        <div style={{boxShadow:"1px 1px 2px black"}}>

        <Accordion  sx={{padding:"10px", marginBottom:"20px"}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography sx={{fontSize:"20px", fontWeight:"500", color: "rgb(35, 40, 54)"}}>How to start earning with Honeygain?</Typography>
        </AccordionSummary >
        <AccordionDetails>
          <Typography sx={{fontSize:"16px", fontWeight:"400", color:"rgb(35, 40, 54)"}}>
          First, create an account on Honeygain's website. Next, download and install the app on your device and sign in using your account credentials. Now all that's left to do is leave the app running so it can share your internet bandwidth and make money!
          You can use mobile and WiFi networks when using the app, as long as your internet connection is stable. You can find in-depth instructions here.
          </Typography>
        </AccordionDetails>
        </Accordion>
        </div>
        <div style={{boxShadow:"1px 1px 2px black", marginTop:"20px"}}>
          
        <Accordion sx={{padding:"10px" , marginBottom:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"20px", fontWeight:"500", color: "rgb(35, 40, 54)"}}>How much can I make in a month?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:"16px", fontWeight:"400", color:"rgb(35, 40, 54)"}} >
          You earn $26.58 on average with Honeygain! Your earnings depend on the demand for internet bandwidth, which constantly fluctuates. You can read more about earning with Honeygain on our blog post.


          </Typography>
        </AccordionDetails>
        </Accordion>
        
        </div>
        <div style={{boxShadow:"1px 1px 2px black", marginTop:"20px" }}>      
        <Accordion sx={{padding:"10px" , marginBottom:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"20px", fontWeight:"500", color: "rgb(35, 40, 54)"}}>Which platforms does Honeygain support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{fontSize:"16px", fontWeight:"400", color:"rgb(35, 40, 54)"}}>
          Currently, our hive fleet supports Android, Windows, macOS, iOS, and Linux (via Docker) operating systems. Honeygain app is available on PCs, smartphones, and tablets.
          Every Honeygain user can have up to 10 devices actively sharing their bandwidth at the same time, as long as each of them is connected to a different network.
          </Typography>
        </AccordionDetails>
        </Accordion>
        
        </div>
        <div style={{boxShadow:"1px 1px 2px black", marginTop:"20px"}}>
          
        <Accordion sx={{padding:"10px" , marginBottom:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize:"20px", fontWeight:"500", color: "rgb(35, 40, 54)"}}>How will I redeem my earnings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{fontSize:"16px", fontWeight:"400", color:"rgb(35, 40, 54)"}}>
          Once you reach the $20 minimum payout threshold, you will be able to choose from two payout options: USD via PayPal or crypto JumpTokens (JMPT).
          If you use the JumpTask mode, no payout threshold applies. However, all your earnings will be in JMPT. More information about payouts can be found here.
          </Typography>
        </AccordionDetails>
        </Accordion>
        
        </div>
        </div>
        <p className='text-center pt-[20px] text-[16px] text-[#232836]'>Not sure how to start? <span className='underline text-[purple]'> <a href="https://www.youtube.com/watch?v=kXKet77JOxM&list=UUjvc_DUilcy50AWSy7Qz2Ag">Watch intro videos</a></span> </p>
      </div>
    </div>
    <div className="container6">
      <div className="container">
        <div className='sofa  text-center'>
          <img className='w-[1750px]' src={sofa} alt="" />
        </div>
        <div className='bg-[#BEDDF3]'>
          <h1 className='pt-[100px] text-[38px] font-[700] leading-[150%] text-[#232836] text-center pb-[50px]'>Ready to earn money effortlessly?</h1>
          <div className='text-center '>
          <button className='mb-[80px] font-[600] h-[64px] bg-[#0171D3] rounded-[8px] w-[256px] text-[white] text-[16px] leading-[150%]'>Register to claim $5</button>
        </div>
        </div>
      </div>
    </div>
    <div className="container7 bg-[#163351]">
      <div className="container">
        <div className="footer flex justify-evenly pt-[60px]">
          <div className='pb-[30px]'> 
            <img src={footer} alt="" />
            <p className='w-[483px] pb-[40px] text-[white]'>Honeygain is the first-ever app that allows its users to make money online by sharing their Internet connection. Reach your networks' full potential by getting paid in USD or JMPT!</p>
            <a href="https://www.facebook.com/honeygainapp/"><FacebookOutlinedIcon sx={{color:"white", marginRight:"20px"}}/></a>
            <a href="https://www.instagram.com/honeygain_app/"><InstagramIcon sx={{color:"white", marginRight:"20px"}}/></a> 
            <a href="https://twitter.com/Honeygain_App"><TwitterIcon sx={{color:"white", marginRight:"20px"}}/></a>
          </div>
          <div>
            <ul className='flex gap-[20px]'>
              <li className='text-[white] text-[16px] font-[500] '>Sign Up</li>
              <li className='text-[white] text-[16px] font-[500] '>Terms of Use</li>
              <li className='text-[white] text-[16px] font-[500] '>Privacy policy</li>
            </ul>
          </div>
          <div>
          </div>
        </div>
          <div>
          <hr className='text-[#234465] w-[73%] m-auto pb-[10px]' />
          <p className='pb-[20px] text-center text-[white] text-[16px] font-[500]'>© 2023 Honeygain. All rights reserved.</p>
          </div>
      </div>
    </div>
  </div>)
}

export default App