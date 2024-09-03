import * as Location from 'expo-location';

export default async function getRegion(region,setRegion) {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('位置情報の許可が必要です。');
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords)
    setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02305,
        longitudeDelta: 0.0105,
    });
}