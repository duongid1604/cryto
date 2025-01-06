import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CustomText from '../../../components/CustomText.tsx';
import {Icons} from '../../../assets';
import {Colors} from '../../../constants/colors.ts';
import {MarketDataListType, MarketSummaryType} from '../../../types/market.ts';
import {formatPrice} from '../../../utils/formatPrice.ts';

type Props = {
  item: MarketDataListType;
  summary: MarketSummaryType[];
};

const CoinCard = (props: Props) => {
  // Props
  const {item, summary} = props;

  // Function
  const summaryItem = summary?.find(s => s.marketId === item.id);

  const getChange = () => {
    if (!summaryItem) {
      return {
        text: '0',
        style: styles.change,
      };
    }

    const change =
      ((Number(summaryItem.lastPrice) - Number(summaryItem.prevPrice)) /
        Number(summaryItem.prevPrice)) *
      100;

    return change === 0
      ? {
          text: '0',
          style: styles.change,
        }
      : change > 0
      ? {
          text: `+${formatPrice(change.toFixed(2))}`,
          style: styles.profitText,
          icon: Icons.arrowUp,
        }
      : {
          text: formatPrice(change.toFixed(2)),
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
            uri: `https://tokenize-dev.com/assets/images/currency-logos/${item.marketCurrency.toLowerCase()}.png`,
          }}
        />
        <View style={styles.coinDescContainer}>
          <CustomText style={styles.coin}>{item.marketCurrency}</CustomText>
          <CustomText style={styles.coinName}>
            {item.marketCurrencyLong}
          </CustomText>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <CustomText style={styles.price}>
          ${summaryItem ? formatPrice(summaryItem.openPrice) : 'N/A'}
        </CustomText>
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
    gap: 8,
  },
  priceContainer: {
    alignItems: 'flex-end',
    gap: 8,
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
