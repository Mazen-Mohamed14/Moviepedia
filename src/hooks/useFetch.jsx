import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useFetch = () => {
  const [movie, setMovie] = useState(null);
  const { moviename } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${moviename}&apikey=803c7771&`
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
    };
    fetchData();
  }, [moviename]);

  if (movie?.Error) {
    navigate("/404");
  }
  return movie;
};

export default useFetch;
