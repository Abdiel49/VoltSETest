import {View, FlatList, ListRenderItem, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import ScreenView from '../../components/atoms/ScreenView';

import {getNewsPapers} from '../../api/chroniclingAmerica.api';

import {NewspaperType} from '../../types';
import TextComponent from '../../components/atoms/TextComponent';
import {Colors} from '../../styles/colors';
import normalize from '../../helpers/normalizeFontSize';
import {gStyles} from '../../styles/gStyles';
import ListSeparator from '../../components/atoms/ListSeparator';

const NewsPapers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newsPapers, setNewsPapers] = useState<NewspaperType[]>();

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getNewsPapers();
      if (response) {
        const {data} = response;
        setNewsPapers(data);
      }
    } catch (error) {
      console.error('Error on get data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const renderItem: ListRenderItem<NewspaperType> = ({item}) => {
    return (
      <View key={item.lccn} style={[styles.newsCard, gStyles.shadow_10]}>
        <TextComponent text={item.title} bold />

        <View style={styles.rowContent}>
          <TextComponent text={`State: ${item.state}`} />
          <TextComponent text={`lccn: ${item.state}`} />
        </View>
      </View>
    );
  };

  return (
    <ScreenView isLoading={isLoading} setIsLoading={setIsLoading}>
      <FlatList
        data={newsPapers}
        renderItem={renderItem}
        initialNumToRender={5}
        ItemSeparatorComponent={ListSeparator}
        indicatorStyle="white"
      />
    </ScreenView>
  );
};

export default NewsPapers;

const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: Colors.white,
    padding: normalize(16),
    borderRadius: 20,
    marginHorizontal: 10,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
