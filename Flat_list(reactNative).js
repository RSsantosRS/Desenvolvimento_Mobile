import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pão de Queijo',
    descr: 'Pão de queijo mussarela crocante',
    preco: 'R$39,90 (KG)',
    image: require('./assets/paodequeijo.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pão na Chapa',
    descr: 'Pão na chapa com queijo prato e presunto.',
    preco: 'R$7,99 (UNID)',
    image: require('./assets/paonachapa.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pão brioche',
    descr: 'pão com fermentação natural e farinha orgânica.',
    preco: 'R$9,90 (KG)',
    image: require('./assets/brioche.png'),
  },
];

type ItemProps = {title: string, descr: string, preco: string, image: any};

const Item = ({title, descr, preco, image}: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.itemImage} source={image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.descr}>{descr}</Text>
      <Text style={styles.preco}>{preco}</Text>
    </View>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} descr={item.descr} preco={item.preco} image={item.image} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descr: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF0000',
    marginTop: 5,
  },
});

export default App;
