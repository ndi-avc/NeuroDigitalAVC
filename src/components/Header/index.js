import React from 'react';
import { Container, goBackButton } from './styles';
import {useNavigation} from '@react-navigation/native';

function Header (){
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.5}> 
            <Image 
                source={require('../../../img/chevron-left.png' )} 
            /> 
        </TouchableOpacity>
    )
    
}

export default Header; 