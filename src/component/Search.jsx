import { useState } from 'react';
import './Search.css'
import Result from './Result';

export default function Search() {
    const [ searchInfo, setSearchInfo ] = useState(null)
    const [ inputs, setInputs ] = useState({
        apiKey: "",
        subject: "",
        maxSubscribe: "150000",
        minViewCount: "500000",
        orderType: "viewCount",
        maxResults: "10",
        publishedAfter: "oneWeek",
        videoTypeName: "all",
        pageToken: "",
    });

    const { apiKey, subject, maxSubscribe, minViewCount, orderType, maxResults, publishedAfter, videoTypeName } = inputs

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const handleResult = () => {
        console.log("handleResult 실행됨.")
        console.log(inputs)
        setSearchInfo({
            ...inputs,
        })
    }

    return (
        <>
            <form>
                <div class = "searchContainer">
                    <div class = "searchItem"><label for="apiKey">API Key</label></div>
                    <div class = "searchItem"><input type="password" id = "apiKey" name="apiKey" value={apiKey} onChange={handleChange} required/></div>
                    <div class = "searchItem"><label for="subject">검색 주제</label></div>
                    <div class = "searchItem"><input type="text" id = "subject" name="subject" value={subject} onChange={handleChange} required/></div>
                    <div class = "searchItem"><label for="maxSubscribe">최대 구독자 수</label></div>
                    <div class = "searchItem"><input type="number" id = "maxSubscribe" name="maxSubscribe" value={maxSubscribe} onChange={handleChange} required/></div>
                    <div class = "searchItem"><label for="minViewCount">최소 조회수</label></div>
                    <div class = "searchItem"><input type="number" id = "minViewCount" name="minViewCount" value={minViewCount} onChange={handleChange} required/></div>
                    <div class = "searchItem"><label for="orderType">정렬 방식</label></div>
                    <div class = "searchItem">
                        <select name="orderType" onChange={handleChange} value={orderType}>
                            <option value="date">날짜</option>
                            <option value="rating">평점</option>
                            <option value="relevance">관련성</option>
                            <option value="title">제목</option>
                            <option value="videoCount">업로드 영상 수</option>
                            <option value="viewCount">조회수</option>
                        </select>
                    </div>
                    <div class = "searchItem"><label for="maxResults">표시 결과 최대 수</label></div>
                    <div class = "searchItem">
                        <select name="maxResults" onChange={handleChange} value={maxResults}>
                            <option value="10">10개</option>
                            <option value="30">30개</option>
                            <option value="50">50개</option>
                            <option value="100">100개</option>
                        </select>
                    </div>
                    <div class = "searchItem"><label for="publishedAfter">업로드일</label></div>
                    <div class = "searchItem">
                        <select name="publishedAfter" onChange={handleChange} value={publishedAfter}>
                            <option value="oneWeek">1주일</option>
                            <option value="1">1개월</option>
                            <option value="3">3개월</option>
                            <option value="6">6개월</option>
                            <option value="12">12개월</option>
                        </select>
                    </div>
                    <div class = "searchItem"><label>동영상 길이</label></div>
                    <div class = "searchItem">
                        <label class = "searchRadioLabel"><input type='radio' name='videoTypeName' value='all' onChange={handleChange} checked={videoTypeName == "all"}/>전체</label>
                        <label class = "searchRadioLabel"><input type='radio' name='videoTypeName' onChange={handleChange} value='short' checked={videoTypeName == "short"}/>쇼츠</label>
                        <label class = "searchRadioLabel"><input type='radio' name='videoTypeName' onChange={handleChange} value='long' checked={videoTypeName == "long"}/>롱폼</label>
                    </div>
                    <div class = "searchItem"><input type="button" value="검색하기" onClick={() => handleResult()}/></div>
                </div>
            </form>
            { searchInfo && <Result searchInfo = {searchInfo}></Result> }
        </>
    )
}