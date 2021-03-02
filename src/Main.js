import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { View } from 'react-native';
import ListScreen from './screens/ListScreen';
import EditScreen from './screens/EditScreen'
import PostProvider from './contexts/PostContext';
import AddScreen from './screens/AddScreen';
import PatchScreen from './screens/PatchScreen';
import ShowScreen from './screens/ShowScreen';
/*import PostProvider from './contexts/PostContext'; */


// import { Container } from './styles';
const Stack = createStackNavigator();
function Main() {
  return (

    <>

      <PostProvider>
        <NavigationContainer>


          <Stack.Navigator>
            <Stack.Screen name="ListScreen" component={ListScreen}

              options={({ navigation, route }) => ({
                headerShown: true,
                headerTitleAlign: 'center',

                title: 'Listar Posts',
                headerStyle: {
                  backgroundColor: "#605BFC",
                  textAlign: 'center',
                  alignSelf: 'center',
                },
                headerTitleStyle: { color: '#ffff' },
                headerTintColor: '#ffff',
              })}

            />
            <Stack.Screen name="EditScreen" component={EditScreen} options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: 'center',

              title: 'Editar Posts',
              headerStyle: {
                backgroundColor: "#605BFC",
                textAlign: 'center',
                alignSelf: 'center',
              },
              headerTitleStyle: { color: '#ffff' },
              headerTintColor: '#ffff',
            })} />
            <Stack.Screen name="AddScreen" component={AddScreen} options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: 'center',

              title: 'Adicionar Posts',
              headerStyle: {
                backgroundColor: "#605BFC",
                textAlign: 'center',
                alignSelf: 'center',
              },
              headerTitleStyle: { color: '#ffff' },
              headerTintColor: '#ffff',
            })} />
            <Stack.Screen name="PatchScreen" component={PatchScreen} options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: 'center',

              title: 'Alterar Conteúdo',
              headerStyle: {
                backgroundColor: "#605BFC",
                textAlign: 'center',
                alignSelf: 'center',
              },
              headerTitleStyle: { color: '#ffff' },
              headerTintColor: '#ffff',
            })} />
            <Stack.Screen name="ShowScreen" component={ShowScreen} options={({ navigation, route }) => ({
              headerShown: true,
              headerTitleAlign: 'center',

              title: 'Detalhe',
              headerStyle: {
                backgroundColor: "#605BFC",
                textAlign: 'center',
                alignSelf: 'center',
              },
              headerTitleStyle: { color: '#ffff' },
              headerTintColor: '#ffff',
            })} />
          </Stack.Navigator>

        </NavigationContainer>
      </PostProvider>

    </>


  )
}

export default Main;