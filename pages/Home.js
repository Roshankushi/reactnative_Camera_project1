
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class Home extends Component {

    render() {
        return(
            <View>
                <Text>home</Text>
                <Button title="Products" onPress={()=>this.props.navigation.navigate('Products')}/>
                <Button title="Carts" onPress={()=>this.props.navigation.navigate('Cart')}/>
            </View>
        );
    }

}