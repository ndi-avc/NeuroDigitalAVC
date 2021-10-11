/* eslint-disable global-require */
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";

function Header() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Image source={require("../../../img/chevron-left.png")} />
    </TouchableOpacity>
  );
}

export default Header;
