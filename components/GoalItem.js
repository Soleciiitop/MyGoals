import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({itemData, onDeleteItem, id}){

    function deleteGoalHandler(){
        onDeleteItem(id)
        console.log('Delete Goal handeler')
    }

    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={styles.goalsItem}>
                <text style={styles.goalText}>{itemData.item}</text>
            </View>
        </Pressable>
    )

}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#8576FF',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
})