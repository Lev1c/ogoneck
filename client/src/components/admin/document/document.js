import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { docDelete, documentCreate, documentGet } from "../../../api/document";


function DocumentAdmin() {

  const [list, setList] = useState()

  const [name, setName] = useState('')
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState();

  const [req, setReq] = useState()
  const [textAlert, setTextAlert] = useState()
  const [textAlertTitle, setTextAlertTitle] = useState()
  const [icon, setIcon] = useState()
  const [statusAlert, setStatusAlert] = useState(false)

  const [editingId, setEditingId] = useState(null);
    
  useEffect(() => {
    documentGet().then((res) => setList(res))
  }, [])

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log('File selected:', selectedFile);
    } else {
      console.error('No file selected');
    }
    
  };


  
  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Файл не выбран');
      console.error('No file selected');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    // Проверка содержимого FormData
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    try {
      await documentCreate(name, formData); // Предполагается, что `documentCreate` принимает FormData
      setMessage('Файл успешно загружен');
      window.location.reload()
    } catch (error) {
      setMessage('Ошибка при загрузке файла');
      console.error(error);
    }
  };


  const clickDelete = (id, res) => {
    let result = window.confirm(`Удалить эту запись? ` + res);
    if (result) {
      docDelete(id).then(() => window.location.reload())
    } else {
      return
    }
  }

  
  
  const copyDoc = (link) => {
    setIcon(<i class="bi bi-check-lg"></i>)
    setTextAlertTitle('Успех')
    setTextAlert('Текст скопирован в буфер обмена!')
    setStatusAlert(true)
    setTimeout(() => {
      setStatusAlert(false)
    }, 3000)

    navigator.clipboard.writeText(link);
  }

  const closeAlert = () => {
    setStatusAlert(false)
  }
  
  const editDoc = (id) => {
    setEditingId(id)
  }

  const editDocClose = () => {
    setEditingId(null)
  }

  return (
    <div>
      {statusAlert ?
        <div className="window-admin-alert">
        <div className="window-admin-alert-title">
          <h3>{textAlertTitle}</h3>
          <button className="window-admin-alert-title_button" onClick={() => closeAlert()}>
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div className="window-admin-alert_text">
          <p>{textAlert}</p>
        </div>
      </div>
      :
      ""
      }
       <div className="admin-block">
        <div className="admin-title">
            <h2>Документы</h2>
          </div>
          <div className="admin-doc-upload">
            {file ?
              <div style={{display: 'flex', alignItems: 'center', gap: 15, width: '35%'}}>
                <input 
                  placeholder={file.name} 
                  className="admin-doc-upload_input" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="admin-doc-upload_button" onClick={handleFileUpload}><i class="bi bi-upload"></i></button>
              </div>
              : 
              <input type="file" accept=".pdf" onChange={handleFileChange} />
            }
            {message && <p style={{marginBottom: 0}}>{message}</p>}
          </div>
            <div className="info-block">
                {list && list.map(res => {
                    
                    return (
                        <div className="card-doc" to={`/admin/info/change/${res.sortOrder}`} key={res.id}>
                            <div className='card-doc-icon'>
                                <i class="bi bi-file-earmark-text"></i>
                                {editingId && editingId === res.id ?
                                  <input style={{padding: 0, fontSize: 14}}/> 
                                  :
                                  <h4 className="card-doc-icon_title">
                                    <abbr title={res.name ? res.name : res.fileName}>{res.name ? res.name : res.fileName}</abbr>
                                  </h4>
                                }
                            </div>
                            <div>
                            {editingId && editingId === res.id ?
                                <>
                                  <button className="card-doc__button-default" onClick={() => editDoc(res.id)}><i class="bi bi-check-square"></i></button>
                                  <button className="card-doc__button-delete" onClick={() => editDocClose()}><i class="bi bi-x-square"></i></button>
                                </>
                                :
                                <>
                                  <Link to={process.env.REACT_APP_URL_IMG + res.fileName} target="__blank" className="card-doc__button-default"><i class="bi bi-eye-fill"></i></Link>
                                  <button className="card-doc__button-default" onClick={() => copyDoc(process.env.REACT_APP_URL_IMG + res.fileName)}><i class="bi bi-share-fill"></i></button>
                                  <button className="card-doc__button-default" onClick={() => editDoc(res.id)}><i class="bi bi-pencil-square"></i></button>
                                  <button className="card-doc__button-delete" onClick={() => clickDelete(res.id, res.name ? res.name : res.fileName)}><i class="bi bi-x-octagon"></i></button>
                                </>
                            }
                        
                            </div>
                        </div>
                        
                    )
                })}
            </div>
      </div>
    </div>
  );
}

export default DocumentAdmin;
