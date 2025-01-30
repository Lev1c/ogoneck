import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { infoGetAdmin } from "../../../api/info";

function InfoAdmin() {
  const [list, setList] = useState();

  useEffect(() => {
    infoGetAdmin().then((res) => setList(res));
  }, []);

  return (
    <div>
      <div className="admin-block">
        <div className="admin-title">
          <h2>Разделы</h2>
          <div className="button-admin">
            <Link to={"/admin/info/create"} className="button-admin-link">
              <button className="button-admin_create">
                <i class="bi bi-plus-lg"></i> Создать
              </button>
            </Link>
            <button className="button-admin_delete">
              <i class="bi bi-trash-fill"></i> Удалить
            </button>
          </div>
        </div>
        <div className="info-block">
          {list &&
            list.map((res) => {
              return (
                <Link className="card-info" to={`/admin/info/change/${res.id}`}>
                  <div className="card-info-icon">
                    <i class="bi bi-file-earmark-text"></i>
                  </div>
                  <h4>{res.name}</h4>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default InfoAdmin;
