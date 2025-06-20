import { useEffect, useState } from "react";
import { newsGetAdmin } from "../../../api/news";
import { Link } from "react-router-dom";
import moment from "moment";

function NewsAdmin() {
  const [newsList, setNewsList] = useState();

  useEffect(() => {
    newsGetAdmin().then((res) => setNewsList(res));
  }, []);

  return (
    <div>
      <div className="admin-block">
        <div className="admin-title">
          <h2>Новости</h2>
          <div className="button-admin">
            <Link to={"/admin/news/create"} className="button-admin-link">
              <button className="button-admin_create">
                <i class="bi bi-plus-lg"></i> Создать
              </button>
            </Link>
          </div>
        </div>
        <div className="news-block-for-card">
          {newsList &&
            newsList.map((res) => {
              let time = moment(res && res.createdAt).format("DD.MM.YYYY");
              return (
                <Link
                  className="news-block-card"
                  to={`/admin/news/change/${res.id}`}
                >
                  <div className="news-block-card-block-img">
                    <img className="news-block-card-img" src={res.img} alt="" />
                  </div>
                  <div className="news-block-card-link-arrow">
                    <div className="news-block-card-block-text">
                      <p className="news-block-card-title">{res.name}</p>
                      <p className="news-block-card-text">{res.dop_text}</p>
                      <span className="news-block-card-date">{time}</span>
                    </div>

                    <div className="news-block-card-arrow">
                      <i class="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default NewsAdmin;
