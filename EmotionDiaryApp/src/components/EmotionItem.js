import React from "react";
// setState가 아닌 onClick 같은 함수를 전달 받는 경우 항상 새 함수를 전달받아서 리렌더링 됨, useCallback 사용 필요
const EmotionItem = ({emotion_id, emotion_img, emotion_descript, onClick, isSelected}) => {
    return (
        <div 
            onClick={()=>onClick(emotion_id)}
            className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`].join(" ")}>
            <img src={emotion_img}/>
            <span>{emotion_descript}</span>
        </div>
    );
};
export default React.memo(EmotionItem);