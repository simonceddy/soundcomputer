function BottomRowContent({ children }) {
  return (
    <div className="h-[128px] w-full row justify-between pt-1 items-start">
      {children}
    </div>
  );
}

export default BottomRowContent;
