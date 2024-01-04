import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //get all items
  const getDate = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3001/${endpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      const jsonDate = await response.json();
      console.log(jsonDate);
      setData(jsonDate);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDate();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
