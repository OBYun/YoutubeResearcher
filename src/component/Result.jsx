import { useState, useEffect } from 'react'
import './Result.css'

export default function Result({searchInfo}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [targetDate, setTargetDate] = useState("");
    var initDate = "";
    var apiAddress = "";
      
    const publishedAfter = searchInfo.publishedAfter;
    
    const handleApiAddress = (pageToken) => {
      if(!pageToken) return;
      console.log(targetDate)
      apiAddress = `http://175.113.154.23:28081/api/youtube/search/by-views?apiKey=${searchInfo.apiKey}&minViewCount=${searchInfo.minViewCount}&maxResults=${searchInfo.maxResults}&publishedAfter=${targetDate}&videoTypeName=${searchInfo.videoTypeName}&orderType=${searchInfo.orderType}&query=${searchInfo.subject}&pageToken=${pageToken}`
      fetchApiAddress(apiAddress);
    }

    useEffect(() => {
      if(!publishedAfter) return; 
      const curDate = new Date()
      curDate.setHours(0, 0, 0, 0)
  
      // 1주일 전의 날짜 계산 후 반환
      if(publishedAfter === "oneWeek") {
        curDate.setDate(curDate.getDate() - 7)
        console.log("1주일")
      }
  
      // 몇 개월 전의 날짜 계산 후 반환
      else {
        curDate.setMonth(curDate.getMonth() - parseInt(publishedAfter))
        console.log(publishedAfter + "개월")
      }

      // apiAddress 형태 예시
      // http://175.113.154.23:28081/api/youtube/search/by-views?minViewCount=100000&
      // maxResults=10&publishedAfter=2025-05-01T00:00:00Z&videoTypeName=all&orderType=viewCount
      // &query=더본코리아,백종원

      setTargetDate(curDate.toISOString());
      initDate = curDate.toISOString();
      apiAddress = `http://175.113.154.23:28081/api/youtube/search/by-views?apiKey=${searchInfo.apiKey}&minViewCount=${searchInfo.minViewCount}&maxResults=${searchInfo.maxResults}&publishedAfter=${initDate}&videoTypeName=${searchInfo.videoTypeName}&orderType=${searchInfo.orderType}&query=${searchInfo.subject}&pageToken=`

      fetchApiAddress(apiAddress);

    }, [searchInfo]);


    const fetchApiAddress = apiAddress => {
      fetch(apiAddress)
        .then(res => res.json())
        .then(setData)
        .catch(setError);
    }

    if(data) {
        return (
          <>
            <h1>영상 목록</h1>
            {data.prevPageToken && <input type="button" value = "이전 페이지" onClick={() => handleApiAddress(data.prevPageToken)}></input>}
            {data.nextPageToken && <input type="button" value = "다음 페이지" onClick={() => handleApiAddress(data.nextPageToken)}></input>}
            <table id = "resultTable">
              <thead>
                <tr>
                  <th className="videoNum"></th>
                  <th className="upload">업로드일</th>
                  <th className="viewCount">조회수</th>
                  <th className="title">제목</th>
                  <th className="channelName">채널명</th>
                  <th className="subCount">썸네일 원본</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.videos.map((v, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="videoNum">{idx + 1}</td>
                        <td className="upload">{v.publishedAt.slice(0,10)}</td>
                        <td className="viewCount">{v.viewCount.toLocaleString()}</td>
                        <td className="title"><a href = {"https://www.youtube.com/watch?v=" + v.videoId} target='_blank'>{v.title}</a></td>
                        <td className="channelName">{v.channelTitle}</td>
                        <td className="subCount"><a href = {v.thumbnailUrl} target='_blank'>이미지 확인</a></td>
                      </tr>  
                    )
                  })
                }
              </tbody>
            </table>
          </>
        )
    }

    return (
      <>
        <h1>검색해보세요.</h1>
      </>
    )
}