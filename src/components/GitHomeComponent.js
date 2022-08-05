import React, { useState } from 'react';
import {Text,View,StyleSheet, TextInput,Button,Alert} from 'react-native';

const GitHomeComponent = ({navigation}) =>{
    const [username,setUsername] = useState(null)
    const onPress = () =>{
        if(username){
         navigation.navigate("Profile",{
            username:username
         })
         return;
        }
      return Alert.alert("Username","username cannot be empty",[{text:"Cancel",style:"cancel"}],{cancelable:true})
    }
    const onChangeText = (text) =>{
        setUsername(text)
    }
    return (
    <View style={Styles.container}>
         <Text>GitHub Profile</Text>
         <TextInput style={Styles.userinputStyle} placeholder='enter username' onChangeText={onChangeText}/>
         <Button title='search'  onPress={onPress}/>
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