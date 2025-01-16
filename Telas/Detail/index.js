import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Detail = ({ route, navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tarefa: {route.params.titulo}</Text>

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    taskTitle: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default Detail;