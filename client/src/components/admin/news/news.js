import { useEffect, useState } from "react";
import { newsGet } from "../../../api/news";
import { Link } from "react-router-dom";


function NewsAdmin() {

  const [newsList, setNewsList] = useState()

  useEffect(() => {
    newsGet().then(res => setNewsList(res))
  }, [])

  return (
    <div>
       <div className="admin-block">
          <div className="admin-title">
            <h2>Новости</h2>
              <div className="button-admin">
                <Link to={'/admin/news/create'} className="button-admin-link">
                  <button className="button-admin_create"><i class="bi bi-plus-lg"></i> Создать</button>
                </Link>
                <button className="button-admin_delete"><i class="bi bi-trash-fill"></i> Удалить</button>
              </div>
          </div>
            <div className="news-block-for-card">
              {newsList && newsList.map(res => {
                return (
                  <Link className="news-block-card" to={`/admin/news/change/${res.sortOrder}`}>
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

export default NewsAdmin;
