const Phone = (props) => {
    return (
        <div className='googlePhoneContainer'>
            <span className='googlePhoneCircle' style={{ backgroundColor: `${props.color}` }}></span>
            <img className='googlePhone' src={props.image} alt='video or gif'></img>
        </div>
    );
}
 
export default Phone;