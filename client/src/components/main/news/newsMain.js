import { useState } from "react";
import { Link } from "react-router-dom";
import photoTest from '../../../img/backHome.png'

function NewsMain() {

  return (
    <div className="container">
        <div className="info">
            <h2>Новости</h2>
            <div className="news-block-for-card">
              <Link className="news-block-card">
                <div className='news-block-card-block-img'>
                  <img className='news-block-card-img' src={photoTest} alt=''/>
                </div>
                
                <div className='news-block-card-block-text'>
                  <p className='news-block-card-title'>Такая новость</p>
                  <span className='news-block-card-date'>22.02.2022</span>
                  <p className='news-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='news-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
              <Link className="news-block-card">
                <div className='news-block-card-block-img'>
                  <img className='news-block-card-img' src={photoTest} alt=''/>
                </div>
                <div className='news-block-card-block-text'>
                  <p className='news-block-card-title'>Такая новость</p>
                  <span className='news-block-card-date'>22.02.2022</span>
                  <p className='news-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='news-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
              <Link className="news-block-card">
                <div className='news-block-card-block-img'>
                  <img className='news-block-card-img' src={photoTest} alt=''/>
                </div>
                <div className='news-block-card-block-text'>
                  <p className='news-block-card-title'>Такая новость</p>
                  <span className='news-block-card-date'>22.02.2022</span>
                  <p className='news-block-card-text'> Такая новость   Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='news-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
              <Link className="news-block-card">
                <div className='news-block-card-block-img'>
                  <img className='news-block-card-img' src={photoTest} alt=''/>
                </div>
                <div className='news-block-card-block-text'>
                  <p className='news-block-card-title'>Такая новость</p>
                  <span className='news-block-card-date'>22.02.2022</span>
                  <p className='news-block-card-text'> Такая новость   Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='news-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
              <Link className="news-block-card">
                <div className='news-block-card-block-img'>
                  <img className='news-block-card-img' src={photoTest} alt=''/>
                </div>
                <div className='news-block-card-block-text'>
                  <p className='news-block-card-title'>Такая новость</p>
                  <span className='news-block-card-date'>22.02.2022</span>
                  <p className='news-block-card-text'> Такая новость   Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='news-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
            </div>
        </div>
    </div>
  );
}

export default NewsMain;
