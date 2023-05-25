import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - TOY CARS LTD`;
  }, [title]);
};
export default useTitle;
