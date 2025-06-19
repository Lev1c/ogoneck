import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { feedbackCreate } from "../../../api/feedBack";

function FeedBack() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [idNews, setIdNews] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Пожалуйста, введите корректный email.";
    }

    if (!option) {
      newErrors.option = "Пожалуйста, выберите опцию.";
    }

    if (!query.trim()) {
      newErrors.query = "Пожалуйста, введите ваш запрос.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Fake API call
      feedbackCreate(name, email, phone, option, 0, query).then((res) => {
        alert("Заявление отправленно \nОтвет придет вам на почту");
      });
    } catch (error) {
      alert("Ошибка при отправке запроса");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div
        className="info"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <Link className="info-link-back" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-left"></i>
          </Link>
        </div>
        <div className="feedback-main">
          <div className="news-title">
            <h2>Обратная связь</h2>
          </div>
          <form className="feed-block-text" onSubmit={handleSubmit}>
            <div style={{ width: "100%" }}>
              <input
                style={{ width: "100%" }}
                className="feedback-input"
                placeholder="Имя Фамилия Отчество"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p
                  style={{ marginBottom: "5px", color: "red" }}
                  className="error-text"
                >
                  {errors.name}
                </p>
              )}
            </div>
            <div style={{ width: "100%" }}>
              <input
                style={{ width: "100%" }}
                className="feedback-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p
                  style={{ marginBottom: "5px", color: "red" }}
                  className="error-text"
                >
                  {errors.email}
                </p>
              )}
            </div>
            <div style={{ width: "100%" }}>
              <input
                style={{ width: "100%" }}
                className="feedback-input"
                placeholder="+7 (900) 100-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <select
                style={{ width: "100%" }}
                className="feedback-select"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="">Выберите тему обращения</option>
                <option value="1">Вопрос о приеме в центр</option>
                <option value="2">Благодарность</option>
                <option value="3">Жалоба</option>
                <option value="4">Предложение по улучшению</option>
                <option value="5">Техническая проблема на сайте</option>
                <option value="6">Вопрос к администрации</option>
                <option value="7">Вопрос по мероприятиям</option>
                <option value="8">Запрос на обратный звонок</option>
                <option value="9">Сообщение о нарушении</option>
                <option value="10">Другое</option>
              </select>
              {errors.option && (
                <p
                  style={{ marginBottom: "5px", color: "red" }}
                  className="error-text"
                >
                  {errors.option}
                </p>
              )}
            </div>
            <div>
              <textarea
                style={{ width: "100%" }}
                className="feedback-input"
                placeholder="Введите запрос"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {errors.query && (
                <p
                  style={{ marginBottom: "5px", color: "red" }}
                  className="error-text"
                >
                  {errors.query}
                </p>
              )}
            </div>
            <button
              className="feedback-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
