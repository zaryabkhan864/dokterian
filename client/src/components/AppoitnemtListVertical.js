import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/appoitnemtListVertical.style';
import { useNavigation } from '@react-navigation/native';
import d1 from "../assets/images/d3.jpg";
import d2 from "../assets/images/d4.jpg";

const hardcodedData = [
  {
    id: '1',
    name: "Dr. Saad Usman",
    specialization: "Cardiologist",
    imageUrl: d1,
    date: 'Sunday, 12 June',
    time: '11:00 - 12:00 AM',
    status: 'upcoming',
    location: "Al-Shifa Hospital, Lahore",
    experience: "12 years",
    contact: "+92 300 1234567"
  },
  {
    id: '2',
    name: 'Dr. Ayesha Khan',
    specialization: 'Dentist',
    imageUrl: d2,
    date: 'Saturday, 10 June',
    time: '03:00 - 03:30 PM',
    status: 'completed',
    location: "Smile Care Clinic, Karachi",
    experience: "8 years",
    contact: "+92 322 9876543"
  },
];

const AppointmentListVertical = () => {
  const nav = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => nav.navigate('Details', { id: item.id })}>
      <View style={styles.cardWrapper}>
        <Card style={styles.cardContainer}>
          <Card.Content>
            <View style={styles.rowContainer}>
              <Image
                source={item.imageUrl}
                style={styles.profileImage}
              />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Title style={styles.infoCardTitle}>{item.name}</Title>
                <Paragraph style={styles.infoCardParagraph}>{item.specialization}</Paragraph>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24}  style={styles.icon}/>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.infoAppointmentInfo}>
              <View style={styles.rowContainer}>
                <MaterialCommunityIcons name="calendar" size={16}  style={styles.icon}/>
                <Text style={styles.textStyle}> {item.date}</Text>
              </View>
              <View style={styles.rowContainer}>
                <MaterialCommunityIcons name="clock-outline" size={16}  style={styles.icon} />
                <Text style={styles.textStyle}> {item.time}</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={hardcodedData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

export default AppointmentListVertical;
