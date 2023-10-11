import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyHeader from "./../components/DiaryEditor";
import DiaryEditor from "./../components/DiaryEditor";


const New = () => {
    return (
        <div>
            <DiaryEditor></DiaryEditor>
        </div>
        
    );
};
export default New;