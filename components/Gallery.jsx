import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledArticle = styled.article`
  width: 400px;
  height: 250px;
  display: flex;
  overflow: hidden;
  background-color: #1d1e1f;
  border-radius: 8px;

  img {
    height: 100%;
    width: 250px;
    object-fit: cover;
    object-position: top;
  }

  div {
    padding: 0.5rem 0;
  }

  div > img {
    width: 40px;
    height: auto;
    padding-left: 4px;
  }

  h2 {
    text-transform: uppercase;
    font-weight: bolder;
    white-space: nowrap;
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }

  h3 {
    font-size: 0.5rem;
    text-align: justify;
    overflow: hidden;
    position: relative;
    height: 80%;
    padding: 0 0.5rem;
  }

  h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1rem;
    width: 100%;
    background: linear-gradient(180deg, #1d1e1f6f, #1d1e1f);
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
              <img src="/images/light.png" alt="Light icon" />
              <h2>{char.name}</h2>
              <h3>{char.description}</h3>
            </div>
          </StyledArticle>
        ))
      ) : (
        <Spinner />
      )}
    </StyledGallery>
  );
};

export default Gallery;
