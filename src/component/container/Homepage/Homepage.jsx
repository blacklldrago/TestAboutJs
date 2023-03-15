import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Homepage.css'

import lesson from './lesson.png'
import man from './man.png'
import woman from './woman.png'
const Home = () => {
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
    <div className="container1 bg-[#7575F6]">
      <div className='container'>
        <div className='center flex justify-center items-center pt-[100px]'>
          <div>
            <h1 className='w-[600px] text-[60px] leading-[60px] text-[white]'>{t("text2")}</h1>
            <Link to={"/test"}><button className='text-[18px] bg-[#4fc87a] text-[white] w-[300px] h-[50px] rounded-[10px] mt-[20px]'>{t("text3")}</button></Link>
          </div>
          <div>
            <img className='w-[600px]' src={lesson} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container2 pb-[100px]">
      <div className="container">
        <div className="how">
          <h1 className='mb-[20px] text-[32px] text-[black] text-center mt-[60px]'>{t("text4")}</h1>
          <div className='flex items-center justify-evenly'>
            <div> <img src={man} alt="" /> </div>
            <div> <h1 className='text-[25px] font-[600] mb-[20px]'>{t("text5")}</h1> <p  className='w-[400px] text-[20px]'>{t("text6")}</p></div>
          </div>
          <div className='flex items-center justify-evenly'>
            <div><h1 className='text-[25px] font-[600] mb-[20px]'>{t("text7")}</h1> <p className='w-[400px] text-[20px]'>{t("text8")}</p></div>
            <div><img src={woman} alt="" /> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container3 pb-[70px]">
      <div className="container">
        <div className='text-center'>
          <h1 className='pb-[20px]'>{t("text9")}</h1>
          <Link to={"/test"}>
          <button className='bg-[#4FC87A] w-[188px] h-[48px] rounded-[5px] text-[white] text-[20px] font-[600]'>{t("text10")}</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home