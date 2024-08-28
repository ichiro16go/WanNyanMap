//コントローラーのページ
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';
//component
import MapView, { PROVIDER_GOOGLE,UrlTile,Marker } from 'react-native-maps';

const GOOGLE_PLACES_API_KEY=process.env.GOOGLE_PLACES_API_KEY;

export default function MapPage() {
    const [region, setRegion] = useState(null);
    const [searchQuery,setSearchQuery]=useState('');
    const [places,setPlaces]=useState([]);

    //現在地取得
    useEffect(() => {
        (async () => {
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
                latitudeDelta: 0.0461,
                longitudeDelta: 0.0210,
            });
        })();
    },[]);

   

    //現在地が得られなかった時の処理
    if (!region) {
        return null;
    }
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={region} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
