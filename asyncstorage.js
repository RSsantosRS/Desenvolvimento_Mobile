import { Text, FlatList, Button, TextInput, View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// --- FUNÇÕES DO ASYNCSTORAGE CORRIGIDAS ---

// Função para SALVAR os dados
// Agora ela cria um objeto e o transforma em string JSON
const _storeData = async (codigo, nome, quantidade) => {
  // Validação para não salvar campos vazios
  if (!codigo || !nome || !quantidade) {
      alert("Atenção", "Por favor, preencha todos os campos.");
    return;
  }
  try {
    const itemParaSalvar = {
      nome: nome,
      quantidade: quantidade,
    };
    // Converte o objeto para uma string JSON antes de salvar
    await AsyncStorage.setItem(codigo, JSON.stringify(itemParaSalvar));
      alert("Sucesso!", "Produto salvo com sucesso.");
  } catch (error) {
      alert("Erro ao salvar", error.toString());
  }
};

// Função para LER um item específico
// Agora ela lê a string e a converte de volta para um objeto
const _retrieveData = async (codigo) => {
  alert(codigo)
  if (!codigo) {
    alert("Atenção", "Digite um código para buscar.");
    return;
  }
  try {
    const value = await AsyncStorage.getItem(codigo);
    if (value !== null) {
      // Converte a string JSON de volta para um objeto
      const item = JSON.parse(value);
      // Mostra os dados de forma organizada
      alert(
        `Produto Encontrado \nCódigo: ${codigo} \nNome: ${item.nome} \nQuantidade: ${item.quantidade}`
      );
    } else {
      alert("Não encontrado", "Nenhum produto encontrado com este código.");
    }
  } catch (error) {
      alert("Erro ao buscar", error.toString());
  }
};

// --- COMPONENTES ---

const RegistrarProduto = () => {
  const [codigoVal, setCodigo] = useState('');
  const [nomeVal, setNome] = useState('');
  const [quantidadeVal, setQuantidade] = useState('');

  const handleSalvar = () => {
    _storeData(codigoVal, nomeVal, quantidadeVal);
    setCodigo("");
    setNome('');
    setQuantidade(``);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Código do Produto'
        value={codigoVal}
        onChangeText={setCodigo}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder='Nome do Produto'
        value={nomeVal}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder='Quantidade'
        value={quantidadeVal}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <Button onPress={handleSalvar} title="Salvar Produto" />
      <View style={{ marginTop: 20 }}>
        <Button color="grey" onPress={() => _retrieveData(codigoVal)} title="Verificar Produto pelo Código" />
      </View>
    </View>
  )
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("Registrar")} title="Registrar Novo Produto" />
    </View>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registrar" component={RegistrarProduto} options={{ title: 'Registrar Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- ESTILOS ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
