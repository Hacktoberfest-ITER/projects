import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView,StatusBar,Alert } from 'react-native';
import SearchBar from './components/SearchBar';
import WeatherUi from './components/WeatherUi';
import * as Location from 'expo-location';

const API_KEY = 'c5212ff223c381bf600ca14a06be152c'


export default function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [loaded, setLoaded] = useState(true)
  const [errorMsg, setErrorMsg] = useState('');
  const [city, setCity ] = useState();

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

  useEffect(() => {
    runFunction();
    fetchWeather(city);
  } , []);

  const runFunction = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setErrorMsg('Access to Location denied');
    }

    const location = await Location.getCurrentPositionAsync({});

    const place = await Location.reverseGeocodeAsync({
        latitude : location.coords.latitude,
        longitude : location.coords.longitude
    });

    let city;
    place.find( p => {
      city = p.city
      setCity(p.city)
    });
}


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
        <Text style={styles.errMsg}>Something is not right! search city here</Text>
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
    backgroundColor:'#f34053',
    justifyContent:'center',
  },
  errMsg:{
    fontSize:26,
    fontWeight:'bold',
    color:'#fff',
    marginTop:10,
    textAlign:'center',
  }
});
