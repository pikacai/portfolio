interface Props {
    content: JSX.Element;
    removePadding?: boolean
  }
  
  function CenteredContentWider({ content, removePadding }: Props) {
    return (
      <div className={`flex justify-center ${removePadding ? '' : 'pb-36'}`}>
        <div className="w-[90%] md:w-4/5 lg:w-4/6">{content}</div>
      </div>
    );
  }
  
  export default CenteredContentWider;
  