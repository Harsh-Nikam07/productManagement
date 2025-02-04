import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Changed this

const HomeScreen = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (route.params?.products) {
      setProducts(route.params.products);
    }
  }, [route.params?.products]);

  const handleUpdateItem = (item) => {
    console.log('Updating item:', item);
    navigation.navigate('UpdateItem', {
      item,
      products,
      setProducts,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>Product</Text>
        <Text style={[styles.cell, styles.header]}>Qty</Text>
        <Text style={[styles.cell, styles.header]}>Actions</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.productName}</Text>
            <Text style={styles.cell}>{item.qty}</Text>
            <View style={styles.cell}>
              <Icon 
                name="pencil" 
                size={20} 
                color="#000"
                onPress={() => handleUpdateItem(item)}
              />
            </View>
          </View>
        )}
      />
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('addItem', { products, setProducts })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#c7c5c5',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',  // Added this
    borderRightColor: 'black',
  },
  header: {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;