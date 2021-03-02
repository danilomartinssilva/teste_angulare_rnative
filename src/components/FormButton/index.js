import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, Title } from "./styles";

export default function FormButtonComponent({
  style,
  size,
  children,
  type,
  loading = false,
  ...rest
}) {
  if (loading)
    return (
      <Container type={type} style={style}>
        <ActivityIndicator animating={loading} />
      </Container>
    );
  else
    return (
      <Container type={type} style={style} {...rest}>
        <Title type={type}>{children}</Title>
      </Container>
    );
}