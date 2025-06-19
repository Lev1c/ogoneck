import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { docDelete, documentCreate, documentGet } from "../../../api/document";

function DocumentAdmin() {
  const [list, setList] = useState();

  useEffect(() => {
    documentGet().then((res) => setList(res));
  }, []);

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("File selected:", selectedFile);
    } else {
      console.error("No file selected");
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMessage("Файл не выбран");
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // Проверка содержимого FormData
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      await documentCreate(name, formData); // Предполагается, что `documentCreate` принимает FormData
      setMessage("Файл успешно загружен");
    } catch (error) {
      setMessage("Ошибка при загрузке файла");
      console.error(error);
    }
  };

  const clickDelete = (id, res) => {
    let result = window.confirm(`Удалить эту запись? ` + res);
    if (result) {
      docDelete(id).then(() => window.location.reload());
    } else {
      return;
    }
  };

  const copyDoc = (link) => {
    setIcon(<i class="bi bi-check-lg"></i>);
    setTextAlertTitle("Успех");
    setTextAlert("Текст скопирован в буфер обмена!");
    setStatusAlert(true);
    setTimeout(() => {
      setStatusAlert(false);
    }, 3000);

    navigator.clipboard.writeText(link);
  };

  const closeAlert = () => {
    setStatusAlert(false);
  };

  const editDoc = (id) => {
    setEditingId(id);
  };

  const editDocClose = () => {
    setEditingId(null);
  };

  return (
    <div>
      <div className="admin-block">
        <div className="admin-title">
          <h2>Документы</h2>
          <div className="button-admin">
            <Link to={"/admin/news/create"} className="button-admin-link">
              <button className="button-admin_create">
                <i class="bi bi-plus-lg"></i> Создать
              </button>
            </Link>
            <button className="button-admin_delete">
              <i class="bi bi-trash-fill"></i> Удалить
            </button>
          </div>
        </div>
        <div>
          <h2>Загрузить PDF</h2>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Загрузить</button>
          {message && <p>{message}</p>}
        </div>
        <div className="info-block">
          {list &&
            list.map((res) => {
              return (
                <div
                  className="card-doc"
                  to={`/admin/info/change/${res.sortOrder}`}
                >
                  <div className="card-doc-icon">
                    <i class="bi bi-file-earmark-text"></i>
                    <h4>{res.name}</h4>
                  </div>
                  <div>
                    <button className="card-doc__button-delete">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button className="card-doc__button-delete">
                      <i class="bi bi-x-octagon"></i>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default DocumentAdmin;
