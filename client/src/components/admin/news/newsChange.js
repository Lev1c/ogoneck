import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { newsChange, newsDelete, newsGetId } from "../../../api/news";



function NewsChange() {

   const { id } = useParams()
   const navigate = useNavigate()

   const [newsRes, setNewsRes] = useState()
   
   const [idNews, setIdNews] = useState("")
   const [name, setName] = useState("")
   const [text, setText] = useState("")
   const [dopText, setDopText] = useState("")

   useEffect(() => { 
      newsGetId(id).then((res) => {
        setIdNews(res.id)
        setName(res.name)
        setText(res.text)
        setBase64(res.img)
        setNewsRes(res)
    })
   }, [id])

   console.log(newsRes)

   const clickSave = () => {
    newsChange(idNews, name, text, dopText, base64).then(res => {
        if(res.status === 200) {
        alert(res.message)
        console.log(res)
        window.location.replace('/admin/news')
      }
    })
   }

   const clickDelete = () => {
    newsDelete(idNews).then(res => {
        console.log(res)
        if(res.status === 200) {
          alert(res.message)
          window.location.replace('/admin/news')
        }
    })
   }

   const [base64, setBase64] = useState();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setBase64(reader.result); // Устанавливаем новое изображение в Base64
        };
        reader.readAsDataURL(file);
    };

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
                {base64 && <img src={base64} alt="Base64 preview" style={{ maxWidth: '10%', height: 'auto' }} />}
                <input type="file" onChange={handleFileChange} />
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

export default NewsChange;
