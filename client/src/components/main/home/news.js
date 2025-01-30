import { Link } from "react-router-dom";
import photoTest from "../../../img/backHome.png";
import { useEffect, useState } from "react";
import { newsGet } from "../../../api/news";
import moment from "moment";

function News() {
  const [newsList, setNewsList] = useState();

  useEffect(() => {
    newsGet().then((res) => setNewsList(res));
  }, []);
  return (
    <div className="container">
      <div className="home-block welcome-block">
        <h2 className="title-text">Новости</h2>
        <div className="news-block-for-card">
          {newsList ? (
            newsList &&
            newsList.slice(0, 3).map((res) => {
              let time = moment(res && res.createdAt).format("DD.MM.YYYY");
              return (
                <Link
                  className="news-block-card news-block-card-welcome"
                  to={`/news/${res.id}`}
                >
                  <div className="news-block-card-block-img home-block-card-block-img">
                    <img className="news-block-card-img" src={res.img} alt="" />
                  </div>
                  <div className="news-block-card-link-arrow">
                    <div className="news-block-card-block-text">
                      <p
                        className="news-block-card-title"
                        style={{ fontSize: 20 }}
                      >
                        {res.name}
                      </p>
                      <p
                        className="news-block-card-text"
                        style={{ maxWidth: 600 }}
                      >
                        {res.dop_text}
                      </p>
                      <span className="news-block-card-date">{time}</span>
                    </div>

                    <div className="news-block-card-arrow">
                      <i class="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div>Новостей нет</div>
          )}
        </div>
        <div>
          <Link className="link-more" to={"/news"}>
            Читать больше
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
