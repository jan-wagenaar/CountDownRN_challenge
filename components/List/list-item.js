import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Link from '../Link/link';
import formatDistanceString from '../../helpers/formatDistance';

const ListItem = ({ item }) => {
    const navigation = useNavigation();

    return (
        <Link
            onPress={() => navigation.navigate('EventDetail', { 
                id: item.id
            })}
            title="Event info"
    >
      <View 
            style={styles.container}
        >
            <Text
                style={styles.text}
            >
                {item.name}
            </Text>
            <View 
                style={styles.right}
            >
                <Text>
                    {formatDistanceString(item.datetime)}
                </Text>
            </View>
        </View>
    </Link>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#dee2e6'
    },
    text: {
        fontSize: 18,
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center'
    }
  });

export default ListItem;