import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Profile screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  pageTitle: {fontSize: 20, color: 'black', fontWeight: '600'},
});
