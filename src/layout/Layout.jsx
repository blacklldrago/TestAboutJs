
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
import { Button } from 'antd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
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
            <div className='flex gap-[20px]'>
                <Link to={"/login"}>

                <Button className='bg-[#F7DF1E] font-[600] h-[35px] mt-[10px] '>
                 {t("text11")}&nbsp;<ExitToAppIcon className='dark:text-[blue]'/></Button>
                </Link>
                <Link to={"/register"}>
                <Button className='bg-[#F7DF1E] font-[600] h-[35px] mt-[10px]'>{t("text12")}&nbsp;<HowToRegIcon className='dark:text-[blue]'/></Button>
                </Link>
            <Select className='h-[35px]  bg-[#F7DF1E]  dark:text-[black] dark:bg-[#F7DF1E] mt-[10px]'   value = {lng} onChange = {handleChange}>
                    <MenuItem className='  bg-[#F7DF1E]  dark:text-[black] dark:bg-[#F7DF1E]' value = "ru">Ру</MenuItem>
                    <MenuItem className='  bg-[#F7DF1E]  dark:text-[black] dark:bg-[#F7DF1E]' value = "en">En</MenuItem>
                </Select>
            </div>
                <Switcher/>
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