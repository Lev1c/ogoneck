import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newsGet } from "../../../api/news";
import Skeleton from 'react-loading-skeleton';

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
              {newsList ?
              newsList && newsList.map(res => {
                
                return (
                  <Link className="news-block-card" to={`/news/${res.id}`}>
                    
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
              })
              :
              <div>
                  <Skeleton containerClassName="news-block-for-card-skeleton"  highlightColor="#888" width={600} height={120} count={3} className="news-block-for-card"/>
              </div>
            }
            </div>
        </div>
    </div>
  );
}

export default NewsMain;
