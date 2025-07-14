import './Search.css'

export default function Search() {
    return (
        <>
            <form>
                <div class = "searchContainer">
                    <div class = "searchItem"><label for="subject">검색 주제</label></div>
                    <div class = "searchItem"><input type="text" id = "subject" name="subject" /></div>
                    <div class = "searchItem"><label for="maxSubscribe">최대 구독자 수</label></div>
                    <div class = "searchItem"><input type="number" id = "maxSubscribe" name="maxSubscribe" /></div>
                    <div class = "searchItem"><label for="minViewCount">최소 조회수</label></div>
                    <div class = "searchItem"><input type="number" id = "minViewCount" name="minViewCount" /></div>
                    <div class = "searchItem"><label for="orderType">정렬 방식</label></div>
                    <div class = "searchItem"><input type="text" id = "orderType" name="orderType" /></div>
                    <div class = "searchItem"><label for="maxResults">표시 결과 최대 수</label></div>
                    <div class = "searchItem"><input type="text" id = "maxResults" name="maxResults" /></div>
                    <div class = "searchItem"><label for="publishDuration">업로드 기간</label></div>
                    <div class = "searchItem"><input type="text" id = "publishDuration" name="publishDuration" /></div>
                    <div class = "searchItem"><label for="videoTypeName">동영상 길이</label></div>
                    <div class = "searchItem">
                        <label class = "searchRadioLabel"><input type='radio' name='videoTypeName' value='all' checked/>전체</label>
                        <label class = "searchRadioLabel"><input type='radio' name='videoTypeName' value='short' />쇼츠</label>
                        <label class = "searchRadioLabel"><input type='radio' name='videoTypeName' value='long' />롱폼</label>
                    </div>
                    <div class = "searchItem"><input type="submit" value="검색하기" /></div>
                    <div class = "searchItem"><input type="button" value="다음 페이지" /></div>
                </div>
            </form>
        </>
    )
}