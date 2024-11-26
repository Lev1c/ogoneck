import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { newsCreate} from "../../../api/news";



function NewsCreate() {

  const navigate = useNavigate()

   
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [dopText, setDopText] = useState("")
  

  const clickCreate = () => {
    newsCreate(name, text, dopText, base64String).then(res => {
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

export default NewsCreate;
