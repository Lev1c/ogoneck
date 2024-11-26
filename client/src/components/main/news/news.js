import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { newsGetId } from "../../../api/news";



function News() {

   const { id } = useParams()
   const navigate = useNavigate()

   const [newsRes, setNewsRes] = useState()

   useEffect(() => { 
      newsGetId(id).then((res) => setNewsRes(res))
   }, [id])

   console.log(newsRes)

  return (
    <div className="container">
        <div className="info">
            <Link className="info-link-back" onClick={() => navigate(-1)}>
                <i class="bi bi-arrow-left"></i>
            </Link>
            <h2>{newsRes ? newsRes && newsRes.name : 'пусто'}</h2>
            {newsRes && newsRes.text ? parse(newsRes.text) : "пусто"}
        </div>
    </div>
  );
}

export default News;
