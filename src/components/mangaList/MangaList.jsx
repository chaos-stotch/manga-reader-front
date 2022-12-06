import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './mangaList.css'

const client = axios.create({
  baseURL: "https://manga-reader-api.herokuapp.com/mangas/" 
});

function MangaList() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('1').then((response) => {
         setPosts(response.data.MangaList);
      });
   }, []);

  return (
    <div className='mangaList'>
      {
        posts.map(({mangaName, image, description}) =>{
          return (
            <div className="manga__card">
                <img src={image} alt={mangaName} className="manga__card-img"/>
                <h4 className='manga__name'>{mangaName}</h4>
                <p className='description'>{description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default MangaList
