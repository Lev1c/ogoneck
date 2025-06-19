import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { infoChange, infoDelete, infoGetId } from "../../../api/info";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";
import { feedbackChange, feedbackGetId } from "../../../api/feedBack";

// Регистрация модуля
Quill.register("modules/resize", QuillResizeImage);

function FeedBackChange() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [idNews, setIdNews] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("");
  const [typeWork, setTypeWork] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    feedbackGetId(id).then((res) => {
      setIdNews(res.id);
      setName(res.name);
      setEmail(res.email);
      setPhone(res.phone);
      setQuery(res.query);
      setOption(res.option);
      setTypeWork(res.typeWork);
    });
  }, [id]);

  const clickSave = () => {
    feedbackChange(idNews, 1).then((res) => {
      if (res.status === 200) {
        alert("успешно");
        console.log(res);
        window.location.reload();
      }
    });
  };
  const clickSaveTwo = () => {
    feedbackChange(idNews, 2).then((res) => {
      if (res.status === 200) {
        alert(res.message);
        console.log(res);
      }
      window.location.reload();
    });
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

  const typeFeedMap = {
    1: "Вопрос о приеме в центр",
    2: "Благодарность",
    3: "Жалоба",
    4: "Предложение по улучшению",
    5: "Техническая проблема на сайте",
    6: "Вопрос к администрации",
    7: "Вопрос по мероприятиям",
    8: "Запрос на обратный звонок",
    9: "Сообщение о нарушении",
    10: "Другое",
  };
  const typeWorkMap = {
    0: "Новое",
    1: "В работе",
    2: "Завершенно",
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
          <div className="admin-block-title-block" style={{ flexWrap: "wrap" }}>
            <div style={{ width: "30%" }}>
              <p>фио</p>
              <input
                className="admin-block-title_input"
                value={name}
                disabled
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
              />
            </div>
            <div style={{ width: "30%" }}>
              <p>email</p>
              <input
                className="admin-block-title_input"
                value={email}
                disabled
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
              />
            </div>
            <div style={{ width: "30%" }}>
              <p>phone</p>
              <input
                className="admin-block-title_input"
                value={phone}
                disabled
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
              />
            </div>
            <div style={{ width: "30%" }}>
              <p>Тема</p>
              <input
                className="admin-block-title_input"
                value={typeFeedMap[option] || "Неизвестный тип"}
                disabled
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
              />
            </div>
            <div style={{ width: "30%" }}>
              <p>Статус</p>
              <input
                className="admin-block-title_input"
                value={typeWorkMap[typeWork]}
                disabled
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
              />
            </div>
          </div>
          <div>
            <div className="button-admin">
              {typeWork === 0 && (
                <button
                  className="admin-block-title_button"
                  onClick={() => clickSave()}
                  style={{ width: "100%" }}
                >
                  <i class="bi bi-check-lg"></i> В работе
                </button>
              )}
              {typeWork === 1 && (
                <button
                  className="admin-block-title_button"
                  onClick={() => clickSaveTwo()}
                  style={{ width: "100%" }}
                >
                  <i class="bi bi-check-lg"></i> Завершить
                </button>
              )}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", borderRadius: "30px" }}>
          <ReactQuill
            modules={Editor.modules}
            formats={Editor.formats}
            theme="snow"
            value={text}
            onChange={setText}
            style={{ height: "300px", borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default FeedBackChange;
