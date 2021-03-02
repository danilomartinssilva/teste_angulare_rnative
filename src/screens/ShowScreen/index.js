import React, { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';
import ItemList from '../../components/ItemList';
import List from '../../components/ItemList';
import PostProvider, { PostContext } from '../../contexts/PostContext';
import api from '../../services/api';
import { Container, HeaderText } from './styles';

// import { Container } from './styles';

function ShowScreen({ navigation, route }) {
  const { id } = route.params



  const [show, setShowed] = useState()

  useEffect(() => {

    async function loadPosts() {


      const request = await api.get('/posts/' + id);
      const data = await request.data;

      setShowed(data)

    }

    loadPosts()

  }, [])


  return <Container>
    {show && show.id ? (

      <ItemList
        item={show}
        handleDelete={() => { }}

      />
    ) : (
        <ActivityIndicator animating />
      )}

  </Container>
}

export default ShowScreen;