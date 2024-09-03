import { View, Button } from "react-native";
import getRegion from "../../utils/getRegion";

export default function RegionReloadButton({ region, setRegion }){
    const handlePress = () => {
        getRegion(region, setRegion);
    };

    return(
        <View>
            <Button onPress={handlePress} title="現在地を更新" />
        </View>
    )
}