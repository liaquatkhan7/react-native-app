//import library
import React from 'react';
import { Text, View } from 'react-native';

// Male a Componenet
class Header extends React.Component{
    render(){
        // const { textStyle, viewStyle } = styles;
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}> Albums!! </Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 200 }, 
        // shadowOpacity: 1,
        borderColor: "#000",
        borderRadius: 0.1

    },
    textStyle: {
        fontSize: 40,
        color: '#000'
    }
}



//Make the componenet avalble
export default Header; 