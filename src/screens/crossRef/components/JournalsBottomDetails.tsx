import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextComponent from '../../../components/atoms/TextComponent';
import normalize from '../../../helpers/normalizeFontSize';
import {gStyles} from '../../../styles/gStyles';

type JournalsBottomDetailsType = {
  offset: number;
  totalResults: number;
  journalsLength: number;
};

const JournalsBottomDetails = (props: JournalsBottomDetailsType) => {
  return (
    <View style={[styles.cardItem_rowIssn, gStyles.pv, gStyles.ph]}>
      <TextComponent text={`Page: ${props.offset + 1}`} type="medium" bold />
      <TextComponent
        text={`Total Results: ${props.totalResults}`}
        type="medium"
        bold
      />
      <TextComponent
        text={`Showin: ${props.journalsLength} of  ${props.totalResults}`}
        type="medium"
        bold
      />
    </View>
  );
};

export default JournalsBottomDetails;

const styles = StyleSheet.create({
  cardItem_rowIssn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: normalize(10),
    flexWrap: 'wrap',
  },
});
