import React from "react";
import { Text, View, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "../styles/category.style";

const categories = [
  { id: 1, title: "Covid 19", icon: "coronavirus" },
  { id: 2, title: "Doctor", icon: "medical-services" },
  { id: 3, title: "Medicine", icon: "medication" },
  { id: 4, title: "Hospital", icon: "local-hospital" },
  { id: 5, title: "Ambulance", icon: "local-shipping" },
  { id: 6, title: "Pharmacy", icon: "local-pharmacy" },
];

const Category = () => {
  const renderItem = ({ item }) => (
    <View style={styles.categoryMainContainer}>
      <View style={styles.categoryCircle}>
        <Icon name={item.icon} size={30} style={styles.categoryIcon} />
      </View>
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default Category;
