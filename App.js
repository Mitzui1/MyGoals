import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import { Button } from 'react-native-web';

export default function App() {


const [enterGoalText, setEnterGoalText] = useState('')
const [goals, setGoals] = useState('')

function handleInputGoal(enterText){
  console.log(enterText)
}

function handleAddGoal(){
  console.log(enterGoalText)
  setGoals(() =>[ goals, {text: enterGoalText, key: Math.random().toString()}])
}



  return (
<View style={styles.container}>

    <View style={styles.inputContainer}>
<TextInput
style={styles.textInput}
placeholder='Your Goal!'
onChangeText={handleInputGoal}
/>

<Button
title='Add Goal'
color={'#A3FFD6'}
onPress={handleAddGoal} 
/>
    </View>


    <View style={styles.goalsContainer}>
      <FlatList 
       data={goals}
       renderIntem={ (itemData) => {
        <View>
          <Text style={styles.goalText}>
            {itemData.item.text}
          </Text>
        </View>
       }}
      > 
      </FlatList>


    </View>
</View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 20
},

inputContainer: {
  flex: 1,
  flexDirection:'row',
  justifyContent: 'center',
  alingItems: 'center',
  marginBottom: 20,
  boderBottomWidth: 1,
  boderBottomColor: '#7BC9FF'
},

btnGoal: {
  borderRadius: 20,
  backgroundColor: '#cccccc'
},
textInput: {
  borderWidth: 1,
  borderColor: '#cccccc',
  width: '80%',
  marginRight: 3,
  padding: 8,
  borderRadius: 5
},

goalsContainer:{
  flex: 5
},

goalsItem: {
  margin: 0,
  pagging: 8,
  borderRadius: 6,
  backgroundColor: '#8576FF',
  color: 'white'
},
goalText:{
  color: 'white'
}
});
