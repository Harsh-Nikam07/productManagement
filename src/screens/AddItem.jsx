import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const AddItem = ({ navigation, route }) => {
  const [productName, setProductName] = useState('');
  const [productQty, setProductQty] = useState('');
  const [productId, setProductId] = useState('');

  // Ensure route.params is defined and provide default values
  const { products = [], setProducts } = route.params || {};

  const handleAddProduct = () => {
    if (!productName || !productQty || !productId) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newProduct = { id: productId, productName, qty: productQty };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setProductName('');
    setProductQty('');
    setProductId(''); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Product Name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Product Quantity"
        value={productQty}
        keyboardType="numeric"
        onChangeText={setProductQty}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Product ID"
        value={productId}
        keyboardType="numeric"
        onChangeText={setProductId}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    padding: 20,
    gap: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
    padding: 10,
  },
});

export default AddItem;