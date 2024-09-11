import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//component
import MapView, { PROVIDER_GOOGLE, UrlTile, Marker } from 'react-native-maps';
import SearchBar from '../components/searchBar';
import RegionReloadButton from '../components/regionReloadButton';
//function
import getRegion from '../../utils/getRegion';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export default function MapPage() {
    const [region, setRegion] = useState(null);
    const [places, setPlaces] = useState([]);

    //現在地取得
    useEffect(() => {
        // 初回の現在地取得
        getRegion(null, setRegion,setPlaces);
        console.log(region);
        // 5秒ごとに現在地を更新
        const intervalId = setInterval(() => {
            getRegion(null, setRegion,setPlaces);
        }, 5000);  // 5000ミリ秒 = 5秒

        // コンポーネントのクリーンアップ時にインターバルをクリア
        return () => clearInterval(intervalId);
    }, []);

    //現在地が得られなかった時の処理
    if (!region) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <SearchBar />
            </View>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={region} >
                <Marker coordinate={region}>
                    <Image
                        source={require('../../../assets/region_nikukyu.png')}
                        style={{ width: 50, height: 50 }} // 画像サイズを変更
                    />
                </Marker>
                {places.map((place) => (
                    <Marker
                        key={place.id}
                        coordinate={{
                            latitude: place.geometry.location.lat,
                            longitude: place.geometry.location.lng,
                        }}
                        title={place.name}
                    />
                ))}
            </MapView>
            <View style={styles.buttonContainer}>
                <RegionReloadButton region={region} setRegion={setRegion} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

//css
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
    searchBarContainer: {
        position: 'absolute',
        top: 70,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    buttonContainer:{
        position:'absolute',
        bottom: 20,
        right:20,
        zIndex:1,
    }
});
