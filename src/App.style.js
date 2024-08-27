import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  background-color: white;
  border-radius: 25px;
  max-width: 800px;
  padding: 35px;
`;

export const HeroImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 25px;
`;

export const RecipeTitle = styled.h1`
  font-family: "Young Serif", serif;
  color: hsl(24, 5%, 18%);
`;

export const StyledDesc = styled.p``;

export const PrepTimeContainer = styled.div`
  background-color: hsl(330, 100%, 98%);
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  padding: 40px;
`;

export const PrepTimeTitle = styled.p`
  color: hsl(332, 51%, 32%);
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 0;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding-left: 20px;
`;

export const StyledListItem = styled.li`
  padding-left: 16px;
  &::marker {
    color: hsl(14, 45%, 36%);
    font-size: 0.75rem;
  }
`;

export const PrepListItem = styled(StyledListItem)`
  &::marker {
    color: hsl(332, 51%, 32%);
  }
`;

export const SectionTitle = styled.h2`
  color: hsl(14, 45%, 36%);
  font-family: "Young Serif", serif;
`;

export const SectionContainer = styled.div`
  margin: 30px 0;
`;

export const InstructionsList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 20px;
`;

export const InstructionsListItem = styled(StyledListItem)`
  &::marker {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const DividerLine = styled.hr`
  border-top: 1px solid hsl(30, 18%, 87%);
`;

export const StyledTable = styled.table`
  width: 100%;
  text-align: left;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr``;

export const StyledTableHeader = styled.th`
  font-weight: 400;
  padding: 10px 0px 10px 30px;
  border-bottom: 1px solid hsl(30, 18%, 87%);
`;

export const StyledTableData = styled.td`
  color: hsl(14, 45%, 36%);
  font-weight: 800;
  padding: 10px 0px;
  border-bottom: 1px solid hsl(30, 18%, 87%);
`;

export const StyledTableHeaderLast = styled(StyledTableHeader)`
  border: none;
`;

export const StyledTableDataLast = styled(StyledTableData)`
  border: none;
`;
