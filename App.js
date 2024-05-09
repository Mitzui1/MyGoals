import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import { Button } from 'react-native-web';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItems';

export default function App() {



const [goals, setGoals] = useState([])



function handleAddGoal(enteredGoalText){
 //console.log(enterGoalText)
  setGoals(() =>[...goals, {text: enteredGoalText, key: Math.random().toString()}])
}

function handleDeleteGoal(){
  console.log('DELETE')
  const deleteGoal = goal.filtler((goal) => {return goal.key !== id})
  setGoals(deleteGoal)
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
          return(
        
            <GoalItem 
              itemData={itemData}
              onDeleteItem={handleDeleteGoal} 
              id={itemData.item.key}
            />
          )
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
