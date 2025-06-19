import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { infoGetAdmin } from "../../../api/info";
import { feedbackGet } from "../../../api/feedBack";

function FeedBack() {
  const [list, setList] = useState();

  useEffect(() => {
    feedbackGet().then((res) => setList(res));
  }, []);
  console.log(list);
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
  const typeWork = {
    0: "Новое",
    1: "В работе",
    2: "Завершенно",
  };
  const typeWorkColor = {
    0: "#152a4f",
    1: "#25ed2f",
    2: "#4e4e4e",
  };
  return (
    <div>
      <div className="admin-block">
        <div className="admin-title">
          <h2>Заявления</h2>
        </div>
        <div className="info-block">
          {list &&
            list.map((res) => {
              return (
                <Link
                  style={{ width: "100%" }}
                  className="card-info"
                  to={`/admin/feedback/change/${res.id}`}
                >
                  <div className="card-info-icon">
                    <i class="bi bi-file-earmark-text"></i>
                  </div>
                  <h4 style={{ marginRight: "10px", fontWeight: 800 }}>
                    {typeFeedMap[res.typeFeed] || "Неизвестный тип"}
                  </h4>
                  <h4 style={{ marginRight: "10px" }}>{res.email}</h4>
                  <h4 style={{ marginRight: "10px" }}>{res.name}</h4>
                  <h4
                    style={{
                      marginRight: "10px",
                      background: typeWorkColor[res.typeWork],
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    {typeWork[res.typeWork] || "Неизвестный тип"}
                  </h4>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
