import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { infoGetId } from "../../../api/info";


function Info() {

   const { id } = useParams()
   const navigate = useNavigate()

   const [infoRes, setInfoRes] = useState()

   useEffect(() => { 
      infoGetId(id).then((res) => setInfoRes(res))
   }, [id])
   

  return (
    <div className="container">
        <div className="info">
          <div style={{display: 'flex'}}>
            <Link className="info-link-back" onClick={() => navigate(-1)}>
                <i class="bi bi-arrow-left"></i>
            </Link>
          </div>
          <div className="news-title">
            <h2>{infoRes ? infoRes && infoRes.name : 'пусто'}</h2>
          </div>
          <div className="news-block-text">
            {infoRes && infoRes.text ? parse(infoRes.text) : "пусто"}
          </div>
        </div>
    </div>
  );
}

export default Info;
