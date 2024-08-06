// Importing styled-components for creating a styled button
import styled from 'styled-components';

// Styled button component definition
const StyledButton = styled.button`
  background: #0070f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005bb5;
  }
`;

// Exporting the styled button component
export default StyledButton;
