import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { infoCreate } from "../../../api/info";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import QuillResizeImage from "quill-resize-image";

Quill.register("modules/resize", QuillResizeImage);

function InfoCreate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [visible, setVisible] = useState("");

  const clickCreate = () => {
    infoCreate(name, text).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert(res.message);
      }
    });
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
            <div style={{ width: "50%" }}>
              <p>Название</p>
              <input
                className="admin-block-title_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 15 }}
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

export default InfoCreate;
