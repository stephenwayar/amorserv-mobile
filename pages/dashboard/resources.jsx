import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashboardLayout from "../../layouts/DashboardLayout";

const Resources = () => {
  return (
    <DashboardLayout>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          This is our resources page
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

export default Resources;
