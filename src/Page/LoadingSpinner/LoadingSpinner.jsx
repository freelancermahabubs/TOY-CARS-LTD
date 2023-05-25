const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)]">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default LoadingSpinner;
