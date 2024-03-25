import { useEffect } from "react";

const useFetch = (event, searchTerm, setMovie) => {
  event.preventDefault();

  // if (!searchTerm.trim()) return;
  console.log("hook works");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=803c7771&`
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return <div>useFetch</div>;
};

export default useFetch;
