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
            <Link className="info-link-back" onClick={() => navigate(-1)}>
                <i class="bi bi-arrow-left"></i>
            </Link>
            <h2>{infoRes ? infoRes && infoRes.name : 'пусто'}</h2>
            {infoRes && infoRes.text ? parse(infoRes.text) : "пусто"}
        </div>
        {/* <li>
         <i>—</i> <Link>Документ 1</Link>
         </li> */}
    </div>
  );
}

export default Info;
