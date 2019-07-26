import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [callback, isFetching]);

  const getBodyScrollTop = () => {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  };

  function handleScroll() {
    if (
      window.innerHeight + getBodyScrollTop() !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
