import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    const [tarefa, setTarefa] = useState('');
    const [listaTarefas, setListaTarefas] = useState([]);

    const adicionarTarefa = () => {
        if (tarefa.trim() !== '') {
            setListaTarefas((novaLista) => [
                ...novaLista,
                { id: Math.random().toString(), titulo: tarefa },
            ]);
            setTarefa('');
            // Navegar para a tela "Detail" com os dados da tarefa
            navigation.navigate('Detail', { titulo: tarefa });
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o título da tarefa"
                value={tarefa}
                onChangeText={setTarefa}
            />
            <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
            <FlatList
                data={listaTarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.titulo}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    item: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
});

export { Home };