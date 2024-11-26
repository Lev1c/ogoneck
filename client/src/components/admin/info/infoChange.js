import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { infoChange, infoDelete, infoGetId } from "../../../api/info";



function InfoChange() {

   const { id } = useParams()
   const navigate = useNavigate()
   
   const [idNews, setIdNews] = useState("")
   const [name, setName] = useState("")
   const [text, setText] = useState("")

   useEffect(() => { 
      infoGetId(id).then((res) => {
        setIdNews(res.id)
        setName(res.name)
        setText(res.text)
    })
   }, [id])


   const clickSave = () => {
    infoChange(idNews, name, text).then(res => {
        if(res.status === 200) {
        alert(res.message)
        console.log(res)
      }
    })
   }

   const clickDelete = () => {
    infoDelete(idNews).then(res => {
        console.log(res)
        if(res.status === 200) {
          alert(res.message)
          window.location.replace('/admin/info')
        }
    })
   }


  return (
    <div className="container">
        <div className="admin-block">
            <Link className="info-link-back" onClick={() => navigate(-1)}>
                <i class="bi bi-arrow-left"></i>
            </Link>
            <div className="admin-block-title">
                <input
                    className="admin-block-title_input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="button-admin">
                    <button className="button-admin_delete" onClick={() => clickDelete()}><i class="bi bi-trash-fill"></i> Удалить</button>
                    <button className="admin-block-title_button" onClick={() => clickSave()}><i class="bi bi-check-lg"></i> Сохранить</button>
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

export default InfoChange;
