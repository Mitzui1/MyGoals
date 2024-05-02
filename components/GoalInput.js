import { useState } from "react";
import {View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const [enteredGoalText, setEnterGoalText] = useState('')

    function handleAddGoal(enteredText){
        console.log(enteredText)
        setEnterGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnterGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your Goal"
                onChange={handleAddGoal}
                value={enteredGoalText}
            />
            <Button 
            title="Add Goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#7BC9FF'

    },
    textInput: {
        borderWidth:1,
        borderColor:'#cccccc',
        width:'80%',
        marginRight: 3,
        padding:8,
        borderRadius:5
    }
})