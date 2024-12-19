import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { infoGet } from "../../../api/info";
import Skeleton from 'react-loading-skeleton';

function MainInfo() {

    const [list, setList] = useState()
    
    useEffect(() => {
        infoGet().then((res) => setList(res))
    }, [])

    console.log(list)

    return (
    <div className="container"> 
      <div className="info">
        <h2>Меню</h2>
            <div className="info-block">
                {list ? 
                list && list.map(res => {
                    return (
                        <Link className="card-info" to={`/info/${res.sortOrder}`}>
                            <div className='card-info-icon'>
                                <i class="bi bi-file-earmark-text"></i>
                            </div>
                            <h4>{res.name}</h4>
                        </Link>
                        
                    )
                })
                :
                <div>
                  <Skeleton containerClassName="news-block-for-card-skeleton"  highlightColor="#888" width={400} height={40} count={3} className="news-block-for-card"/>
                  <Skeleton containerClassName="news-block-for-card-skeleton"  highlightColor="#888" width={400} height={40} count={3} className="news-block-for-card"/>
                </div>
                }
            </div>
      </div>
    </div>
  );
}

export default MainInfo;
