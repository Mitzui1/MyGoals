import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import { Button } from 'react-native-web';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItems';

export default function App() {


const [enterGoalText, setEnterGoalText] = useState('')
const [goals, setGoals] = useState('')

function handleInputGoal(enterText){
  console.log(enterText)
}

function handleAddGoal(){
  console.log(enterGoalText)
  setGoals(() =>[...goals, {text: enterGoalText, key: Math.random().toString()}])
}

function handleDeleteGoal(){
  console.log('DELETE')
}


  return (
<View style={styles.container}>
<GoalInput
onAddGoal={handleAddGoal}
/>
  <View style={styles.goalsContainer}>
      <FlatList 
       data={goals}
       renderItem={ (itemData) => {
       <GoalItem
       itemData={itemData}
       onAddGoal={handleAddGoal}
       />
      }}
      keyExtractor={(item) => {
        return item.id
      }}

      />
 
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
goalsContainer:{
  flex: 1
}
})
