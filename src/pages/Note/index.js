import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

export default class Note extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: null,
		headerStyle: {
			borderBottomWidth: 0
		},
		headerTintColor: '#404043',
		headerRight: (
			<View style={styles.headerRight}>
				<TouchableOpacity onPress={() => navigation.state.params.saveNote()}>
					<Icon style={{ paddingRight: 15 }} name="save" color="#616164" size={25} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.state.params.removeNote()}>
					<Icon name="delete" color="#616164" size={25} />
				</TouchableOpacity>
			</View>
		)
	});

	state = {
		title: '',
		content: '',
		id: ''
	};

	async componentDidMount() {
		this.props.navigation.setParams({
			saveNote: () => this.saveNote(),
			removeNote: () => this.removeNote()
		});
		const id = this.props.navigation.getParam('id');
		if (id) {
			const { data } = await api.get(`notes/${id}`);
			this.setState({ title: data.title, content: data.content, id });
		}
	}

	saveNote = async () => {
		const { title, content, id } = this.state;
		if (title.length > 0 && content.length > 0) {
			const note = {
				title,
				content,
				user: 'Mateus Bezerra'
			};
			if (id) {
				const { data } = await api.put(`notes/${id}`, note);
				console.log('editado:', data);
			} else {
				const { data } = await api.post('notes', note);
				console.log('adicionado', data);
			}
		}
	};

	removeNote = async () => {
		const { id } = this.state;
		if (id) {
			const { data } = await api.delete(`notes/${id}`);
			Alert.alert('Nota Apagada com sucesso!', [ { text: 'OK', onPress: () => {} } ], {
				cancelable: false
			});
		}
	};

	render() {
		const { title, content } = this.state;
		return (
			<View style={styles.container}>
				<TextInput
					onChangeText={(title) =>
						this.setState({
							title
						})}
					value={title}
					style={styles.title}
					placeholder="Título"
				/>
				<TextInput
					onChangeText={(content) =>
						this.setState({
							content
						})}
					value={content}
					style={styles.content}
					multiline
					placeholder="Conteúdo"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingTop: 10
	},
	title: {
		fontSize: 25,
		paddingBottom: 15,
		color: '#242424'
	},
	content: {
		color: '#242424',
		fontSize: 15
	},
	headerRight: {
		flexDirection: 'row',
		paddingRight: 15
	}
});
