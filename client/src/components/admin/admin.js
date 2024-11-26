import { useEffect, useState } from "react";
import { getClaim } from "../../https";
import SettingRouteMainAdmin from "../../routes/settingRouteMainAdmin";
import { Link } from "react-router-dom";

function Admin() {
  const [res, setRes] = useState()

  useEffect(() => {
    getClaim().then(data => setRes(data))
  }, [])

  console.log(res)
  return (
    <div>
        <div class="container">
            <header class="admin-header">
              <h2 className="admin-header-title">
                <Link to={"/"} className="mr-5 admin-header_link">
                    Admin
                  </Link>
              </h2>
              <div className="admin-header-link">
                  <Link to={"/admin/news"} className="mr-5 admin-header_link">
                    Главная
                  </Link>
                  <Link to={"/admin/news"} className="mr-5 admin-header_link">
                    Новости
                  </Link>
                  <Link to={"/admin/info"} className="admin-header_link">
                    Разделы
                  </Link>
              </div>
                <button className="button-admin_exit" onClick={() => {
                  localStorage.removeItem('token')
                  window.location.reload()
                  }}
                >
                  Выйти
                </button>
            </header>
          </div>
          <div className="container">
            <SettingRouteMainAdmin/>
          </div>
    </div>
  );
}

export default Admin;
