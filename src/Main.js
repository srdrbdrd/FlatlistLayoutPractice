import React from 'react'
import {View,FlatList,SafeAreaView} from 'react-native'
import data from './data.json'
import ListItem from './components/ListItem'


const Main = () =>{
    return (
        
        <View style = {{flex: 1}}>
            
            <FlatList
                keyExtractor = {(item,index) => index.toString()}
                data = {data}
                renderItem={({item}) => 
                <ListItem 
                Name = {item.name}
                Image = {item.image}
                Likes = {item.likes}
                Location = {item.location}
                />}
            />

        </View>
        
           
            

        
    )
}

export default Main