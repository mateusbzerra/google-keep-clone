import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, StatusBar } from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import Bottom from '../../components/Bottom';

export default class Home extends Component {
	state = {
		notes: []
	};
	static navigationOptions = {
		title: 'NotesApp',
		headerStyle: {
			backgroundColor: '#FFBB01'
		},
		headerTitleStyle: {
			color: '#fff'
		},
		headerBackTitle: null
	};

	async componentDidMount() {
		this.props.navigation.addListener('didFocus', () => {
			this.loadNotes();
		});
	}

	loadNotes = async () => {
		const { data } = await api.get('/notes');
		this.setState({ notes: data });
	};

	render() {
		console.log('state:notes', this.state.notes);
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<FlatList
					data={this.state.notes}
					numColumns={2}
					keyExtractor={(item) => String(item.id)}
					renderItem={({ item }) => (
						<Card
							data={item}
							viewNote={() => {
								this.props.navigation.navigate('Note', { id: item.id });
							}}
						/>
					)}
				/>

				<Bottom />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
