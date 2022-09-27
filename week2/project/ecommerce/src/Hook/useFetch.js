import { useEffect, useState } from "react";



function useFetchData(URL, setFunction) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setFunction(data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  },[URL,setFunction]);
  return { loading, error };
}

export default useFetchData;