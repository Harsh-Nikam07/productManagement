import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ItemDetails = ({navigation, route}) => {
    const { item, products, setProducts} = route.params;
    const [productName, setProductName] = useState('');
    const [productQty, setProductQty] = useState('');
    useEffect(() => {
        if (item) {
            setProductName(item.productName);
            setProductQty(item.qty.toString());
        }
    }, [item]);
    return (
        <View style={styles.container}>
            <Text>Product Name: {productName}</Text>
            <Text>Product Quantity: {productQty}</Text>
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
})

export default ItemDetails;
