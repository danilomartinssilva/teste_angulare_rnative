import React, { forwardRef } from "react";
import { View, Text } from "react-native";
import {
  Container,
  ContainerTextInput,
  Tinput,

  TImage,
  Label,
  TError
} from "./styles";
function FormInput({ error, label, image, style, ...rest }, ref) {
  return (
    <Container style={style}>
      <ContainerTextInput>
        <Tinput {...rest} ref={ref} />

        {image && <TImage source={image} />}
      </ContainerTextInput>
      {error && <TError>{error}</TError>}
    </Container>
  );
}
export default forwardRef(FormInput);