import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { newsGetId } from "../../../api/news";
import Skeleton from 'react-loading-skeleton';
import moment from 'moment'

function News() {

   const { id } = useParams()
   const navigate = useNavigate()

   const [newsRes, setNewsRes] = useState()

   useEffect(() => { 
      newsGetId(id).then((res) => setNewsRes(res))
   }, [id])

   console.log(newsRes)

   let time = moment(newsRes && newsRes.createdAt).format('DD.MM.YYYY')

  return (
    <div className="container">
        <div className="info">
          
          <div style={{display: 'flex'}}>
            <Link className="info-link-back" onClick={() => navigate(-1)}>
                <i class="bi bi-arrow-left"></i>
            </Link>
          </div>
            <div className="news-title">
              <h2>
                {newsRes ? 
                  newsRes && newsRes.name 
                  : 
                  <Skeleton highlightColor="#888" width={600} height={30} count={1}/>
                }
              </h2>
              <p>
                {newsRes ? 
                newsRes &&
                  ( 
                    <p> 
                      {time} 
                    </p> 
                    )
                  : 
                    <Skeleton highlightColor="#888" width={600} height={30} count={1}/>
                  }
                </p>
            </div>
            <div className="news-block-text">
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
    </div>
  );
}

export default News;
