import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { newsChange, newsDelete, newsGetId } from "../../../api/news";
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";

// Регистрация модуля
Quill.register("modules/resize", QuillResizeImage);

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
        setDopText(res.dop_text)
    })
   }, [id])

   console.log(newsRes)

   const clickSave = () => {
    newsChange(idNews, name, content, dopText, base64).then(res => {
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

    const [content, setContent] = useState(""); // Данные редактора

  // Конфигурация модулей Quill

  const Editor = {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"], // Форматирование текста
          ["image", "blockquote", "code-block"], // Вставка изображений, цитат, блоков кода
          [{ list: "ordered" }, { list: "bullet" }], // Списки
          ["clean"], // Очистка форматирования
      ],
        resize: {
          locale: {},
        },
      },
      formats: [
        'image',
        'header', 
    'bold', 'italic', 'underline', 'strike', 
    'image', 'blockquote', 'code-block', 
    'list', 'bullet'
      ],
    }
    console.log(content)
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
            <div style={{ margin: "20px" }}>
              <ReactQuill
                modules={Editor.modules}
                formats={Editor.formats}
                theme='snow'
                value={content}
                onChange={setText}
                style={{ height: "300px", marginBottom: "20px", borderRadius: 10 }}
              />
            </div>
        </div>
    </div>
  );
}

export default NewsChange;
