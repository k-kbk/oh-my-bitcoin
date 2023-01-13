interface HeadingProps {
  as: string;
  content: string;
}

export default function Heading({ as, content }: HeadingProps) {
  switch (as) {
    case 'h1':
      return (
        <>
          <h1 className="font-semibold text-3xl my-10">{content}</h1>
        </>
      );
    case 'h2':
      return (
        <>
          <h2 className="text-2xl">{content}</h2>
        </>
      );
    case 'h3':
      return (
        <>
          <h3 className="text-xl">{content}</h3>
        </>
      );
    case 'h4':
      return (
        <>
          <h4>{content}</h4> h
        </>
      );
    default:
      return <></>;
  }
}
