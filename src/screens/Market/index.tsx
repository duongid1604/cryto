import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useStyle} from './styles.ts';
import {Image, RefreshControl, TouchableOpacity, View} from 'react-native';
import CustomText from '../../components/CustomText.tsx';
import {Icons} from '../../assets';
import CoinButton from './components/CoinButton.tsx';
import {List} from '@ui-kitten/components';
import CoinCard from './components/CoinCard.tsx';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {QueryKeys} from '../../api/queryKeys.ts';
import {getMarkets, getMarketSummaries} from '../../api/market.ts';
import {AuthContextType, useAuth} from '../../contexts/AuthContext.tsx';
import {MarketDataListType, MarketDataType} from '../../types/market.ts';
import Skeleton from '../../components/Skeleton.tsx';

const Market = () => {
  // Hook
  const {styles} = useStyle();
  const queryClient = useQueryClient();
  const listRef = useRef<List>(null);

  // State
  const [activeCoin, setActiveCoin] = useState<string | undefined>(undefined);
  const [refreshing, setRefreshing] = useState(false);
  const {logout} = useAuth() as AuthContextType;

  // Life cycle
  const {data: marketData, isPending: marketDataLoading} = useQuery({
    queryKey: [QueryKeys.Markets],
    queryFn: async () => {
      const res = await getMarkets();
      setActiveCoin(res.data[0].title);

      return {
        coinList: res.data.map((coin: MarketDataType) => coin.title),
        data: res.data,
      };
    },
  });

  const {data: summariesData, isPending: summariesLoading} = useQuery({
    queryKey: [QueryKeys.MarketSummaries],
    queryFn: async () => {
      const res = await getMarketSummaries();

      return res.data;
    },
  });

  const filteredData = useMemo(() => {
    return (
      marketData?.data?.find(
        (coin: MarketDataType) => coin.title === activeCoin,
      )?.list || []
    );
  }, [activeCoin, marketData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries({queryKey: [QueryKeys.Markets]});
    await queryClient.invalidateQueries({
      queryKey: [QueryKeys.MarketSummaries],
    });
    setRefreshing(false);
  }, [queryClient]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({offset: 0, animated: true});
    }
  }, [activeCoin]);

  // Render UI
  const _renderCoinList = useMemo(() => {
    if (marketDataLoading) {
      return <Skeleton height={32} />;
    }

    return marketData?.coinList?.map((coin: string) => (
      <TouchableOpacity key={coin} onPress={() => setActiveCoin(coin)}>
        <CoinButton
          name={coin}
          isActive={activeCoin === coin}
          length={marketData?.coinList?.length}
        />
      </TouchableOpacity>
    ));
  }, [activeCoin, marketData?.coinList, marketDataLoading]);

  const _renderList = useMemo(() => {
    if (marketDataLoading && summariesLoading) {
      return (
        <List
          ref={listRef}
          style={styles.list}
          data={Array.from({length: 10})}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => <Skeleton height={74} />}
        />
      );
    }

    return (
      <List
        ref={listRef}
        style={styles.list}
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: MarketDataListType}) => (
          <CoinCard item={item} summary={summariesData} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    );
  }, [
    marketDataLoading,
    summariesLoading,
    styles.list,
    filteredData,
    summariesData,
    refreshing,
    onRefresh,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText style={styles.marketText}>Markets</CustomText>
        <TouchableOpacity onPress={() => logout()}>
          <Image style={styles.searchIcon} source={Icons.search} />
        </TouchableOpacity>
      </View>

      <View style={styles.coinList}>{_renderCoinList}</View>

      {_renderList}
    </View>
  );
};
export default Market;
