import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="container footer-block">
        
        <div className='footer-block-list'>
          <h5>Полезные сслыки:</h5>
          <ul className='footer-block-list-ul'>
            <li>
              <Link className="footer-block-list-ul-link" to={'/'}>Часто задаваемые вопросы</Link>
            </li>
            <li>
              <Link className="footer-block-list-ul-link" to={'/'}>Профсоюзная жизнь</Link>
            </li>
            <li>
              <Link className="footer-block-list-ul-link" to={'/'}>Руководящие документы</Link>
            </li>
            <li>
              <Link className="footer-block-list-ul-link" to={'/'}>Социальный портал</Link>
            </li>
            <li>
              <Link className="footer-block-list-ul-link" to={'/'}>Правительство Самарской области</Link>
            </li>
          </ul>
        </div>
        <div className='footer-block-list'>
          <h5>Связаться с нами:</h5>
          <ul className='footer-block-list-ul'>
            <li><span>Приемная</span>: 8 (846) 612-58-29</li>
            <li><span>Директор</span>:  8 (846) 612-36-25</li>
            <li><span>Email</span>: ogonekadm@socio.samregion.ru</li>
            <li>ПН-ПТ: 08.00-17.00</li>
            <li><Link className="footer-block-list-ul-link" to={'https://vk.com/public206252863'} target="__blank">Вконтакте</Link></li>
          </ul>
        </div>
        <div className='footer-block-list'>
          <h5>Адрес учреждения:</h5>
          <p>Самарская обл., 446300, г. Отрадный, ул. Гагарина, 59А</p>
          
            <div className="footer-block-list-map">
              {//eslint-disable-next-line
                <iframe src="https://yandex.ru/map-widget/v1/org/sotsialno_reabilitatsionny_tsentr_dlya_nesovershennoletnikh_ogonek/1012634175/?ll=51.338826%2C53.380428&z=17.05" width="450" height="200" frameborder="1" allowfullscreen="true" ></iframe>
              }
              </div>
          
        </div>
      </div>
      <p>ГКУ СО «СРЦН «Огонёк»</p>
    </div>
  );
}

export default Footer;
