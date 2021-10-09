import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'
import {
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

const SECTIONS = [
    {
      title: 'Nosso time',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Nickolas Silva',
          cargo:'Idealizador e PO',
          uri: require('../../../img/picture-nickolas.png'),
        },

        { 
          key: '2',
          text: 'Heli Ribeiro',
          cargo:'Tech Lead',
          uri: require('../../../img/picture-heli.png'),
        },

        {
          key: '3',
          text: 'Robson Gomes',
          cargo:'Designer UX/UI',
          uri: require('../../../img/picture-robson.png'),
        },

        {
          key: '4',
          text: 'Luan Moraes',
          cargo:'Programador Mobile',
          uri: require('../../../img/picture-luan.png'),
        },

        {
          key: '5',
          text: 'Alanna Paiva',
          cargo:'Programadora Mobile',
          uri: '',
        },

        {
          key: '6',
          text: 'Rafael Mendes',
          cargo:'Programador Mobile',
          uri: '',
        },

        {
          key: '7',
          text: 'Gabriel Santos',
          cargo:'Conteúdo teórico',
          uri: require('../../../img/picture-gabriel.png'),
        },

        {
          key: '8',
          text: 'Cristiane Torres',
          cargo:'Conteúdo teórico',
          uri: require('../../../img/picture-cristiane.png'),
        },

        {
          key: '9',
          text: 'Rebeca Freitas',
          cargo:'Conteúdo teórico',
          uri: require('../../../img/picture-rebeca.png'),
        },

        {
          key: '10',
          text: 'Erislândia Paiva',
          cargo:'Conteúdo teórico',
          uri: require('../../../img/picture-eris.png'),
        },

        {
          key: '11',
          text: 'Luísa Silva',
          cargo:'Conteúdo teórico',
          uri: require('../../../img/picture-luiza.png'),
        },
      ],
    },
];

const ListItem = ({ item }) => {
    return (
      
      <TouchableOpacity activeOpacity = {0.5} /*onPress={item.key}*/>
        <View style={styles.item}>
          <Image 
            source={item.uri ? item.uri: {uri:'https://picsum.photos/id/1008/200'}}
            style={styles.itemPhoto}
            resizeMode="cover"

          />
          <Text style={styles.itemText}>{item.text}</Text>
          <Text style={styles.itemCargo}>{item.cargo}</Text>
        </View>
      </TouchableOpacity>
    );
};




function About(){
    return(
        <View style={styles.container}>

        <TouchableOpacity
            activeOpacity={0.9}>
            <Image
            source={require('../../../img/chevron-left.png')}
            style={styles.buttonImageIconStyle}
        />
        </TouchableOpacity>


        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}> 
        <ScrollView>
        <> 
          <Image
              source={require('../../../img/logo.png')}
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
}

 

export default About; 