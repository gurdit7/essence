const Container = ({className,children}) => {
    className = 'px-[1.875rem] max-w-[1200px] mx-auto ' + (className || '');
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Container;
