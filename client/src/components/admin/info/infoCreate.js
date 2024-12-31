import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { infoCreate } from "../../../api/info";



function InfoCreate() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const clickCreate = () => {
    infoCreate(name, text).then(res => {
        console.log(res)
        if(res.status === 200) {
            alert(res.message)
        }
    })
  }


  return (
    <div className="container">
        <div className="admin-block">
            <div style={{display: 'flex'}}>
                <Link className="info-link-back" onClick={() => navigate(-1)}>
                    <i class="bi bi-arrow-left"></i>
                </Link>
            </div>
            <div className="admin-block-title">
                <input
                    className="admin-block-title_input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="button-admin">
                    <button className="admin-block-title_button" onClick={() => clickCreate()}><i class="bi bi-check-lg"></i> Создать</button>
                </div>
            </div>
            <div>
                <textarea
                    className="admin-block-title_textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </div>
    </div>
  );
}

export default InfoCreate;
