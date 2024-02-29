import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SearchComponent from '../../../components/molecules/SearchComponent';
import TextComponent from '../../../components/atoms/TextComponent';
import InputField from '../../../components/molecules/InputField';

import normalize from '../../../helpers/normalizeFontSize';

import {Colors} from '../../../styles/colors';
import {gStyles} from '../../../styles/gStyles';
import {JournalQueryParams} from '../types';

type JournalListHeaderProps = {
  onSearch?: (text: string) => void;
  onSubmintQuery?: (query: JournalQueryParams) => void;
  queryParams?: JournalQueryParams;
};

const JournalListHeader = (props: JournalListHeaderProps) => {
  const [showMore, setShowMore] = useState(false);
  const [queryParams, setQueryParams] = useState<JournalQueryParams>(
    props.queryParams || {
      offset: 0,
      query: '',
      rows: 10,
    },
  );

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleOnChangeQuery = (
    key: keyof JournalQueryParams,
    value: string,
  ) => {
    if (key === 'query') {
      setQueryParams(prev => ({...prev, query: value}));
    }
    if (key === 'rows') {
      const rows = Math.abs(+value);
      setQueryParams(prev => ({...prev, rows}));
    }
    if (key === 'offset') {
      const offset = Math.abs(+value) - 1;
      setQueryParams(prev => ({...prev, offset}));
    }
  };

  const handleSubmitQuery = () => {
    props.onSubmintQuery && props.onSubmintQuery(queryParams);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SearchComponent
          onSearch={handleSubmitQuery}
          placeholder="Search"
          value={queryParams.query}
          onChangeText={text => handleOnChangeQuery('query', text)}
        />
        {!showMore ? (
          <View style={gStyles.shadow_10}>
            <AntDesign
              name="downcircle"
              style={styles.showMoreIcon}
              onPress={toggleShowMore}
            />
          </View>
        ) : (
          <View style={gStyles.shadow_10}>
            <AntDesign
              name="upcircle"
              style={styles.showMoreIcon}
              onPress={toggleShowMore}
            />
          </View>
        )}
      </View>
      {showMore && (
        <View style={[styles.row, gStyles.mt2]}>
          <InputField
            label="Rows:"
            value={`${queryParams.rows}`}
            keyboardtype="numeric"
            onChangeText={text => handleOnChangeQuery('rows', text)}
          />
          <InputField
            label="Page:"
            value={`${queryParams.offset + 1}`}
            keyboardtype="numeric"
            onChangeText={text => handleOnChangeQuery('offset', text)}
          />

          <TouchableOpacity
            style={[styles.button, gStyles.shadow_10]}
            onPress={handleSubmitQuery}
            activeOpacity={0.6}>
            <TextComponent text={'Done'} style={styles.buttonText} bold />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default JournalListHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: Colors.blue,
  },
  showMoreIcon: {
    fontSize: 28,
    color: Colors.purple_400_a8,
    marginLeft: 10,
  },
  button: {
    backgroundColor: Colors.purple_400_a8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
  },
});
