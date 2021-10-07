import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>


const ListItem = ({ item }) => {
  return (
    
    <TouchableOpacity activeOpacity = {0.5} /*onPress={item.key}*/>
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default () => {
  return (
   
    <View style={styles.container}>

      <TouchableOpacity
          activeOpacity={0.9}>
          <Image
            source={require('./img/chevron-left.png')}
            style={styles.buttonImageIconStyle}
      />
      </TouchableOpacity>

      
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}> 
        <ScrollView>
          <> 
            <Image
              source={require('./img/logo.png')}
              style={styles.logoStyle}
            />
            <Text style={styles.scontainer} style={styles.textAbout}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id risus nec erat fringilla venenatis at eget ante. Vestibulum vitae eros venenatis, pellentesque tortor quis, convallis quam. Sed vel <B>maximus</B> dolor. Sed a ultrices libero, vel suscipit. </Text>
            <Text style={styles.textVersion} > v1.0.0-pre-alpha</Text>
            <Text style={styles.textVersionSub} fontWeight= '600' color= '#A5A5A5' > versão </Text>
          </>

          <SectionList
            contentContainerStyle={{ paddingHorizontal: 40 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Nosso time',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
];

const pressHandler = (key) => {
  console.log(key)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  buttonImageIconStyle: {
    width: 13,
    height: 20,
    top: 31,
    left:359,
  },

  logoStyle: {
    position: 'absolute',
    top: 107,
    width: 83.31,
    height: 86.56,
    alignItems: 'center',
    left: 165,
    right: 165,
  },

  textAbout: { 
    top: 274,
    textAlign: 'center',
    textAlignVertical: "center",
    width: 328,
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 43,
    color: '#1F234B', 
  },

  textVersion: {
    top: 350,
    textAlign: 'center',
    textAlignVertical: "center",
    fontWeight: '700',
    lineHeight: 16.44,
    color: '#1F234B', 
  },
  textVersionSub: {
    top: 355,
    textAlign: 'center',
    textAlignVertical: "center",
    fontWeight: '700',
    lineHeight: 16.44,
    color: 'gray',
  },

  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#1F234B',
    marginTop: 500,
    marginBottom: 57,
  },

  item: {
    margin: 23,
  },

  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  itemText: {
    color: '#1F234B',
    marginTop: 10,
  },


});