import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/NewDoctor.style';

import d1 from "../assets/images/d1.jpg";
import d2 from "../assets/images/d2.jpg";
import d3 from "../assets/images/d3.jpg";
import d4 from "../assets/images/d4.jpg";

const NewDoctor = () => {
  const [doctors, setDoctors] = useState([]);

  // ✅ Hooks always on top, no condition
  const [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Bold: Poppins_700Bold,
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      const fetchedDoctors = [
        {
          id: 1,
          name: "Dr. Imran Syahir",
          specialty: "General Doctor",
          distance: "1.2 KM",
          date: "Sunday, 12 June",
          time: "11:00 - 12:00 AM",
          imageUrl: d1
        },
        {
          id: 2,
          name: "Dr. Ayesha Khan",
          specialty: "Dermatologist",
          distance: "2.4 KM",
          date: "Monday, 13 June",
          time: "10:00 - 11:00 AM",
          imageUrl: d2
        },
        {
          id: 3,
          name: "Dr. Saad Usman",
          specialty: "Cardiologist",
          distance: "3.1 KM",
          date: "Tuesday, 14 June",
          time: "01:00 - 02:00 PM",
          imageUrl: d3
        },
        {
          id: 4,
          name: "Dr. Zara Sheikh",
          specialty: "Pediatrician",
          distance: "0.8 KM",
          date: "Wednesday, 15 June",
          time: "09:00 - 10:00 AM",
          imageUrl: d4
        }
      ];

      setDoctors(fetchedDoctors);
    };

    fetchDoctors();
  }, []);

  // ✅ Only block rendering here
  if (!fontsLoaded) {
    return null;
  }


  const renderDoctorCard = ({ item }) => (
    <Card style={styles.cardContainer}>
      <Card.Content>
        {/* Profile and Name Section */}
        <View style={styles.rowContainer}>
          <Image
            source={typeof item.imageUrl === "string" ? { uri: item.imageUrl } : item.imageUrl}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Title style={styles.infoCardTitle}>{item.name}</Title>
            <Paragraph style={styles.infoCardParagraph}>{item.specialty}</Paragraph>
          </View>
          <View>
            <Text>{item.distance}</Text>
          </View>
        </View>

        {/* Divider */}
        <Divider style={styles.divider} />

        {/* Appointment Info */}
        <View style={styles.infoAppointmentInfo}>
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons name="calendar" size={16} color="white" />
            <Text style={styles.textStyleLeft}> {item.date}</Text>
          </View>
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons name="clock-outline" size={16} color="white" />
            <Text style={styles.textStyleRight}> {item.time}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>New Doctors</Text>
      <FlatList
        data={doctors}
        renderItem={renderDoctorCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewDoctor;
