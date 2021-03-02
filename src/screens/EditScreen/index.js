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

function EditScreen({ route, navigation }) {
  const { params: data } = route
  const [title, setTitle] = useState(data.title)
  const [body, setBody] = useState(data.body)
  const { updatePost } = useContext(PostContext)


  async function handleUpdate() {

    const { id } = data
    try {

      const request = await api.put(`posts/${id}`, {
        id, body, title
      })
      const data = await request.data;
      updatePost(data)
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

export default EditScreen;