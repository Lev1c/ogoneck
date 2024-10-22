import { useState } from "react";
import { Link } from "react-router-dom";

function Info() {

   const [text, setText] = useState('Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.')

  return (
    <div className="container">
        <div className="info">
            <h2>Документы</h2>
            <div className="info-block-text">
                <p>{text}</p>
                <ul className="info-block-list">
                    <li>
                       <i>—</i> <Link>Документ 1</Link>
                    </li>
                    <li>
                       <i>—</i> <Link>Документ 2</Link>
                    </li>
                    <li>
                       <i>—</i> <Link>Документ 3</Link>
                    </li>
                    <li>
                       <i>—</i> <Link>Документ 4</Link>
                    </li>
                    <li>
                       <i>—</i> <Link>Документ 5</Link>
                    </li>
                </ul>
                <p>{text}{text}{text}</p>
                <p>{text}{text}{text}</p>
            </div>
        </div>
    </div>
  );
}

export default Info;
