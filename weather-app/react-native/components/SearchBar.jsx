import React, { useState } from 'react'
import {StyleSheet, TextInput, Pressable,View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({fetchWeather}) => {

    const [cityName, setCityName] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Enter City Name'
            value={cityName}
            onChangeText={(text)=>setCityName(text)}
            style={styles.searchBar}
            maxLength={25}
            returnKeyType='search'
            />
            <Pressable style={styles.btn} onPress={() => fetchWeather(cityName)}>
            <FontAwesome5 name="search" size={24} color="#fff" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginBottom:20,

    },
    searchBar:{
        height: 45,
        padding: 10,
        borderRadius:12,
        flex:1,
        backgroundColor:'#e3e3e3',
        color:'#000000',
        fontSize:18,
    },
    btn:{
        marginLeft:10,
        backgroundColor:'#f0c72f',
        padding:8,
        borderRadius:12,
        height: 45,
        width: 45,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default SearchBar
