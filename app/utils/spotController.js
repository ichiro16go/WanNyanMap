import axios from 'axios';
import Constants from 'expo-constants';

export default async function getNearSpot(latitude,longitude,setPlaces){
    const radius = 2000; // 半径200m

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
            params: {
                location: `${latitude},${longitude}`,
                radius: radius,
                key: "AIzaSyDGwpHlnLrF3qeaH-6Kcvhhuce11jMwsxY",
            },
        });

        const places = response.data.results;
        setPlaces(places);
    } catch (error) {
        console.error('スポット情報の取得に失敗しました:', error);
    }
}