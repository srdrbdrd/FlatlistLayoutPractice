import React from 'react'
import {SafeAreaView,StyleSheet,View,Text,Dimensions,Image} from 'react-native'


const ListItem = (props) =>{

    return (
        <SafeAreaView style = {styles.safeAreaContainer}>
            <View style = {styles.mainContainer}>
                
                <Image style = {styles.imageStyle} source ={{uri : props.Image}} />
                
                <View style ={styles.underİmageContainer}>
                    <View style = {styles.underİmageContainerLeft}>
                    
                    <Text style = {styles.textLabel}>{props.Name}</Text>
                    <Text style = {styles.textNormal}>{props.Location}</Text>
                   
                    </View>
                    
                    <View style = {styles.underİmageContainerRight}>
                    
                    <Text style = {styles.textLabel}>{props.Likes}</Text>
                    <Image style = {styles.imageHearth} source = {require('../assets/heart.png')} resizeMode = 'contain' />
                    
                    </View>
                </View>



            </View>





        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    safeAreaContainer:{
        flex:1,
        backgroundColor:'white',
        alignItems:"center"
    },
    mainContainer:{
        flex:1,
        margin:10,
    },
    imageStyle:{
    
        height: undefined,
        width: '100%',
        aspectRatio:2
        
    },
    underİmageContainer:{
        flexDirection:"row"
    },
    underİmageContainerLeft:{
        flex:1,
        backgroundColor:'#bdbdbd',
        borderBottomLeftRadius:5
        
    },
    underİmageContainerRight:{
        flex:1,
        flexDirection:'row-reverse',
        alignItems:'center',
        backgroundColor:'#bdbdbd',
        borderBottomRightRadius:5
    },
    textLabel:{
        margin:5,
        fontSize:18,
        fontWeight: 'bold',
        color:'#000000',
    },
    textNormal:{
        marginLeft:5,
        fontSize:12,
        marginBottom:5,
        color:'#000000',
    },
    imageHearth:{
        height:Dimensions.get('window').height / 15 ,
        width:Dimensions.get('window').width / 15,
        alignSelf:'center'
    }
})




export default ListItem