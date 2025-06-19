import { useEffect, useState } from "react";
import SettingRouteMainAdmin from "../../routes/settingRouteMainAdmin";
import { Link } from "react-router-dom";
import { userRrotected } from "../../api/user";
import logo from "../../img/FlagSamara.png";

function Admin() {
  const [res, setRes] = useState();

  useEffect(() => {
    userRrotected().then((data) => {
      if (data && data.response && data.response.status === 401) {
        localStorage.removeItem("token");
        window.location.replace("/auth");
      }
    });
  }, []);

  console.log(res);

  return (
    <div>
      <div class="admin-head">
        <header class="container admin-header">
          <h4 className="admin-header-title">
            <Link to={"/"} className="admin-header_link">
              <img src={logo} alt="logo" width={50} />
            </Link>
          </h4>
          <div className="admin-header-link">
            <Link to={"/admin/news"} className="admin-header_link">
              Главная
            </Link>
            <Link to={"/admin/news"} className="admin-header_link">
              Новости
            </Link>
            <Link to={"/admin/info"} className="admin-header_link">
              Разделы
            </Link>
            <Link to={"/admin/document"} className="admin-header_link">
              Документы
            </Link>
            <Link to={"/admin/feedback"} className="admin-header_link">
              Заявления
            </Link>
          </div>
          <button
            className="button-admin_exit"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Выход
          </button>
        </header>
      </div>
      <div className="container">
        <SettingRouteMainAdmin />
      </div>
    </div>
  );
}

export default Admin;
