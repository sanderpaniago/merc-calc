import React, { useState } from "react";
import { Text } from "react-native";
import { Container } from "../style/main";

export default function Created() {

  const [name, setName] = useState('')
  const [qnt, setQnt] = useState(0)
  const [valueUnd, setValueUnv] = useState(0)

  return (
    <Container>
      <Text>Ola</Text>
    </Container>
  )
}