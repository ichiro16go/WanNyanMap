import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Googleで検索またはURLを入力"
        placeholderTextColor="gray"
      />
      <MaterialIcons name="mic" size={24} color="gray" />
      <MaterialIcons name="camera-alt" size={24} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
});
