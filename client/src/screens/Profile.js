import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';
import styles from '../styles/profile.style'; // 👈 External stylesheet import

const Profile = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Profile Image and Name */}
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Dr. Imran Syahir</Text>
                    <Text style={styles.profileRole}>General Doctor</Text>
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
                        <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
