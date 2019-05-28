import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Card = ({ data, viewNote }) => {
	console.log(data);
	return (
		<TouchableOpacity onPress={viewNote} style={styles.container}>
			<Text style={styles.title}>{data.title}</Text>
			<Text style={styles.content}>{data.content}</Text>
		</TouchableOpacity>
	);
};

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'rgba(0,0,0,.1)',
		padding: 15,
		margin: 5,
		width: width / 2 - 14
	},
	title: {
		color: '#4a4a4a',
		fontWeight: 'bold',
		paddingBottom: 15
	},
	content: {
		color: '#838383'
	}
});

export default Card;
