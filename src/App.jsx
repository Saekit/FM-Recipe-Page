import "./App.css";
import {
  HeroImg,
  PrepTimeContainer,
  RecipeCardContainer,
  RecipeDesc,
  RecipeTitle,
  PrepTimeTitle,
  DividerLine,
  SectionTitle,
  SectionContainer,
  StyledList,
  PrepListItem,
  StyledListItem,
  InstructionsList,
  InstructionsListItem,
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
        <PrepTimeTitle>Preparation time</PrepTimeTitle>
        <StyledList>
          <PrepListItem>
            <b>Total:</b> Approximately 10 minutes
          </PrepListItem>
          <PrepListItem>
            <b>Preparation:</b> 5 minutes
          </PrepListItem>
          <PrepListItem>
            <b>Cooking:</b> 5 minutes
          </PrepListItem>
        </StyledList>
      </PrepTimeContainer>

      <SectionContainer>
        <SectionTitle>Ingredients</SectionTitle>
        <StyledList>
          <StyledListItem>2-3 large eggs</StyledListItem>
          <StyledListItem>Salt, to taste</StyledListItem>
          <StyledListItem>Pepper, to taste</StyledListItem>
          <StyledListItem>1 tablespoon of butter or oil</StyledListItem>
          <StyledListItem>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </StyledListItem>
        </StyledList>
      </SectionContainer>

      <DividerLine />

      <SectionContainer>
        <SectionTitle>Instructions</SectionTitle>
        <InstructionsList>
          <InstructionsListItem>
            <b>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of salt
            and pepper until they are well mixed. You can add a tablespoon of
            water or milk for a fluffier texture.
          </InstructionsListItem>
          <InstructionsListItem>
            <b>Heat the pan: </b>Place a non-stick frying pan over medium heat
            and add butter or oil.
          </InstructionsListItem>
          <InstructionsListItem>
            <b>Cook the omelette: </b>Once the butter is melted and bubbling,
            pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
            surface.
          </InstructionsListItem>
          <InstructionsListItem>
            <b>Add fillings (optional): </b>When the eggs begin to set at the
            edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </InstructionsListItem>
          <InstructionsListItem>
            <b> Fold and serve: </b>As the omelette continues to cook, carefully
            lift one edge and fold it over the fillings. Let it cook for another
            minute, then slide it onto a plate.
          </InstructionsListItem>
          <InstructionsListItem>
            <b>Enjoy: </b>Serve hot, with additional salt and pepper if needed.
          </InstructionsListItem>
        </InstructionsList>
      </SectionContainer>

      <DividerLine />

      <SectionContainer>
        <SectionTitle>Nutrition</SectionTitle>
      </SectionContainer>
    </RecipeCardContainer>
  );
}

export default App;
