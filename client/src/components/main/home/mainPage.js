import About from "./about";

function MainPage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="home-mainPage">
        <div className="home-mainPage-text">
          <h1>
            Государственное казенное учреждение Самарской области
            <br /> «Социально – реабилитационный центр для несовершеннолетних»{" "}
            <br />
            «Огонёк»
          </h1>
          <button
            className="home-mainPage-button"
            onClick={() => scrollToSection("section1")}
          >
            <i className="bi bi-arrow-down"></i>
          </button>
        </div>
      </div>
      <About id="section1" />
    </div>
  );
}

export default MainPage;
