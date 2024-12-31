import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { infoChange, infoDelete, infoGetId } from "../../../api/info";
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";

// Регистрация модуля
Quill.register("modules/resize", QuillResizeImage);

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

   const Editor = {
    modules: {
      toolbar: [
        [{ 'header': [1, 2, false] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
      resize: {
        locale: {},
      },
    },
    
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
                    <div className="admin-block-title-block">
                      <div style={{width: "50%"}}>
                        <p>Название</p>
                        <input
                            className="admin-block-title_input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{marginBottom: 15}}
                        />
                      </div>
                    </div>
                    <div className="button-admin">
                        <button className="button-admin_delete" onClick={() => clickDelete()}><i class="bi bi-trash-fill"></i> Удалить</button>
                        <button className="admin-block-title_button" onClick={() => clickSave()}><i class="bi bi-check-lg"></i> Сохранить</button>
                    </div>
                </div>
                <div style={{ marginTop: "20px", borderRadius: "50px" }}>
                  <ReactQuill
                    modules={Editor.modules}
                    formats={Editor.formats}
                    theme='snow'
                    value={text}
                    onChange={setText}
                    style={{ height: "500px", borderRadius: "20px" }}
                  />
                </div>
            </div>
        </div>
  );
}

export default InfoChange;
