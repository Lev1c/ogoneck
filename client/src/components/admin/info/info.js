import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { infoGet } from "../../../api/info";


function InfoAdmin() {

  const [list, setList] = useState()
    
    useEffect(() => {
        infoGet().then((res) => setList(res))
    }, [])


  return (
    <div>
       <div className="info">
        <h2>Меню</h2>
        <div className="button-admin">
          <Link to={'/admin/info/create'} className="button-admin-link">
            <button className="button-admin_create"><i class="bi bi-plus-lg"></i> Создать</button>
          </Link>
          <button className="button-admin_delete"><i class="bi bi-trash-fill"></i> Удалить</button>
        </div>
            <div className="info-block">
                {list && list.map(res => {
                    return (
                        <Link className="card-info" to={`/admin/info/change/${res.sortOrder}`}>
                            <div className='card-info-icon'>
                                <i class="bi bi-file-earmark-text"></i>
                            </div>
                            <h4>{res.name}</h4>
                        </Link>
                        
                    )
                })}
            </div>
      </div>
    </div>
  );
}

export default InfoAdmin;
