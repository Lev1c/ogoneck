import { Link } from 'react-router-dom';
import photoTest from '../../../img/backHome.png'
import photoTestTwo from '../../../img/photo_2024-03-04_20-05-46.jpg'
import photoTestThree from '../../../img/photo_2024-03-04_20-06-17.jpg'

function Welcome() {
  return (
    <div className="container">
        <div className="home-block welcome-block">
            <h2 className="title-text">Новости</h2>
            <div className="welcome-block-for-card">
              <Link className="welcome-block-card">
                <img className='welcome-block-card-img' src={photoTest} alt=''/>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <img className='welcome-block-card-img' src={photoTestTwo} alt=''/>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <img className='welcome-block-card-img' src={photoTestThree} alt=''/>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <img className='welcome-block-card-img' src={photoTest} alt=''/>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <img className='welcome-block-card-img' src={photoTest} alt=''/>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
              </Link>
              <Link className="welcome-block-card">
                <img className='welcome-block-card-img' src={photoTest} alt=''/>
                <div className='welcome-block-card-block-text'>
                  <p className='welcome-block-card-title'>Такая новость</p>
                  <span className='welcome-block-card-date'>22.02.2022</span>
                  <p className='welcome-block-card-text'> Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость Такая новость</p>
                </div>
              </Link>
            </div>
        </div>
    </div>
  );
}

export default Welcome;
