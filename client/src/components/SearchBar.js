import React from 'react';
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../styles/searchbar.style';

const SearchBar = () => {
  return (
    <View style={styles.searchMainContainer}>
      <TouchableOpacity style={styles.searchTouch}>
        <Feather name="search" size={24} />
        <Text style={styles.searchText}>Search Doctors and health issues</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
