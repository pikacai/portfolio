import Fade from "./Fade";

const FadeContainer = (props) => {
    return (
        <>
        { props.children.forEach( (child, i) => {
            <Fade children={child} key={'child' + i}/> 
        }) }
        </>
    );
}
 
export default FadeContainer;