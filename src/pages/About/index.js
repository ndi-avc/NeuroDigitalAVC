/* eslint-disable camelcase */
/* eslint-disable global-require */
import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// eslint-disable-next-line camelcase

import AppLoading from "expo-app-loading";

import { useFonts } from "expo-font";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";

import { Raleway_400Regular } from "@expo-google-fonts/raleway";

import { styles } from "./styles";

const DATA = [
  {
    key: "1",
    text: "Nickolas Silva",
    cargo: "Idealizador e PO",
    uri: require("../../../img/picture-nickolas.png"),
  },

  {
    key: "2",
    text: "Heli Ribeiro",
    cargo: "Tech Lead",
    uri: require("../../../img/picture-heli.png"),
  },

  {
    key: "3",
    text: "Robson Gomes",
    cargo: "Designer UX/UI",
    uri: require("../../../img/picture-robson.png"),
  },

  {
    key: "4",
    text: "Luan Moraes",
    cargo: "Programador Mobile",
    uri: require("../../../img/picture-luan.png"),
  },

  {
    key: "5",
    text: "Alanna Paiva",
    cargo: "Programadora Mobile",
    uri: "",
  },

  {
    key: "6",
    text: "Rafael Mendes",
    cargo: "Programador Mobile",
    uri: "",
  },

  {
    key: "7",
    text: "Gabriel Santos",
    cargo: "Conteúdo teórico",
    uri: require("../../../img/picture-gabriel.png"),
  },

  {
    key: "8",
    text: "Cristiane Torres",
    cargo: "Conteúdo teórico",
    uri: require("../../../img/picture-cristiane.png"),
  },

  {
    key: "9",
    text: "Rebeca Freitas",
    cargo: "Conteúdo teórico",
    uri: require("../../../img/picture-rebeca.png"),
  },

  {
    key: "10",
    text: "Erislândia Paiva",
    cargo: "Conteúdo teórico",
    uri: require("../../../img/picture-eris.png"),
  },

  {
    key: "11",
    text: "Luísa Silva",
    cargo: "Conteúdo teórico",
    uri: require("../../../img/picture-luiza.png"),
  },
];

const ListItem = ({ item }) => (
  <TouchableOpacity activeOpacity={0.5}>
    <View style={styles.item}>
      <Image
        source={
          item.uri ? item.uri : { uri: "https://picsum.photos/id/1008/200" }
        }
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text
        style={[
          styles.itemText,
          { fontFamily: "KronaOne_400Regular", fontSize: 9 },
        ]}
      >
        {item.text}
      </Text>
      <Text style={styles.itemCargo}>{item.cargo}</Text>
    </View>
  </TouchableOpacity>
);

function About() {
  const [fontsLoaded] = useFonts({
    KronaOne_400Regular,
    Raleway_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={require("../../../img/chevron-left.png")}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity> */}

      <StatusBar color="#fff" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <>
            <Image
              source={require("../../../img/logo.png")}
              style={styles.logoStyle}
            />
            <Text
              style={[styles.textAbout, { fontFamily: "Raleway_400Regular" }]}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
              risus nec erat fringilla venenatis at eget ante. Vestibulum vitae
              eros venenatis, pellentesque tortor quis, convallis quam. Sed vel{" "}
              maximus dolor. Sed a ultrices libero, vel suscipit.{" "}
            </Text>
            <Text style={styles.textVersion}> v1.0.0-pre-alpha</Text>
            <Text
              style={styles.textVersionSub}
              fontWeight="600"
              color="#A5A5A5"
            >
              {" "}
              versão{" "}
            </Text>
          </>

          <View style={{ paddingHorizontal: 40 }}>
            <Text
              style={[
                styles.sectionHeader,
                { fontFamily: "KronaOne_400Regular", fontSize: 12 },
              ]}
            >
              NOSSO TIME
            </Text>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <ListItem item={item} style={styles.item} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default About;
