import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 48px;
  border-radius: 8px;
  border-width: ${props => (props.type === "light" ? 0.5 : 0)}px;
  background-color: ${props =>
    props.type === "light" ? '#FFF' : "#FA6678"};
  border-color: ${props =>
    props.type === "light" ? `#9999` : "#FA6678"};
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  
  font-size:15px;
  font-weight: ${props => (props.type === "light" ? `500` : "bold")};
  color: ${props => (props.type === "light" ? `#9999` : 'white')};
  text-transform: uppercase;
  `