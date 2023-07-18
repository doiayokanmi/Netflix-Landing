import Image from 'next/image'
import Hero from './components/Hero'
import Enjoy from './components/Enjoy'
import tvImage from '../../public/Image/tv.png'
import downloadImg from '../../public/Image/mobile-0819.jpg'
import kidsImg from '../../public/Image/kids.png'


export default function Home() {

  const boxArr = [
    {
      title: "Enjoy on your TV",
      para: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: tvImage,
      flexDirection: "flex-row"
    },

    {
      title: "Download your shows to watch offline",
      para: "Save your favorites easily and always have something to watch.",
      image: downloadImg,
      flexDirection: "flex-row-reverse"
    },

    {
      title: "Watch everywhere",
      para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: "",
      flexDirection: "flex-row"
    },

    {
      title: "Create profiles for kids",
      para: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: kidsImg,
      flexDirection: "flex-row-reverse"
    }

  ]

  return (
    <>
      <Hero />

      {
        boxArr.map((item, index) => (
          <Enjoy key={index} title={item.title} para={item.para} image={item.image} flexDirection={item.flexDirection}/>
        ))
      }
      
    </>
  )
}
