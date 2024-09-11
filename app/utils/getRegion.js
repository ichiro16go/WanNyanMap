import * as Location from 'expo-location';
import axios from 'axios';

export default async function getRegion(region, setRegion,setPlaces) {
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

    // Google Places APIを使用して周辺のスポットを取得
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const radius = 200; // 半径200m

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
            params: {
                location: `${latitude},${longitude}`,
                radius: radius,
                key: GOOGLE_PLACES_API_KEY,
            },
        });

        const places = response.data.results;
        setPlaces(places)
        console.log('周辺のスポット:', places);
        // ここで取得したスポット情報を必要に応じて状態に保存することができます
    } catch (error) {
        console.error('スポット情報の取得に失敗しました:', error);
    }
}