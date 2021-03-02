import React, { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import List from '../../components/ItemList';
import PostProvider, { PostContext } from '../../contexts/PostContext';
import api from '../../services/api';
import { Container, HeaderText } from './styles';

// import { Container } from './styles';

function ListScreen({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          navigation.navigate('AddScreen')
        }}>
          <HeaderText>Cadastrar</HeaderText>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const { posts, addPost, setInitialAddPoss, deletePost } = useContext(PostContext)

  useEffect(() => {

    async function loadPosts() {

      const request = await api.get('/posts');

      const data = await request.data;
      setInitialAddPoss(data)
    }
    loadPosts()

  }, [])

  async function handleDelete(id) {
    const request = await api.delete(`posts/${id}`)
    if (request) {
      deletePost(id)
    }


  }
  return <Container>
    <FlatList
      data={posts}
      renderItem={({ item, index }) => (
        <List item={item} handleDelete={handleDelete} />
      )}

    />
  </Container>
}

export default ListScreen;