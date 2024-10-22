

function About({id}) {
  return (
    <div className="container" id={id}>
        <div className="home-block">
            <h2 className="title-text">Учреждение</h2>
            <div className="about-block">
                <div className="about-block-one">
                    <h2>Государственное казенное учреждение Самарской области «Социальнореабилитационный центр для несовершеннолетних «Огонёк»</h2>
                    <p>Стационарное учреждение социального обслуживания, предоставляющее бесплатные социальные услуги несовершеннолетним при временном (на срок, определенный индивидуальной программой) круглосуточном проживании. </p>
                    <button className="about-block-one-button">Узнать больше</button>
                </div>
                <div className="about-block-two">
                    <ul className="about-block-two-ul">
                        <h4>Оказывает услуги: </h4>
                        <li><i class="bi bi-arrow-right-circle-fill"></i>социально-бытовые  </li>
                        <li><i class="bi bi-arrow-right-circle-fill"></i>социально-педагогические  </li>
                        <li><i class="bi bi-arrow-right-circle-fill"></i>социально-психологические  </li>
                        <li><i class="bi bi-arrow-right-circle-fill"></i>социально-правовые  </li>
                        <li><i class="bi bi-arrow-right-circle-fill"></i>социально-трудовые  </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
