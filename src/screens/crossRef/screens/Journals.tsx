import {
  View,
  FlatList,
  ListRenderItem,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useRef} from 'react';

import {useJournalFetch} from '../hooks/useJournalsFetch';

import ListScrollController from '../../../components/molecules/ListScrollController';
import JournalListHeader from '../components/JournalListHeader';
import JournalListItem from '../components/JournalListItem';
import JournalsEmptyList from '../components/JournalsEmptyList';
import JournalsBottomDetails from '../components/JournalsBottomDetails';

import normalize from '../../../helpers/normalizeFontSize';

import {Colors} from '../../../styles/colors';
import {gStyles} from '../../../styles/gStyles';
import {IJournalItem} from '../types';

const Journals = () => {
  const {
    isLoading,
    journals,
    queryParams,
    totalResults,
    nextJournalsPage,
    reloadJournalsQuery,
    searchQuery,
  } = useJournalFetch();
  const flatlistRef = useRef<FlatList<IJournalItem>>(null);

  const goUpList = () => {
    if (!flatlistRef || !flatlistRef.current || !journals) {
      return;
    }
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: 0,
      viewOffset: 100,
    });
  };

  const goEndList = () => {
    if (!flatlistRef || !flatlistRef.current || !journals) {
      return;
    }
    flatlistRef.current.scrollToEnd();
  };

  const renderHeader = () => {
    return (
      <JournalListHeader
        queryParams={queryParams}
        onSubmintQuery={searchQuery}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View style={gStyles.mv}>
        {isLoading && (
          <ActivityIndicator size={42} color={Colors.purple_400_a8} />
        )}
      </View>
    );
  };

  const renderItem: ListRenderItem<IJournalItem> = ({item, index}) => {
    return <JournalListItem journal={item} key={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        data={journals}
        renderItem={renderItem}
        style={styles.flatList}
        refreshing={isLoading}
        onRefresh={reloadJournalsQuery}
        ListHeaderComponent={renderHeader}
        windowSize={10}
        onEndReached={nextJournalsPage}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={JournalsEmptyList}
      />
      <ListScrollController
        containerStyle={[styles.listControllContainer, gStyles.shadow_10]}
        onPressUp={goUpList}
        onPressDown={goEndList}
      />
      <JournalsBottomDetails
        offset={queryParams.offset}
        journalsLength={journals?.length || 0}
        totalResults={totalResults}
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
  listControllContainer: {
    flexDirection: 'column',
    gap: normalize(10),
    position: 'absolute',
    right: normalize(20),
    bottom: normalize(60),
  },
});
