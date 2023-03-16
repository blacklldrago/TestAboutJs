
import { MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PodcastsIcon from '@mui/icons-material/Podcasts';

import logo3 from './logo3.png'
import logo4 from './logo4.png'
import Switcher from '../components/switcher/Switcher';

const Layout = () => {
    const [ lng, setLng ] = useState('ru')
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );

  const handleChange = (event) => {
    const { value } = event.target
    changeLanguage(value)
    setLng(value)
  }
  return (<div>
    <div className="containerp bg-[#4FC87A] dark:bg-[#222222]">

    <div className="container">

        <div className='navbar  flex justify-between w-[70%] m-auto py-[10px] '>
            <Link to={"/"}>
            <div className='start flex items-center gap-[10px]'>
                <div>< img className='h-[60px] hidden dark:block' src={logo3} alt="" /> </div>
                <div>< img className='h-[60px] dark:hidden  ' src={logo4} alt="" /> </div>
                <div><h1 className='text-[40px] text-[black] dark:text-[white]'>{t("text1")}</h1></div>
            </div>
            </Link>
            <div className='local flex gap-[20px]'>
                <Select className='h-[45px] mt-[15px] bg-[#4FC87A]  dark:text-[white] dark:bg-[#222222]'  variant='standard' value = {lng} onChange = {handleChange}>
                    <MenuItem  value = "ru">Ru</MenuItem>
                    <MenuItem  value = "en">En</MenuItem>
                </Select>
            <div>
                <Switcher/>
            </div>
            </div>
        </div>
    </div>
    </div>
    <Outlet/>
    <div className="containerp1">
        <div className="footer bg-[#FAFAFA]  dark:bg-[#222222] py-[16px]">
            <div className="container">
                <div className="icons flex justify-center items-center gap-[50px] flex-wrap" >
                    <div>
                    <Link to={"https://www.facebook.com/"}>
                    <FacebookTwoToneIcon sx={{fontSize:"50px", color:"blue"}}/>
                    </Link>
                    </div>
                    <div>
                    <Link to={"https://www.instagram.com/javascriptcoding/"}>
                    <InstagramIcon sx={{fontSize:"50px", color:"#EA4535"}}/>
                    </Link>
                    </div>
                    <div>
                    <Link to={"https://t.me/javascriptbooks"}>
                    <TelegramIcon sx={{fontSize:"50px", color:"#1D94D0"}}/>
                    </Link>
                    </div>
                    <div>
                    <Link to={"https://www.youtube.com/watch?v=fHl7UyRjOf0&list=PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk"}>
                    <YouTubeIcon sx={{fontSize:"50px", color:"red"}}/>
                    </Link>
                    </div>
                    <div>
                    <Link to={"https://www.softclub.tj/"}>
                    <PodcastsIcon sx={{fontSize:"50px", color:"#8C2EC3"}}/>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Layout