import React from 'react';
import {Text,View,StyleSheet, TextInput,Button} from 'react-native';

const GitHomeComponent = () =>{
    return (
    <View style={Styles.container}>
         <Text>GitHub Profile</Text>
         <TextInput style={Styles.userinputStyle} placeholder='enter username'/>
         <Button title='search' />
    </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    userinputStyle:{
       borderWidth:1,
    }
})

export default GitHomeComponent;