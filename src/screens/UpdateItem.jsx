import React, { useState, useEffect } from 'react';
import { StyleSheet, View , TextInput, Button } from 'react-native';

const UpdateItem = ({navigation, route}) => {

    const { item, products, setProducts} = route.params;
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [productQty, setProductQty] = useState('');

    useEffect(() => {
        if (item) {
            setProductId(item.id.toString());
            setProductName(item.productName);
            setProductQty(item.qty.toString());
        }
    }, [item]);

    const handleUpdate = () => {
        const updateProducts = products.map((prod) => 
            prod.id === item.id ? { ...prod, productName, qty: productQty} : prod
        )
        setProducts(updateProducts)

        navigation.goBack();
    }
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
          style={styles.inputDisabled}
          placeholder="Enter Product ID"
          value={productId}
          keyboardType='numeric'   
          onChangeText={setProductId}
          editable={false}
        />
  
        <Button title="Update" style={styles.button} onPress={handleUpdate} />
  
  
  
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        padding: 20,
        gap:10
      },
      input: {
        height: 40,
        width:"100%",
        borderColor: 'gray',
        borderWidth: 1,
        margin: 4,
        padding: 10,
      },
      inputDisabled: {
        height: 40,
        width:"100%",
        borderColor: '#f0f1f2',
        borderWidth: 1,
        margin: 4,
        padding: 10,
        color: "f0f1f2"
      },
      button: {
        width: '100%',
        flex: 1,
        justifyContent: 'end',
        alignItems: 'end',
        margin: 4
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
      },
      header: {
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
      },
})

export default UpdateItem;
