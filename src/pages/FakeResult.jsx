function FakeResult() {
    return <>
      <table id="resultTable">
        <thead>
          <tr>
            <th className="videoNum"></th>
            <th className="upload">업로드일</th>
            <th className="viewCount">조회수</th>
            <th className="title">제목</th>
            <th className="channelName">채널명</th>
            <th className="subCount">구독자수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2020.01.01</td>
            <td>320,000</td>
            <td>충격</td>
            <td>이슈</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2020.01.01</td>
            <td>320,000</td>
            <td>충격</td>
            <td>이슈</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </table>
    </>
}

export default FakeResult