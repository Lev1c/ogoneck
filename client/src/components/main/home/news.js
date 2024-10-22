import { Link } from 'react-router-dom';
import photoTest from '../../../img/backHome.png'


function News() {
  return (
    <div className="container">
        <div className="home-block welcome-block">
            <h2 className="title-text">Новости</h2>
            <div className="welcome-block-for-card">
              <Link className="welcome-block-card">
                <div className='welcome-block-card-block-img'>
                  <img className='welcome-block-card-img' src={photoTest} alt=''/>
                </div>
                
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='welcome-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <div className='welcome-block-card-block-img'>
                  <img className='welcome-block-card-img' src={photoTest} alt=''/>
                </div>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='welcome-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <div className='welcome-block-card-block-img'>
                  <img className='welcome-block-card-img' src={photoTest} alt=''/>
                </div>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость   Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
                <div className='welcome-block-card-arrow'>
                  <i class="bi bi-chevron-right"></i>
                </div>
              </Link>
            </div>
            <div>
              <Link className='link-more'>Читать больше</Link>
            </div>
        </div>
    </div>
  );
}

export default News;
