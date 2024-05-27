interface Props {
    content: JSX.Element;
    removePadding?: boolean
  }
  
  function CenteredContentWider({ content, removePadding }: Props) {
    return (
      <div className={`flex justify-center ${removePadding ? '' : 'pb-36'}`}>
        <div className="w-[90%] md:w-5/6 lg:w-4/6 xl:w-[60%]">{content}</div>
      </div>
    );
  }
  
  export default CenteredContentWider;
  