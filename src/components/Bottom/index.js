import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

const Bottom = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Note')}>
				<Text style={styles.text}>Insira uma nova nota...</Text>
			</TouchableOpacity>
			<View style={styles.iconView}>
				<TouchableOpacity>
					<Icon name="format-list-bulleted" size={20} color="#aaa" />
				</TouchableOpacity>
				<Icon name="mic" size={20} color="#aaa" />
				<Icon name="camera-alt" color="#aaa" size={20} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		shadowColor: '#000',
		shadowOffset: { x: 0, y: 15 },
		shadowOpacity: 0.5,
		backgroundColor: '#fff',
		paddingBottom: 25,
		paddingTop: 10
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
		padding: 5,
		color: '#aaa'
	},
	iconView: {
		flexDirection: 'row'
	}
});

export default withNavigation(Bottom);
