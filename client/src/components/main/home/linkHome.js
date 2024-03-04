import { Link } from 'react-router-dom';
import logoGosuslugi from '../../../img/logo-gosuslugi.jpg'
import logo_minim from '../../../img/logo_minim.png'
import logo_MinTrud from '../../../img/logo_MinTrud.png'
import logo_msdr from '../../../img/logo_msdr.png'
import logo_PravSO from '../../../img/logo_PravSO.png'
import logo_SocPortal from '../../../img/logo_SocPortal.jpg'
import logo_uppopravam from '../../../img/logo_uppopravam.png'

function LinkHome() {
  return (
    <div className="container">
        <div className="home-block video-block">
            <h2 className="title-text">Полезные ссылки</h2>
            <div className="welcome-block-for-card">
                <Link className='linkHome-block-link' to={'https://www.gosuslugi.ru/'} target="_blank">
                  <img src={logoGosuslugi} alt='' width={200}/>
                </Link>
                 <Link className='linkHome-block-link' to={'https://mio.samregion.ru/'} target="_blank">
                  <img src={logo_minim} alt='' width={200}/>
                </Link>
                 <Link className='linkHome-block-link' to={'https://rosmintrud.ru/'} target="_blank">
                  <img src={logo_MinTrud} alt='' width={200}/>
                </Link>
                 <Link className='linkHome-block-link' to={'http://minsocdem.samregion.ru/'} target="_blank">
                  <img src={logo_msdr} alt='' width={200}/>
                </Link>
                 <Link className='linkHome-block-link' to={'https://www.samregion.ru/'} target="_blank">
                  <img src={logo_PravSO} alt='' width={200}/>
                </Link>
                 <Link className='linkHome-block-link' to={'https://suprema63.ru/msdr/portal.do'} target="_blank">
                  <img src={logo_SocPortal} alt='' width={200}/>
                </Link>
                 <Link className='linkHome-block-link' to={'http://deti.gov.ru/region/samara'} target="_blank">
                  <img src={logo_uppopravam} alt='' width={200}/>
                </Link>
                
            </div>
        </div>
    </div>
  );
}

export default LinkHome;
