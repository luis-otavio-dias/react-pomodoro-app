type GenericHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtmlProps) {
  return (
    <div className="flex flex-col justify-center gap-4 text-justify">
      {children}
    </div>
  );
}
