import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import Header from '../components/Header'

import SearchBar from '../components/SearchBar'
import NewDoctor from '../components/NewDoctor'
import Category from '../components/Category'
import AppoitnemtListVertical from '../components/AppoitnemtListVertical'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <Header />
              <AppoitnemtListVertical/>
                    <SearchBar />
                    <Category />
                    <NewDoctor />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
