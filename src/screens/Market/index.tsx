import React, {useState} from 'react';
import {useStyle} from './styles.ts';
import {Image, TouchableOpacity, View} from 'react-native';
import CustomText from '../../components/CustomText.tsx';
import {Icons} from '../../assets';
import CoinButton from './components/CoinButton.tsx';
import {List} from '@ui-kitten/components';
import CoinCard from './components/CoinCard.tsx';

const coins = ['btc', 'eth', 'sgd', 'usd'];
const dummyCoins = [
  {id: '1', name: 'btc', price: '$3,535.24', change: 0.14},
  {id: '2', name: 'eth', price: '$1,200.50', change: -0.50},
  {id: '4', name: 'usd', price: '$1.00', change: 0.00},
];

const Market = () => {
  //Hook
  const {styles} = useStyle();

  //State
  const [activeCoin, setActiveCoin] = useState<string>(coins[0]);

  //Render UI
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.marketText}>Markets</CustomText>
        <Image style={styles.searchIcon} source={Icons.search} />
      </View>

      <View style={styles.coinList}>
        {coins.map(coin => (
          <TouchableOpacity key={coin} onPress={() => setActiveCoin(coin)}>
            <CoinButton name={coin} isActive={activeCoin === coin} />
          </TouchableOpacity>
        ))}
      </View>

      <List
        data={dummyCoins}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CoinCard name={item.name} price={item.price} change={item.change} />
        )}
      />
    </View>
  );
};
export default Market;
