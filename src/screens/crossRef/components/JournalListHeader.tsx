import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SearchComponent from '../../../components/molecules/SearchComponent';

import normalize from '../../../helpers/normalizeFontSize';
import {Colors} from '../../../styles/colors';
import TextComponent from '../../../components/atoms/TextComponent';
import {InputLabel, TextField} from '@mui/material';
import InputField from '../../../components/molecules/InputField';
import {gStyles} from '../../../styles/gStyles';
// import InputLabel from '../../../components/molecules/InputLabel';

type JournalListHeaderProps = {
  onSearch?: (text: string) => void;
};

const JournalListHeader = (props: JournalListHeaderProps) => {
  const [showMore, setShowMore] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SearchComponent onSearch={props.onSearch} placeholder="Search" />
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
          <InputField label="Rows:" />
          <InputField label="Page:" />

          <TouchableOpacity
            style={[styles.button, gStyles.shadow_10]}
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
