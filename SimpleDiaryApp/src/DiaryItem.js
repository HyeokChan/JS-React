const DiaryItem = ({id, author, content, emotion, created_date}) => {
    return (
        <div className="DiaryItem">
            {/* 각 row별 고유 it를 설정해야함
            마땅한 값이 없는 경우 (it, idx)로 받아서 설정 */}
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}
                </span>
                <br></br>
                <span className="date">
                    {new Date(created_date).toLocaleDateString()}
                </span>
            </div>
            <div className="content">{content}</div>
        </div>
    )
}

export default DiaryItem;