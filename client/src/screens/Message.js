import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

const Message = () => {
  // Sample data for messages
  const messages = [
    {
      id: '1',
      username: 'Dr John Doe',
      message: 'Hey, how are you doing?',
      time: '2h ago',
      unread: true,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: '2',
      username: 'Dr Jane Smith',
      message: 'Check out this new place!',
      time: '5h ago',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: '3',
      username: 'Dr Lara Jane',
      message: 'When are you free to meet?',
      time: '1d ago',
      unread: true,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: '4',
      username: 'Dr Ahmet Bashir',
      message: 'Thanks for the recommendation!',
      time: '2d ago',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: '5',
      username: 'Dr Gorav',
      message: 'Did you see the new update?',
      time: '3d ago',
      unread: false,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
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
              item.unread && styles.unreadMessage
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
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      
      <TouchableOpacity style={styles.newMessageButton}>
        <Ionicons name="create-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
  messageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    color: '#666',
    flex: 1,
    marginRight: 5,
  },
  unreadMessage: {
    fontWeight: 'bold',
    color: 'black',
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  newMessageButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default Message;