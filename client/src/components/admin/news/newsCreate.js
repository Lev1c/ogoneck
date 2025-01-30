import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { newsCreate } from "../../../api/news";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";

// Регистрация модуля
Quill.register("modules/resize", QuillResizeImage);

function NewsCreate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [dopText, setDopText] = useState("");
  const [base64, setBase64] = useState();
  const [visible, setVisible] = useState(false);

  const clickCreate = () => {
    newsCreate(name, content, dopText, base64, visible).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert(res.message);
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64(reader.result); // Устанавливаем новое изображение в Base64
    };
    reader.readAsDataURL(file);
  };

  const [content, setContent] = useState("");

  const Editor = {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }, { font: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        ["clean"],
      ],
      resize: {
        locale: {},
      },
    },
    formats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
    ],
  };

  return (
    <div className="container">
      <div className="admin-block">
        <div style={{ display: "flex" }}>
          <Link className="info-link-back" onClick={() => navigate(-1)}>
            <i class="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="admin-block-title">
          <div className="admin-block-title-block">
            <div>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }} // Скрываем стандартную кнопку
              />

              <label
                htmlFor="fileInput"
                style={{
                  padding: "10px 20px",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "5px",
                  textAlign: "center",
                  width: "150px",
                  height: "150px",
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: base64 ? "transparent" : "#f0f0f0",
                }}
              >
                {base64 ? (
                  <img
                    src={base64}
                    alt="Base64 preview"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ) : (
                  <p>Пусто</p>
                )}
              </label>
            </div>
            <div style={{ width: "50%" }}>
              <p>Название</p>
              <input
                className="admin-block-title_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
              />
              <p>Краткий рассказ</p>
              <input
                className="admin-block-title_input"
                value={dopText}
                onChange={(e) => setDopText(e.target.value)}
              />
            </div>
          </div>
          <div className="button-admin">
            <button
              className="admin-block-title_button"
              onClick={() => clickCreate()}
            >
              <i class="bi bi-check-lg"></i> Создать
            </button>
            <div className="admin-checkbox-block">
              Видимость
              <label class="checkbox-ios">
                <input
                  type="checkbox"
                  checked={visible}
                  onChange={(e) => setVisible(e.target.checked)}
                />
                <span class="checkbox-ios-switch"></span>
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", borderRadius: "50px" }}>
          <ReactQuill
            modules={Editor.modules}
            formats={Editor.formats}
            theme="snow"
            value={text}
            onChange={setText}
            style={{ height: "500px", borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCreate;
