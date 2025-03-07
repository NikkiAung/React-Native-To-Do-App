import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

type ListProps = {
    id : number,
    message : string,
    isDone : boolean
    changeStatus : (id:number) => void
    undoStatus : (id:number) => void
}

function List({id,message,isDone,changeStatus,undoStatus} : ListProps) {
  return (
    <View style={styles.container}>
      <Text style={[
        styles.text,
        {
            color: isDone ? "gray" : undefined,
            textDecorationLine: isDone? "line-through" : "",
        },
      ]}>{message}</Text>
      {
        isDone 
        ? <AntDesign name="close" size={24} color="black" style={{opacity : 0.5}} onPress={()=>undoStatus(id)} />
        : <AntDesign name="check" size={24} color="black" onPress={()=>changeStatus(id)} />
      }
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : "100%",
        paddingLeft : 10,
        paddingRight : 10,
        borderBottomColor : 'gray',
        borderBottomWidth : 1,
    },
    text : {
        fontSize : 16,
        fontWeight : 'bold',
        paddingBottom: 4
    }
});