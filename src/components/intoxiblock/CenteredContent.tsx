interface Props {
  content: JSX.Element;
  removePadding?: boolean
}

function CenteredContent({ content, removePadding }: Props) {
  return (
    <div className={`flex justify-center text-[#282D46] ${removePadding ? '' : 'pb-36'}`}>
      <div className="w-4/5 md:w-4/6 lg:w-1/2">{content}</div>
    </div>
  );
}

export default CenteredContent;
