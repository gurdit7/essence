const Wrapper = ({children,className,onClick}) => {
  return (
    <>
    {onClick && (<div className={className} onClick={onClick}>
      {children}
    </div>)}
    
    {!onClick && (<div className={className}>
      {children}
    </div>)}
    
    </>
    
  );
}

export default Wrapper;
