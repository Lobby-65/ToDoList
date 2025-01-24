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


<script>
  let celsius = ''; // Variável para armazenar o valor digitado em Celsius
  let fahrenheit = ''; // Variável para armazenar o valor convertido em Fahrenheit

  function converter() {
    const celsiusNumber = parseFloat(celsius); // Converte o texto para número (float)
    if (!isNaN(celsiusNumber)) {
      fahrenheit = (celsiusNumber * 9 / 5) + 32; // Converte para Fahrenheit
    } else {
      fahrenheit = 'Valor inválido'; // Mensagem para valores não numéricos
    }
  }
</script>

<div>
  <label for="celsius-input">Temperatura em Celsius:</label>
  <input
    id="celsius-input"
    type="text"
    bind:value={celsius}
    placeholder="Digite a temperatura em Celsius"
  />
  <button on:click={converter}>Converter</button>

  {#if fahrenheit !== ''}
    <p>Temperatura em Fahrenheit: {fahrenheit}</p>
  {/if}
</div>
