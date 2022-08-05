import React, { useEffect, useState } from "react";
import {Text,View,Image} from 'react-native';

const GitProfileComponent = ({route}) =>{
    const {username} = route.params;
    const [userData,setUserData] = useState(null);
    const [followers,setFollowers] = useState(null);
    const [following,setFollowing] = useState(null)
    useEffect(()=>{
        if(route.params?.username){
          fetch(`https://api.github.com/users/${route.params?.username}`)
          .then((response)=>response.json())
          .then((json)=>setUserData(json))
          .catch((error)=>console.error(error))
          fetch(`https://api.github.com/users/${route.params?.username}/followers`)
          .then((response)=>response.json())
          .then((json)=>setFollowers(json))
          .catch((error)=>console.error(error))
          fetch(`https://api.github.com/users/${route.params?.username}/following`)
          .then((response)=>response.json())
          .then((json)=>setFollowing(json))
          .catch((error)=>console.error(error))
        }
    },[route.params?.username])
   
    return (
        <View style={{flex:1,alignItems:"center",padding:10}}>
            <Image source={{uri:userData?.avatar_url}} style={{width:200, height:200,borderRadius: 100}} />
            <Text>Username : {userData? userData.name : "Name not found"}</Text>
            <Text>Followers : {followers?.length}</Text>
            <Text>Following : {following?.length}</Text>
        </View>
    )
}

export default GitProfileComponent;