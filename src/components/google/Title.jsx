const Title = (props) => {
    return (
        <h3 className='googleTitleContainer'>
            <span className='googleHeadingCircle' style={{ backgroundColor: props.color }}></span>
            <div className="sectionHeading googleHeadingTitle">{props.title}</div>
        </h3>
    );
}

export default Title;