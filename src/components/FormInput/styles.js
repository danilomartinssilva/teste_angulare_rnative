import styled from 'styled-components/native'



export const Container = styled.View`
  flex-direction: column;
`
export const ContainerTextInput = styled.View`
  flex-direction: row;
  height: 48px;
  border-radius: 8px;
  border-width: 0.5px;
  
  align-items: center;
`

export const Tinput = styled.TextInput.attrs({
  placeHolderTextColor: 'rgba(153,153,153,1)'
})`
  color: black;
  padding: 10px;
  flex: 1;
  
  font-size: 15px;
`

export const TImage = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 20;
  height: 20;
  margin: 16px;
`



export const TError = styled.Text`
  font-size: 12px;
  margin-bottom: 8px;
  color:red;
  margin-top: 8px;
  margin-left: 8px;
`