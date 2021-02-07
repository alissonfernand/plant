/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../consts/colors';

import plants from '../consts/plants';

const width = Dimensions.get('window').width / 2 - 30;

const Home = ({navigation}) => {
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>
            Plant Shop
          </Text>
        </View>

        <TouchableOpacity>
          <Icon name="shopping-cart" size={28} />
        </TouchableOpacity>
      </View>

      {/* SEARCH */}
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* CATEGORYLIST */}
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* CARD PLANT */}
      <FlatList
        // columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
        numColumns={2}
        data={plants}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', item)}>
            <View style={styles.card}>
              <View style={{alignItems: 'flex-end'}}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: item.like
                      ? 'rgba(254, 42, 42, 0.2)'
                      : 'rgba(0,0,0,0.2)',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="favorite"
                    size={18}
                    color={item.like ? COLORS.red : COLORS.dark}
                  />
                </View>
              </View>

              <View style={{height: 100, alignItems: 'center'}}>
                <Image
                  source={item.img}
                  style={{flex: 1, resizeMode: 'contain'}}
                />
              </View>

              <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
                {item.name}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                  {item.price}
                </Text>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: COLORS.green,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: COLORS.white,
                      fontWeight: 'bold',
                    }}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
    marginRight: 20,
  },
  sortBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
});

export default Home;
