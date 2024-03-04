import { Link } from "react-router-dom";
import logo from '../../img/FlagSamara.png'

function Header() {
  return (
    <div>
      <div className="header-one">
        <div className="container header-one-block">
            <ul className="ul-header-one">
                <li className="ul-header-one-li">
                    <Link className="ul-header-one-li-link" to={'/'}><i className="bi bi-telephone mr-5"></i>Обратная связь</Link>
                </li>
                <li className="ul-header-one-li">|</li>
                <li className="ul-header-one-li">
                    <Link className="ul-header-one-li-link" to={'/'}><i className="bi bi-sign-stop mr-5"></i>Противодействие коррупции</Link>
                </li>
            </ul>
            <ul className="ul-header-one">
                <li className="ul-header-one-li">
                    <Link className="ul-header-one-li-link" to={'/'}><i className="bi bi-eye mr-5"></i>Версия для слабовидящих</Link>
                </li>
            </ul>
        </div>
      </div>
      <div className="header-two">
        <div className="container header-two-block">
            <h1 className="header-two-block-text-main">
                Государственное казенное учреждение Самарской области
            </h1>
            <h1 className="header-two-block-text-main">
                «Социально – реабилитационный центр для несовершеннолетних»
            </h1>
            <h1 className="header-two-block-text-main">
               «Огонёк»
            </h1>
            <div className="header-two-block-menu">
                <ul className="ul-header-two">
                    <li className="ul-header-two-li">
                        <Link to={'/'}><img src={logo} alt="logo" width={90}/></Link>
                    </li>
                </ul>
                <div style={{width: '83%'}}>
                    <ul className="ul-header-two">
                        <li className="ul-header-two-li">
                            Cведения об учреждении
                        </li>
                        <li className="ul-header-two-li">
                            Новости
                        </li>
                        <li className="ul-header-two-li">
                            Контакты
                        </li>
                        <li className="ul-header-two-li">
                            Документы
                        </li>
                        <li className="ul-header-two-li">
                            Доп. информация
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
