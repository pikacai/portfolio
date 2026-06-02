interface Props {
  content: any,
  className?: string,
  background?: string,
}

function Section({ content, className, background }: Props) {
  const finalClassName = ['flex', 'justify-center', 'items-center', 'w-full'];

  return (
    <div
      className={`${finalClassName.join(' ')} ${className ? className : ''}`}
      style={{ background: background ? background : undefined }}
    >
      <div className="w-[90%] md:w-5/6 lg:w-4/6 xl:w-[60%] py-36">{content}</div>
    </div>
  );
}

export default Section;
