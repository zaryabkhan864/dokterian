import React from 'react';

import { View, ScrollView, SafeAreaView } from 'react-native'
import Header from '../components/Header';

import UpCommingAppoitments from '../components/UpCommingAppoitments';
import CompletedAppoitments from '../components/CompletedAppoitments';


const Appointment = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Header />
          <UpCommingAppoitments />
          {/* <AppoitmentLists /> */}
          <CompletedAppoitments />
        </View>
      </ScrollView>


    </SafeAreaView>
  );
};

export default Appointment;
