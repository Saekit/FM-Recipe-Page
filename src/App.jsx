import "./App.css";
import {
  HeroImg,
  PrepTimeContainer,
  RecipeCardContainer,
  RecipeDesc,
  RecipeTitle,
  PrepTimeTitle,
} from "./App.style";
import omeletteImg from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <RecipeCardContainer>
      <HeroImg src={omeletteImg} alt="Recipe Image" />
      <RecipeTitle>Simple Omelette Recipe</RecipeTitle>
      <RecipeDesc>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </RecipeDesc>
      <PrepTimeContainer>
        <ul>
          <PrepTimeTitle>Preparation time</PrepTimeTitle>
          <li>
            <b>Total:</b> Approximately 10 minutes
          </li>
          <li>
            <b>Preparation:</b> 5 minutes
          </li>
          <li>
            <b>Cooking:</b> 5 minutes
          </li>
        </ul>
      </PrepTimeContainer>
    </RecipeCardContainer>
  );
}

export default App;
