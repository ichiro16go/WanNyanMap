//ブックマークのページ
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function BookDetailPopUp() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <View key={index} style={styles.item}>
            <Text>BookMarkTitle</Text>
            <Button title="Button" onPress={() => {}} />
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:70,
    justifyContent: 'flex-start', // 上に寄せる
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    width: '100%', // 幅を100%に
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9', // 背景色を追加
  },
});
