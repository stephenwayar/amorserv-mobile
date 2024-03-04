import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashboardLayout from "../../layouts/DashboardLayout";

const Home = () => {
  return (
    <DashboardLayout>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Welcome to the Home Page
        </Text>
      </View>
    </DashboardLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Home;
