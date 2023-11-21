import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, View } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { getUserDetails } from '@/api';
import { Seperator, Text, UserInfoLabel } from '@/components';
import { useStyles } from '@/hooks';
import { User, UserDetailsRouteProp } from '@/types';
import { generateCardNumber } from '@/utils';

export const UserDetails = () => {
  const styles = useStyles(styleSheet);
  const {
    params: { id },
  } = useRoute<UserDetailsRouteProp>();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUserAsync = async () => {
      setLoading(true);
      const userDetails = await getUserDetails(id);
      setLoading(false);
      setUser(userDetails);
    };
    getUserAsync();
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {!user && <Text>User not found</Text>}
      {user && (
        <>
          <View style={styles.head}>
            <View style={styles.imageFrame}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: user.picture.large }}
                  style={styles.image}
                />
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <UserInfoLabel
              label={user.name.first + ' ' + user.name.last}
              iconName="Account"
            />
            <Seperator />

            <UserInfoLabel label={user.email} iconName="Email" />
            <Seperator />

            <UserInfoLabel
              label={user.location.city + ' / ' + user.location.country}
              iconName="MapMarker"
            />
            <Seperator />

            <UserInfoLabel label={user.cell} iconName="Phone" />
            <Seperator />

            <UserInfoLabel
              label={generateCardNumber()}
              iconName="CardBulleted"
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styleSheet = useStyles.createStyleSheet(({ theme }) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
  },
  loadingContainer: {
    justifyContent: 'center',
  },
  head: {
    flex: 1,
    backgroundColor: theme.colors.skyblue,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageFrame: {
    padding: theme.spacing.xs,
    borderRadius: theme.roundness.full,
    backgroundColor: theme.colors.light,
    bottom: -theme.spacing.xxl,
  },
  imageContainer: {
    borderRadius: theme.roundness.full,
    overflow: 'hidden',
  },
  image: {
    width: 128,
    height: 128,
  },
  body: {
    flex: 3,
    marginTop: theme.spacing.xl + theme.spacing.md,
    padding: theme.spacing.xl,
    alignItems: 'center',
  },
}));
