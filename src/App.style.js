import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  background-color: white;
  border-radius: 25px;
  max-width: 800px;
  padding: 25px;
`;

export const HeroImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
`;

export const RecipeTitle = styled.h1`
  font-family: "Young Serif", serif;
`;

export const RecipeDesc = styled.p``;

export const PrepTimeContainer = styled.div`
  background-color: hsl(330, 100%, 98%);
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  padding: 25px;
`;

export const PrepTimeTitle = styled.p`
  color: hsl(332, 51%, 32%);
  font-weight: 500;
`;
