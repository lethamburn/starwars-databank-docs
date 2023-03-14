import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledArticle = styled.article`
  width: 400px;
  height: 250px;
  display: flex;
  overflow: hidden;
  gap: 1rem;
  padding: 1rem;
  background-color: #282829;
  border-radius: 10px;

  img {
    height: 100%;
    width: 200px;
    object-fit: cover;
    object-position: top;
  }

  h2 {
    text-transform: uppercase;
    font-weight: bolder;
    color: #e69500;
  }

  h3 {
    font-size: 0.7rem;
    text-align: justify;
    overflow: hidden;
    position: relative;
    height: 88%;
  }

  h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.7rem;
    width: 100%;
    background: linear-gradient(90deg, #2828296f, #282829);
  }
`;

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://starwars-databank-server.vercel.app/api/v1/characters?page=39&limit=6"
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data);
        setLoaded(true);
      });
  });

  return (
    <StyledGallery>
      {loaded ? (
        characters.map((char) => (
          <StyledArticle>
            <img src={char.image} alt={char.name} />
            <div>
              <h2>{char.name}</h2>
              <h3>{char.description}</h3>
            </div>
          </StyledArticle>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </StyledGallery>
  );
};

export default Gallery;
