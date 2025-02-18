import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { newsChange, newsDelete, newsGetId } from "../../../api/news";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";

// Регистрация модуля
Quill.register("modules/resize", QuillResizeImage);

function NewsChange() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [idNews, setIdNews] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [dopText, setDopText] = useState("");
  const [visible, setVisible] = useState();

  useEffect(() => {
    newsGetId(id).then((res) => {
      setIdNews(res.id);
      setName(res.name);
      setText(res.text);
      setBase64(res.img);
      setDopText(res.dop_text);
      setVisible(res.visible);
    });
    // eslint-disable-next-line
  }, []);

  const clickSave = () => {
    newsChange(idNews, name, text, dopText, base64, visible).then((res) => {
      if (res.status === 200) {
        alert(res.message);
        console.log(res);
        window.location.replace("/admin/news");
      }
    });
  };

  const clickDelete = () => {
    newsDelete(idNews).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert(res.message);
        window.location.replace("/admin/news");
      }
    });
  };

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
  };

  console.log(visible);

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
              className="button-admin_delete"
              onClick={() => clickDelete()}
            >
              <i class="bi bi-trash-fill"></i> Удалить
            </button>
            <button
              className="admin-block-title_button"
              onClick={() => clickSave()}
            >
              <i class="bi bi-check-lg"></i> Сохранить
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

export default NewsChange;
