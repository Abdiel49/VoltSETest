import {Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ScreenView from '../../components/atoms/ScreenView';
import ImageComponent from '../../components/atoms/ImageComponent';
import {DogCeoType} from '../../types';
import {getDocCeo} from '../../api/dogceo.api';

const DogCeo = () => {
  const [dogData, setDogData] = useState<DogCeoType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    console.log('get data called!');
    setIsLoading(true);
    try {
      const response = await getDocCeo();
      if (response) {
        const {data} = response;
        console.log('data dog', data);
        setDogData(data);
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

  return (
    <ScreenView isLoading={isLoading} setIsLoading={setIsLoading}>
      {!dogData && <View />}
      {dogData && (
        <>
          <View>
            <ImageComponent source={{uri: dogData?.message}} />
          </View>

          <View>
            <Text>{dogData?.status}</Text>
          </View>
        </>
      )}
    </ScreenView>
  );
};

export default DogCeo;
