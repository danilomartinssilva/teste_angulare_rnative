import React from 'react';
import { useState, useContext } from 'react';
import { View } from 'react-native';
import FormButtonComponent from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import FormTextArea from '../../components/FormTextArea';
import { PostContext } from '../../contexts/PostContext';
import api from '../../services/api';
import { Container } from './styles';

// import { Container } from './styles';

function AddScreen({ route, navigation }) {

  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const { addPost } = useContext(PostContext)


  async function handleUpdate() {


    try {

      const request = await api.post(`posts/`, {
        body, title
      })
      const data = await request.data;
      addPost(data)
      navigation.navigate('ListScreen')

    }
    catch (err) {
      console.log('Err', err)
    }

  }


  return (
    <Container>
      <FormInput
        style={{ marginBottom: 8, marginHorizontal: 16, marginTop: 16 }}

        label="Título"
        onChangeText={(e) => setTitle(e)}
        keyboardType={"default"}

        placeholder="Título"


        autoCorrect={false}
        autoCapitalize={"none"}

        returnKeyType={"done"}
        value={title}
      />
      <FormTextArea
        multiline={true}
        style={{ marginBottom: 8, marginHorizontal: 16, marginTop: 16, }}

        label="Descrição"
        onChangeText={(e) => setBody(e)}
        keyboardType={"default"}

        placeholder="Descrição"


        autoCorrect={false}
        autoCapitalize={"none"}

        returnKeyType={"done"}
        value={body}
      />
      <FormButtonComponent
        onPress={() => handleUpdate()}
        type="light"
        style={{
          marginHorizontal: 16,
          marginTop: 8
        }}

      >
        Cadastrar
    </FormButtonComponent>
    </Container>
  )
}

export default AddScreen;