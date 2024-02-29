import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextComponent from '../../../components/atoms/TextComponent';
import {gStyles} from '../../../styles/gStyles';
import {IJournalItem} from '../types';
import {Colors} from '../../../styles/colors';
import normalize from '../../../helpers/normalizeFontSize';

type JournalListItemType = {
  journal: IJournalItem;
};

const JournalListItem = ({journal}: JournalListItemType) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.cardItem, gStyles.card2, gStyles.shadow_10]}>
      <TextComponent text={journal.title} bold type="medium" />
      <TextComponent text={journal.publisher} type="small" />
      <View style={styles.cardRowsContainer}>
        <View style={styles.cardItem_rowIssn}>
          <TextComponent text={'ISSN:'} type="small" bold />
          {journal.ISSN.map((issn, issnIdx) => (
            <View style={styles.issnitem} key={issnIdx}>
              <TextComponent text={issn} type="small" bold />
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JournalListItem;

const styles = StyleSheet.create({
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
