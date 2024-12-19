import { useEffect, useState } from "react";
import { getClaim } from "../../https";
import SettingRouteMainAdmin from "../../routes/settingRouteMainAdmin";
import { Link } from "react-router-dom";
import { userRrotected } from "../../api/user";

function Admin() {
  const [res, setRes] = useState()

  useEffect(() => {
    userRrotected().then(data => {
      if(data && data.response && data.response.status === 401) {
        localStorage.removeItem('token')
        window.location.replace('/auth')
      }
    })
  }, [])

  console.log(res)
  
  return (
    <div>
        <div class="container">
            <header class="admin-header">
              <h3 className="admin-header-title">
                <Link to={"/"} className="mr-5 admin-header_link">
                    Admin
                  </Link>
              </h3>
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
                  <i class="bi bi-box-arrow-right"></i>
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
