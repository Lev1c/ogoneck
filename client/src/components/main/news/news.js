import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { newsGetId } from "../../../api/news";
import Skeleton from 'react-loading-skeleton';


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
            <h2>
              {newsRes ? 
                newsRes && newsRes.name 
                : 
                <Skeleton highlightColor="#888" width={600} height={30} count={1}/>
              }
            </h2>
            {newsRes && newsRes.text ? 
              parse(newsRes.text) 
              : 
              <div>
                <Skeleton style={{marginTop: 30}} highlightColor="#888" width={800} height={50} count={1}/>
                <Skeleton style={{marginTop: 30}} highlightColor="#888" width={800} height={50} count={1}/>
                <Skeleton style={{marginTop: 30}} highlightColor="#888" width={800} height={50} count={1}/>
              </div>
            }
        </div>
    </div>
  );
}

export default News;
