import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import SearchBar from './SearchBar'
import {tornado,thunderstrome,snow,sand,rain,moon,mist,haze,dust,clearM,clouds} from '../assets/index'


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getCurrentDate=()=>{
    const d = new Date();
    let date = d.getDate();
    let month = monthNames[d.getMonth()]
    let year = d.getFullYear();

    //Alert.alert(date + ' ' + month + ' ' + year);
    // You can turn it in to your desired format
    return date + ' ' + month + ' ' + year;//format: dd-mm-yyyy;
}

const hours = new Date().getHours();

const WeatherUi = ({weatherData, fetchWeather}) => {

    const [Wicon, setWicon] = useState(null)
    const {weather,
            name,
            main:{temp,humidity,pressure},
            wind:{speed}
    } = weatherData
    const [{main, description}] = weather

    function getWicon(weather){
        if(weather === 'Tornado') return tornado
        if(weather === 'Thunderstorm') return thunderstrome
        if(weather === 'Snow') return snow
        if(weather === 'Sand') return sand
        if(weather === 'Rain') return rain
        if(weather === 'Clear' && hours>12) return moon
        if(weather === 'Mist') return mist
        if(weather === 'Haze') return haze
        if(weather === 'Dust') return dust
        if(weather === 'Clear'&& hours<=12) return clearM
        if(weather === 'Clouds') return clouds
        return haze
    }

    useEffect(()=>{
        setWicon(getWicon(main))
    },[weatherData])


    

    return (
        <View>
            {/* search-bar */}
            <SearchBar fetchWeather={fetchWeather} />

            {/* cityname today's date weather-icon main descp temp ->column*/}
            <View style={styles.sub2}>
            <Text style={{fontSize:26, fontWeight:'bold',color:'white'}}>{name}</Text>
                <Text style={{fontSize:16, marginVertical:6,color:'white'}}>{getCurrentDate()}</Text>
                <View style={{height:40}}/>
                <Image source={Wicon} style={styles.icons} resizeMode='contain' />
                <Text style={{fontSize:26, fontWeight:'bold',color:'white'}}>{main}</Text>
                <Text style={{fontSize:20, marginVertical:6,color:'white'}}>{description}</Text>
                <Text style={{fontSize:24, fontWeight:'bold',color:'white'}}>{temp} °C</Text>
            </View>
            {/* min-temp max-temp  wind  humidity ->row*/}
            <View style={styles.sub3}>
                <View style={styles.rowBox}>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'white'}}>Pressure</Text>
                    <View style={styles.subBox}>
                    <Text style={{fontSize:16, marginVertical:4,color:'white',marginRight:2}}>{pressure}</Text>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'white'}}>hPa</Text>
                    </View>
                </View>
                <View style={styles.rowBox}>
                    <Text style={{fontSize:16,color:'white', fontWeight:'bold'}}>Wind Speed</Text>
                    <View style={styles.subBox}>
                    <Text style={{fontSize:16, marginVertical:4, marginRight:2,color:'white'}}>{speed}</Text>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'white'}}>m/s</Text>
                    </View>
                </View>
                <View style={styles.rowBox}>
                    <Text style={{fontSize:16,color:'white', fontWeight:'bold'}}>Humidity</Text>
                    <View style={styles.subBox}>
                    <Text style={{fontSize:16, marginVertical:4,color:'white'}}>{humidity}</Text>
                    <Text style={{fontSize:16, fontWeight:'bold',color:'white'}}>%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sub2:{
        flex:1,
        alignItems:'center',
        marginTop:12,
        justifyContent:'center'
    },
    icons:{
        width:150,
        height:150,
        marginBottom:6,
    },
    sub3:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:30,
    },
    rowBox:{
        // width:80, 
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        width: Dimensions.get('screen').width/3.6,
        backgroundColor:'#4b4e9e',
        borderRadius:12,
        padding:8,
    },
    subBox:{
       flexDirection:'row',
        alignItems:'center',
    }
  });
  

export default WeatherUi
