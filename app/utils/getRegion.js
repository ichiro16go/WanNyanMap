import * as Location from 'expo-location';
import axios from 'axios';
import Constants from 'expo-constants';

import getNearSpot from './spotController';

export default async function getRegion(region, setRegion, setPlaces) {
    // dotenv.config(); // この行を削除
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('位置情報の許可が必要です。');
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords);

    const { latitude, longitude } = location.coords;

    // 地図の領域を設定
    setRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.02305,
        longitudeDelta: 0.0105,
    });

    // // Google Places APIを使用して周辺のスポットを取得
    // const apiKey = Constants.extra.GOOGLE_PLACE_API_KEY; // 修正
    // console.log(apiKey)
    getNearSpot(latitude,longitude,setPlaces)
}