import {
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import TextComponent from '../../../components/atoms/TextComponent';
import {getJournalsData} from '../api/journals.api';
import {IJournalItem, JournalQueryParams} from '../types';
import {Colors} from '../../../styles/colors';
import normalize from '../../../helpers/normalizeFontSize';
import {gStyles} from '../../../styles/gStyles';
import JournalListHeader from '../components/JournalListHeader';

const Journals = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [journalsData, setJournalsData] = useState<IJournalItem[]>([]);
  const [queryParams, setQueryParams] = useState<JournalQueryParams>({
    offset: 0,
    query: '',
    rows: 10,
  });

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getJournalsData(queryParams);
      if (response) {
        const {data} = response;
        setJournalsData(data.items);
      }
    } catch (error) {
      console.error('Error on get data');
    } finally {
      setIsLoading(false);
    }
  }, [queryParams]);

  useEffect(() => {
    getData();
  }, [getData]);

  const renderItem: ListRenderItem<IJournalItem> = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.7}
        style={[styles.cardItem, gStyles.card2, gStyles.shadow_10]}>
        <TextComponent text={item.title} bold type="medium" />
        <TextComponent text={item.publisher} type="small" />
        <View style={styles.cardRowsContainer}>
          <View style={styles.cardItem_rowIssn}>
            <TextComponent text={'ISSN:'} type="small" bold />
            {item.ISSN.map((issn, issnIdx) => (
              <View style={styles.issnitem} key={issnIdx}>
                <TextComponent text={issn} type="small" bold />
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={journalsData}
        renderItem={renderItem}
        style={styles.flatList}
        refreshing={isLoading}
        onRefresh={getData}
        ListHeaderComponent={JournalListHeader}
      />
    </View>
  );
};

export default Journals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  cardItem: {
    backgroundColor: Colors.white,
    padding: 16,
    marginHorizontal: normalize(16),
    marginTop: 8,
    marginBottom: normalize(8),
  },
  cardItem_rowIssn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: normalize(10),
    flexWrap: 'wrap',
  },
  issnitem: {
    backgroundColor: Colors.purple_400_a2,
    padding: 6,
    borderRadius: 10,
  },
  cardRowsContainer: {
    marginTop: 5,
  },
});
