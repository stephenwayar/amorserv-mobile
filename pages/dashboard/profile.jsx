import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import DashboardLayout from "../../layouts/DashboardLayout";
import { get_profile } from "../../services/user";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext)
  const token = `bearer ${user.token}`
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const res = await get_profile(user.id, token);
        setProfile(res);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  console.log(profile)

  return (
    <DashboardLayout>
      <View style={styles.container}>
        <Text style={styles.heading}>Profile Information</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Full Name:</Text>
              <Text style={styles.value}>{profile?.fullName}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>User ID:</Text>
              <Text style={styles.value}>{profile?._id}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{profile?.email}</Text>
            </View>
          </>
        )}
      </View>
    </DashboardLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: "bold",
  },
  value: {
    flex: 2,
  },
});

export default Profile;
