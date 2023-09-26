const MyButton = ({text, type, onClick}) => {
    const btnType = ["positive", "negative"].includes(type) ? type : "default";
    return (
        // join을 이용하여 여러 클래스 지정
        <button className={["MyButton", `MyButton_${type}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

MyButton.defaultProps = {
    type: "default",
};
export default MyButton;