import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'

const CustomButton = (props) => {
    return ( 
        <TouchableOpacity 
        style={{...styles.buttonStyle, backgroundColor: props.backgroundColor}}
        onPress = {props.buttonPressed}>
        <Text style={styles.textStyle}>{props.children}</Text>
            </TouchableOpacity>
    )
}

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 16,
		fontWeight:'600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
        backgroundColor: 'purple' ,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
}
export default CustomButton;
