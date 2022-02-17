import { useEffect, useState } from "react";



const useTime = (timeout) => {

    
  const [isTimePassed, setIsTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimePassed(true);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  // useEffect(()=>{
  //   window.onload = ()=>{setIsTimePassed(true)}
  // },[])

  return isTimePassed;
};

export default useTime;
