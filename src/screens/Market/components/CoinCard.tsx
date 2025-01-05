import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CustomText from '../../../components/CustomText.tsx';
import {useTranslation} from 'react-i18next';
import {Icons} from '../../../assets';
import {Colors} from '../../../constants/colors.ts';

type Props = {
  name: string;
  price: string;
  change: number;
};

const CoinCard = (props: Props) => {
  // Props
  const {name, price, change} = props;

  // Hook
  const {t} = useTranslation();

  //Function
  const getChange = () => {
    if (change === 0) {
      return {
        text: '0',
        style: styles.change,
      };
    }

    return change > 0
      ? {
          text: `+${change}`,
          style: styles.profitText,
          icon: Icons.arrowUp,
        }
      : {
          text: change,
          style: styles.lostText,
          icon: Icons.arrowDown,
        };
  };

  // Render UI
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://tokenize-dev.com/assets/images/currency-logos/${name}.png`,
          }}
        />
        <View style={styles.coinDescContainer}>
          <CustomText style={styles.coin}>{t(name)}</CustomText>
          <CustomText style={styles.coinName}>{name}</CustomText>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <CustomText style={styles.price}>{price}</CustomText>
        <View style={styles.changeContainer}>
          <CustomText style={[styles.change, getChange().style]}>
            {getChange().text}%
          </CustomText>
          <Image source={getChange().icon} style={styles.changeImage} />
        </View>
      </View>
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 74,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    marginTop: 10,
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinDescContainer: {
    marginLeft: 10,
    gap: 10,
  },
  priceContainer: {
    alignItems: 'flex-end',
    gap: 10,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  profitText: {
    color: Colors.green,
  },
  lostText: {
    color: Colors.red,
  },
  changeImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  coin: {
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 18,
    color: Colors.black,
  },
  coinName: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: Colors.inactiveText,
  },
  price: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: Colors.black,
  },
  change: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 18,
  },
});
