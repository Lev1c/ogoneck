import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { newsCreate} from "../../../api/news";

import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";

// Регистрация модуля
Quill.register("modules/resize", QuillResizeImage);


function NewsCreate() {

  const navigate = useNavigate()

   
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [dopText, setDopText] = useState("")
  

  const clickCreate = () => {
    newsCreate(name, text, content, base64String).then(res => {
      console.log(res)
      if(res.status === 200) {
            alert(res.message)
        }
    })
  }

  const [selectedFile, setSelectedFile] = useState(null); // Файл
  const [base64String, setBase64String] = useState(''); // Base64 строка

    // Функция обработки выбранного файла
  const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setBase64String(reader.result); // Результат в Base64
              setDopText('')
          };
          reader.readAsDataURL(file); // Конвертация в Base64
      }
  };

  const [content, setContent] = useState("");

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
                    <button className="admin-block-title_button" onClick={() => clickCreate()}><i class="bi bi-check-lg"></i> Создать</button>
                </div>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {selectedFile && (
                  <div style={{ marginTop: '20px' }}>
                      <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Preview"
                          style={{ width: '200px', height: 'auto', marginTop: '10px' }}
                      />
                  </div>
              )}
            </div>
            <div style={{ margin: "20px" }}>
              <ReactQuill
                modules={Editor.modules}
                formats={Editor.formats}
                theme='snow'
                value={content}
                onChange={setContent}
                style={{ height: "300px", marginBottom: "20px", borderRadius: 10 }}
              />
            </div>
        </div>
    </div>
  );
}

export default NewsCreate;
