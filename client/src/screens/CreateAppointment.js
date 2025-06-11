import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/CreateAppointment.style';

const CreateAppointment = () => {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('Clinic A');
  const [fullAddress, setFullAddress] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [slots, setSlots] = useState(1);
  const [category, setCategory] = useState('Cardiology');
  const [notes, setNotes] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const categories = ['Cardiology', 'Dentistry', 'Neurology', 'Orthopedics', 'Pediatrics'];
  const locations = ['Clinic A', 'Clinic B', 'Clinic C'];

  const handleSubmit = () => {
    if (!location || !fullAddress || !slots || !category) {
      Alert.alert('Missing Fields', 'Please fill all required fields');
      return;
    }

    if (endTime <= startTime) {
      Alert.alert('Invalid Time', 'End time must be after start time');
      return;
    }

    if (slots <= 0) {
      Alert.alert('Invalid Slot', 'Number of slots must be at least 1');
      return;
    }

    const payload = {
      date: date.toDateString(),
      location,
      fullAddress,
      startTime: startTime.toLocaleTimeString(),
      endTime: endTime.toLocaleTimeString(),
      slots,
      category,
      notes,
    };

    console.log('Availability Created:', payload);
    Alert.alert('Success', 'Doctor availability saved!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Set Availability</Text>

      <Text style={styles.label}>Select Date</Text>
      <Button title={date.toDateString()} onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      <View style={{flexDirection: 'row'}}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Text style={styles.label}>Start Time</Text>
          <Button title={startTime.toLocaleTimeString()} onPress={() => setShowStartTimePicker(true)} />
          {showStartTimePicker && (
            <DateTimePicker
              value={startTime}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowStartTimePicker(false);
                if (selectedTime) setStartTime(selectedTime);
              }}
            />
          )}
        </View>

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={styles.label}>End Time</Text>
          <Button title={endTime.toLocaleTimeString()} onPress={() => setShowEndTimePicker(true)} />
          {showEndTimePicker && (
            <DateTimePicker
              value={endTime}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                setShowEndTimePicker(false);
                if (selectedTime) setEndTime(selectedTime);
              }}
            />
          )}
        </View>
      </View>

      <Text style={styles.label}>Location</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}>
          {locations.map((loc) => (
            <Picker.Item label={loc} value={loc} key={loc} />
          ))}
        </Picker>
      </View>

      <TextInput
        placeholder="Full Address"
        style={styles.input}
        value={fullAddress}
        onChangeText={setFullAddress}
      />

      <Text style={styles.label}>Number of Slots</Text>
      <TextInput
        placeholder="Enter number of slots"
        style={styles.input}
        keyboardType="numeric"
        value={String(slots)}
        onChangeText={(text) => setSlots(Number(text))}
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}>
          {categories.map((cat) => (
            <Picker.Item label={cat} value={cat} key={cat} />
          ))}
        </Picker>
      </View>

      <TextInput
        placeholder="Notes (optional)"
        style={[styles.input, { height: 100 }]}
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Save Availability" onPress={handleSubmit} color="#28a745" />
      </View>
    </ScrollView>
  );
};

export default CreateAppointment;
