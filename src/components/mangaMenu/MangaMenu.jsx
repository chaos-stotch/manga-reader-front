import React from 'react'
import './mangaMenu.css'
import { BsBookmarkPlusFill } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

const IMG1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6c%2Faa%2F3d%2F6caa3d8802ad0442626bf4d15a5310c7.jpg&f=1&nofb=1&ipt=fd0bb75182e1b34005fdb2c3e2f8a09fc116a9d48e96ee4a4f9af5956daea213&ipo=images"

function MangaMenu() {
  return (
    <div>
      
      <div className='manga__menu'>
          <div>
            <div className="menu__back_image"/>
            <img src={IMG1} className="mangaImage"/>
          </div>
          <div className="mangaDetails">
              <h3 className='menu__manga__title'>Manga Name</h3>
              <button className='read__now-btn btn'>Read Now</button>
              <button className='read__list btn'><BsBookmarkPlusFill/></button>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum fugit rem excepturi, officiis architecto numquam rerum laudantium aliquid eius corporis, velit ad nobis, assumenda consequuntur ratione nemo itaque ut.</p>
          </div>
      </div>
      <div className='manga__list'>
        <div className='chapter'>
          <h4 className='chapter__name'>chapter 1</h4>
          <div className='icon-box'>
            <AiOutlineEye className='readed-icon'/>
          </div>
        </div>
        <div className='chapter'>
          <h4 className='chapter__name'>chapter 2</h4>
          <div className='icon-box'>
            <AiOutlineEye className='readed-icon'/>
          </div>
        </div>
        <div className='chapter'>
          <h4 className='chapter__name'>chapter 3</h4>
          <div className='icon-box'>
            <AiOutlineEye className='readed-icon'/>
          </div>
        </div>
        <div className='chapter'>
          <h4 className='chapter__name'>chapter 4</h4>
          <div className='icon-box'>
            <AiOutlineEye className='readed-icon'/>
          </div>
        </div>
        <div className='chapter'>
          <h4 className='chapter__name'>chapter 5</h4>
          <div className='icon-box'>
            <AiOutlineEye className='readed-icon'/>
          </div>
        </div>
        <div className='chapter'>
          <h4 className='chapter__name'>chapter 6</h4>
          <div className='icon-box'>
            <AiOutlineEye className='readed-icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MangaMenu
