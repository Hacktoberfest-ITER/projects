import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import SearchBar from './components/SearchBar';
import WeatherUi from './components/WeatherUi';

const API_KEY = 'c5212ff223c381bf600ca14a06be152c'


export default function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [loaded, setLoaded] = useState(true)

  async function fetchWeather(cityName){
    setLoaded(false)
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    try{
      const response = await fetch(API)
      if(response.status == 200){
        const data = await response.json()
        setWeatherData(data)
      } else {
        setWeatherData(null)
      }
      setLoaded(true)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() =>{
    fetchWeather('Delhi');
    // console.log(weatherData)
  },[])

  if(!loaded){
    return(
      <SafeAreaView style={styles.activityContainer}>
        <ActivityIndicator color='white' size={36} />
      </SafeAreaView>
    )
  } else if(weatherData == null){
    return(
      <View style={styles.activityContainer}>
        <SearchBar fetchWeather={fetchWeather}/>
        <Text style={styles.errMsg}>City Not Found!!! Try different city</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <WeatherUi weatherData={weatherData} fetchWeather={fetchWeather} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems:'center',
    backgroundColor:'#686bcc'
  },
  activityContainer:{
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems:'center',
    backgroundColor:'#979797',
    justifyContent:'center',
  },
  errMsg:{
    fontSize:26,
    fontWeight:'bold',
    color:'#c21b0c',
    marginTop:10,
    textAlign:'center',
  }
});
