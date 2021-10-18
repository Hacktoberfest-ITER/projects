import React, { useState } from 'react'
import {StyleSheet, TextInput, Pressable, KeyboardAvoidingView,Platform } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({fetchWeather}) => {

    const [cityName, setCityName] = useState('')

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TextInput
            placeholder='Enter City Name'
            value={cityName}
            onChangeText={(text)=>setCityName(text)}
            style={styles.searchBar}
            maxLength={25}
            />
            <Pressable style={styles.btn} onPress={() => fetchWeather(cityName)}>
            <FontAwesome5 name="search" size={22} color="#fff" />
            </Pressable>
        </KeyboardAvoidingView>
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
        height: 40,
        padding: 10,
        borderRadius:12,
        flex:1,
        backgroundColor:'#e3e3e3',
        color:'#000000'
    },
    btn:{
        marginLeft:10,
        backgroundColor:'#f0c72f',
        padding:8,
        borderRadius:12,
        height: 40,
        width: 40,
        alignItems:'center',
    }
})

export default SearchBar
