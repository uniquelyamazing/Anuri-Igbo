import React from 'react';
import { ScrollView, StyleSheet, View , styles} from 'react-native';
import Button from './ButtonHost';
import A from '../assets/sounds/A.mp3';
import B from '../assets/sounds/B.mp3';
import CH from '../assets/sounds/CH.mp3';
import D from '../assets/sounds/D.mp3';
import E from '../assets/sounds/E.mp3';
import F from '../assets/sounds/F.mp3';
import G from '../assets/sounds/G.mp3';
import GB from '../assets/sounds/GB.mp3';
import GH from '../assets/sounds/GH.mp3';
import GW from '../assets/sounds/GW.mp3';
import H from '../assets/sounds/H.mp3';
import I from '../assets/sounds/I.mp3';
import Ị from '../assets/sounds/Ị.mp3';
import J from '../assets/sounds/J.mp3';
import K from '../assets/sounds/K.mp3';
import KP from '../assets/sounds/KP.mp3';
import KW from '../assets/sounds/KW.mp3';
import L from '../assets/sounds/L.mp3';
import M from '../assets/sounds/M.mp3';
import N from '../assets/sounds/N.mp3';
import Ñ from '../assets/sounds/Ñ.mp3';
import NW from '../assets/sounds/NW.mp3';
import NY from '../assets/sounds/NY.mp3';
import O from '../assets/sounds/O.mp3';
import Ọ from '../assets/sounds/Ọ.mp3';
import P from '../assets/sounds/P.mp3';
import R from '../assets/sounds/R.mp3';
import S from '../assets/sounds/S.mp3';
import SH from '../assets/sounds/SH.mp3';
import T from '../assets/sounds/T.mp3';
import U from '../assets/sounds/U.mp3';
import Ụ from '../assets/sounds/Ụ.mp3';
import V from '../assets/sounds/V.mp3';
import W from '../assets/sounds/W.mp3';
import Y from '../assets/sounds/Y.mp3';
import Z from '../assets/sounds/Z.mp3';

const Alphabet = () => {
  const styles = StyleSheet.create({
    customText: {
      // Define your custom text styles here
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  return (
    <ScrollView>
    <View>
      <Button soundFile={A} text="A " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={B} text="B " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={CH} text="CH" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={D} text="D " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={E} text="E " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={F} text="F " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={G} text="G " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={GB} text="GB" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={GH} text="GH" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={GW} text="GW" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={H} text="H " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={I} text="I " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={Ị} text="Ị " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={J} text="J " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={K} text="K " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={KP} text="KP" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={KW} text="KW" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={L} text="L " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={M} text="M " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={N} text="N " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={Ñ} text="Ñ " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={NW} text="NW" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={NY} text="NY" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={O } text="O " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={Ọ } text="Ọ " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={P } text="P " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={R } text="R " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={S } text="S " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={SH} text="SH" textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={T } text="T " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={U } text="U " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={Ụ } text="Ụ " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={V } text="V " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={W } text="W " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={Y } text="Y " textStyle={styles.customText} buttonColor="red" />
      <Button soundFile={Z } text="Z " textStyle={styles.customText} buttonColor="red" />
      
    </View>
    </ScrollView>
  );
};

export default Alphabet;
