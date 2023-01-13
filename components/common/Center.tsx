interface CenterProps {
  children: React.ReactNode;
}

export default function Center({ children }: CenterProps) {
  return <div className="flex justify-center items-center">{children}</div>;
}
