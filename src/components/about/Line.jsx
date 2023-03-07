const Line = (props) => {
    return (
        <div className='aboutLineContainer'>
            <span className='aboutEmoji'>{props.emoji}</span>
            {props.text}
        </div>
    );
}
 
export default Line;