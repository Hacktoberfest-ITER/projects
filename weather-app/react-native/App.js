import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import SearchBar from "./components/SearchBar";
import WeatherUi from "./components/WeatherUi";
import * as Location from "expo-location";
import LottieView from "lottie-react-native";

const API_KEY = "Enter Your API key here";

export default function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [loaded, setLoaded] = useState(true);
	const [city, setCity] = useState(null);

	async function fetchWeather(cityName) {
		setLoaded(false);
		const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
		try {
			const response = await fetch(API);
			if (response.status == 200) {
				const data = await response.json();
				setWeatherData(data);
			} else {
				setWeatherData(null);
			}
			setTimeout(() => {
				setLoaded(true);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		runFunction();
		fetchWeather(city);
	}, []);

	const runFunction = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			console.log("Access to Location denied");
		}

		const location = await Location.getCurrentPositionAsync({});

		const place = await Location.reverseGeocodeAsync({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});

		let city;
		place.find((p) => {
			city = p.city;
			setCity(p.city);
		});
	};

	if (!loaded) {
		return (
			<SafeAreaView style={styles.activityContainer}>
				<LottieView
					style={{ height: 200 }}
					source={require("./assets/animations/scanner.json")}
					autoPlay
					speed={3}
				/>
			</SafeAreaView>
		);
	} else if (weatherData == null) {
		return (
			<View style={styles.searchContainer}>
				<LottieView
					style={{ height: 200 }}
					source={require("./assets/animations/map-locator.json")}
					autoPlay
					loop
					speed={2}
				/>
				<SearchBar fetchWeather={fetchWeather} />
				<Text style={styles.errMsg}>Search City</Text>
			</View>
		);
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
		alignItems: "center",
		backgroundColor: "#686bcc",
	},
	activityContainer: {
		backgroundColor: "black",
		position: "absolute",
		opacity: 0.6,
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	searchContainer: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		alignItems: "center",
		justifyContent: "center",
	},
	errMsg: {
		fontSize: 26,
		fontWeight: "bold",
		marginTop: 10,
		textAlign: "center",
	},
});
