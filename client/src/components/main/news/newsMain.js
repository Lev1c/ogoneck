import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsGet } from "../../../api/news";


function NewsMain() {

  const [newsList, setNewsList] = useState()

  useEffect(() => {
    newsGet().then(res => setNewsList(res))
  }, [])

  return (
    <div className="container">
        <div className="info">
            <h2>Новости</h2>
            <div className="news-block-for-card">
              {newsList && newsList.map(res => {
                console.log(res)
                return (
                  <Link className="news-block-card" to={`/news/${res.sortOrder}`}>
                    
                        <div className='news-block-card-block-img'>
                          <img className='news-block-card-img' src={res.img} alt=''/>
                        </div>
                      <div className="news-block-card-link-arrow">
                        <div className='news-block-card-block-text'>
                          <p className='news-block-card-title'>{res.name}</p>
                          <span className='news-block-card-date'>22.02.2022</span>
                          <p className='news-block-card-text'>{res.dopText}</p>
                        </div>
                    
                        <div className='news-block-card-arrow'>
                          <i class="bi bi-chevron-right"></i>
                        </div>
                      </div>
                        
                  </Link>
                )
              })}
            </div>
        </div>
    </div>
  );
}

export default NewsMain;
