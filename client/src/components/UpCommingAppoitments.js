import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/UpCommingAppoitments.style';

// Import local images
import d1 from "../assets/images/d1.jpg";
import d2 from "../assets/images/d2.jpg";
import d3 from "../assets/images/d3.jpg";
import d4 from "../assets/images/d4.jpg";
import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

const CompletedAppoitments = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Bold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Jab tak font load nahi hota, kuch render mat karo
  }

  useEffect(() => {
    // Simulate API data with local images
    const fetchedData = [
      {
        id: 1,
        name: "Dr. Saad Usman",
        specialty: "Cardiologist",
        distance: "3.1 KM",
        date: "Tuesday, 14 June",
        time: "01:00 - 02:00 PM",
        imageUrl: d3
      },
      {
        id: 2,
        name: "Dr. Zara Sheikh",
        specialty: "Pediatrician",
        distance: "0.8 KM",
        date: "Wednesday, 15 June",
        time: "09:00 - 10:00 AM",
        imageUrl: d4
      }
    ];

    setDoctorsData(fetchedData);
  }, []);

  const renderItem = ({ item: doctor }) => (
    <Card style={styles.cardContainer}>
      <Card.Content>
        {/* Profile and Name Section */}
        <View style={styles.rowContainer}>
          <Image
            source={typeof doctor.imageUrl === 'string' ? { uri: doctor.imageUrl } : doctor.imageUrl}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Title style={styles.infoCardTitle}>{doctor.name}</Title>
            <Paragraph style={styles.infoCardParagraph}>{doctor.specialty}</Paragraph>
          </View>
          <View>
            <Text style={styles.textLocation}>{doctor.distance}</Text>
          </View>
        </View>

        {/* Divider */}
        <Divider style={styles.divider} />

        {/* Appointment Info */}
        <View style={styles.infoAppointmentInfo}>
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons name="calendar" size={16} color="white" />
            <Text style={styles.textStyleLeft}> {doctor.date}</Text>
          </View>
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons name="clock-outline" size={16} color="white" />
            <Text style={styles.textStyleRight}> {doctor.time}</Text>
          </View>
        </View>

        <View style={styles.detailButtonWrapper}>
          <Text style={styles.detailButtonText}>Detail</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Coming Appointments</Text>

      <FlatList
        data={doctorsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CompletedAppoitments;
