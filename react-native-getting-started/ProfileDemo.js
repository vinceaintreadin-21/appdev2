import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>My Portfolio</Text>

      {/* Personal Info */}
      <Text style={styles.info}>Course & Section: BSIS 3-B</Text>
      <Text style={styles.info}>Name: Vincent Lee T. Duriga</Text>
      <Text style={styles.info}>Age: 20</Text>
      <Text style={styles.info}>Favorite Hobby: Gaming, Eating, Sleeping</Text>

      {/* Short Bio */}
      <Text style={styles.subHeader}>Short Bio:</Text>
      <Text style={styles.text}>
        Aspiring Software Engineer/Backend Developer 
      </Text>

      {/* Pet Peeves */}
      <Text style={styles.subHeader}>3 Pet Peeves in Class/Classmate:</Text>
      <Text style={styles.text}>1. Low-key disrespecting a classmate</Text>
      <Text style={styles.text}>2. Loud noises that i could hear across the corridor</Text>
      <Text style={styles.text}>3. Side comments while someone is discussing something important</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 3,
  },
});
