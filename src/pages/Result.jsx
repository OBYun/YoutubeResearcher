import { useState, useEffect } from 'react'
import './Result.css'

export default function Result() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('http://175.113.154.23:28081/api/youtube/search/by-views?minViewCount=100000&maxResults=10&publishedAfter=2025-05-01T00:00:00Z&videoTypeName=all&orderType=viewCount&query=더본코리아,백종원')
        .then(res => res.json())
        .then(setData)
        .catch(setError);
    }, []);

    if(data) {

        return (
          <>
            <h1>영상 목록</h1>
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
                        <td className="title"><a href = {"https://www.youtube.com/watch?v=" + v.videoId}>{v.title}</a></td>
                        <td className="channelName">{v.channelTitle}</td>
                        <td className="subCount"><a href = {v.thumbnailUrl}>이미지 확인</a>&nbsp;<a href = {v.thumbnailUrl} download = "image.jpg">다운로드</a></td>
                      </tr>  
                    )
                  })
                }
              </tbody>
            </table>
          </>
        )
    }
}