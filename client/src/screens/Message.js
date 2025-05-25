import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/message.style'; // 👈 Import external style
import { theme } from '../constants/theme';

const Message = () => {
  const messages = [
    {
      id: '1',
      username: 'Dr John Doe',
      message: 'Hey, how are you doing?',
      time: '2h ago',
      unread: true,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      username: 'Dr Jane Smith',
      message: 'Check out this new place!',
      time: '5h ago',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: '3',
      username: 'Dr Lara Jane',
      message: 'When are you free to meet?',
      time: '1d ago',
      unread: true,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: '4',
      username: 'Dr Ahmet Bashir',
      message: 'Thanks for the recommendation!',
      time: '2d ago',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: '5',
      username: 'Dr Gorav',
      message: 'Did you see the new update?',
      time: '3d ago',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.messageTextContainer}>
          <Text
            style={[
              styles.messageText,
              item.unread && styles.unreadMessage,
            ]}
            numberOfLines={1}
          >
            {item.message}
          </Text>
          {item.unread && <View style={styles.unreadBadge} />}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity style={styles.newMessageButton}>
          <Ionicons name="create-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Message;
