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
                <li className="ul-header-one-li">|</li>
                <li className="ul-header-one-li">
                    <Link className="ul-header-one-li-link" to={'/'}><i class="bi bi-box-arrow-in-right"></i></Link>
                </li>
            </ul>
        </div>
      </div>
      <div className="header-two">
        <div className="container header-two-block">
            <div className="header-two-block-menu">
                <ul className="ul-header-two">
                    <li className="ul-header-two-li">
                        <Link to={'/'}>
                            <img src={logo} alt="logo" width={50}/>
                        </Link>
                    </li>
                </ul>
                <div style={{width: '83%'}}>
                    <ul className="ul-header-two">
                        <li className="ul-header-two-li">
                            <Link to={'/about'} className="ul-header-two-li-link">Cведения об учреждении</Link>
                        </li>
                        <li className="ul-header-two-li">
                            <Link to={'/news'} className="ul-header-two-li-link">Новости</Link>
                        </li>
                        <li className="ul-header-two-li">
                            <Link to={'/'} className="ul-header-two-li-link">Контакты</Link>
                        </li>
                        <li className="ul-header-two-li">
                            <Link to={'/'} className="ul-header-two-li-link">Документы</Link>
                        </li>
                        <li className="ul-header-two-li">
                            <Link to={'/info'} className="ul-header-two-li-link">Доп. информация</Link>
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
