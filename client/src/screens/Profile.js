import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';

const Profile = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>

                {/* Profile Image and Name */}
                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            marginBottom: 10,
                        }}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dr. Imran Syahir</Text>
                    <Text style={{ color: 'gray' }}>General Doctor</Text>
                </View>

                {/* Options List */}
                <View>
                    <TouchableOpacity style={styles.optionRow}>
                        <Ionicons name="person-circle-outline" size={24} color="#333" />
                        <Text style={styles.optionText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <Divider />

                    <TouchableOpacity style={styles.optionRow}>
                        <MaterialIcons name="lock-outline" size={24} color="#333" />
                        <Text style={styles.optionText}>Change Password</Text>
                    </TouchableOpacity>
                    <Divider />

                    <TouchableOpacity style={styles.optionRow}>
                        <Ionicons name="notifications-outline" size={24} color="#333" />
                        <Text style={styles.optionText}>Notifications</Text>
                    </TouchableOpacity>
                    <Divider />

                    <TouchableOpacity style={styles.optionRow}>
                        <MaterialIcons name="settings" size={24} color="#333" />
                        <Text style={styles.optionText}>Settings</Text>
                    </TouchableOpacity>
                    <Divider />

                    <TouchableOpacity style={styles.optionRow}>
                        <MaterialIcons name="logout" size={24} color="#E53935" />
                        <Text style={[styles.optionText, { color: '#E53935' }]}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = {
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        gap: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
};

export default Profile;
