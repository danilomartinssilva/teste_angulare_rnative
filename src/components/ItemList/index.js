import React from 'react';
import { Alert, Text, View } from 'react-native';

import { Container, Title, Description } from './styles';
import { useNavigation } from '@react-navigation/native'

function ItemList({ item, handleDelete }) {

  const navigation = useNavigation()
  return (
    <Container onPress={() => Alert.alert('Selecione uma ação', "Escolha uma as alternativas", [
      {
        text: 'Cancelar',
      },
      {
        text: "Excluir",
        onPress: () => handleDelete(item.id)
      },


      {
        text: "Mais opções",
        onPress: () => Alert.alert('Alterar Conteúdo', "Alterar", [{
          text: "Modificar título e conteúdo", onPress: () => navigation.navigate('EditScreen', { ...item })
        }, {
          text: "Modificar apenas o conteúdo", onPress: () => navigation.navigate('PatchScreen', { ...item })
        },
        {
          text: "Visualizar conteúdo", onPress: () => navigation.navigate('ShowScreen', { id: item.id })
        }

        ])
      },


    ])} >
      <Title>
        Id: {item.id}
      </Title>
      <Title>
        Title: {item.title}
      </Title>
      <Description>{item.body}</Description>
    </Container >
  )
}

export default ItemList;