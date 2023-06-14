import React,{useState, useRef, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Button from './ButtonHost';
import N1 from '../assets/sounds/1.mp3';
import N2 from '../assets/sounds/2.mp3';
import N3 from '../assets/sounds/3.mp3';
import N4 from '../assets/sounds/4.mp3';
import N5 from '../assets/sounds/5.mp3';
import N6 from '../assets/sounds/6.mp3';
import N7 from '../assets/sounds/7.mp3';
import N8 from '../assets/sounds/8.mp3';
import N9 from '../assets/sounds/9.mp3';
import N10 from '../assets/sounds/10.mp3';
import N11 from '../assets/sounds/11.mp3';
import N12 from '../assets/sounds/12.mp3';
import N13 from '../assets/sounds/13.mp3';
import N14 from '../assets/sounds/14.mp3';
import N15 from '../assets/sounds/15.mp3';
import N16 from '../assets/sounds/16.mp3';
import N17 from '../assets/sounds/17.mp3';
import N18 from '../assets/sounds/18.mp3';
import N19 from '../assets/sounds/19.mp3';
import N20 from '../assets/sounds/20.mp3';
import N21 from '../assets/sounds/21.mp3';
import N22 from '../assets/sounds/22.mp3';
import N23 from '../assets/sounds/23.mp3';
import N24 from '../assets/sounds/24.mp3';
import N25 from '../assets/sounds/25.mp3';
import N26 from '../assets/sounds/26.mp3';
import N27 from '../assets/sounds/27.mp3';
import N28 from '../assets/sounds/28.mp3';
import N29 from '../assets/sounds/29.mp3';
import N30 from '../assets/sounds/30.mp3';
import N31 from '../assets/sounds/31.mp3';
import N32 from '../assets/sounds/32.mp3';
import N33 from '../assets/sounds/33.mp3';
import N34 from '../assets/sounds/34.mp3';
import N35 from '../assets/sounds/35.mp3';
import N36 from '../assets/sounds/36.mp3';
import N37 from '../assets/sounds/37.mp3';
import N38 from '../assets/sounds/38.mp3';
import N39 from '../assets/sounds/39.mp3';
import N40 from '../assets/sounds/40.mp3';
import N41 from '../assets/sounds/41.mp3';
import N42 from '../assets/sounds/42.mp3';
import N43 from '../assets/sounds/43.mp3';
import N44 from '../assets/sounds/44.mp3';
import N45 from '../assets/sounds/45.mp3';
import N46 from '../assets/sounds/46.mp3';
import N47 from '../assets/sounds/47.mp3';
import N48 from '../assets/sounds/48.mp3';
import N49 from '../assets/sounds/49.mp3';
import N50 from '../assets/sounds/50.mp3';
import N51 from '../assets/sounds/51.mp3';
import N52 from '../assets/sounds/52.mp3';
import N53 from '../assets/sounds/53.mp3';
import N54 from '../assets/sounds/54.mp3';
import N55 from '../assets/sounds/55.mp3';
import N56 from '../assets/sounds/56.mp3';
import N57 from '../assets/sounds/57.mp3';
import N58 from '../assets/sounds/58.mp3';
import N59 from '../assets/sounds/59.mp3';
import N60 from '../assets/sounds/60.mp3';
import N61 from '../assets/sounds/61.mp3';
import N62 from '../assets/sounds/62.mp3';
import N63 from '../assets/sounds/63.mp3';
import N64 from '../assets/sounds/64.mp3';
import N65 from '../assets/sounds/65.mp3';
import N66 from '../assets/sounds/66.mp3';
import N67 from '../assets/sounds/67.mp3';
import N68 from '../assets/sounds/68.mp3';
import N69 from '../assets/sounds/69.mp3';
import N70 from '../assets/sounds/70.mp3';
import N71 from '../assets/sounds/71.mp3';
import N72 from '../assets/sounds/72.mp3';
import N73 from '../assets/sounds/73.mp3';
import N74 from '../assets/sounds/74.mp3';
import N75 from '../assets/sounds/75.mp3';
import N76 from '../assets/sounds/76.mp3';
import N77 from '../assets/sounds/77.mp3';
import N78 from '../assets/sounds/78.mp3';
import N79 from '../assets/sounds/79.mp3';
import N80 from '../assets/sounds/80.mp3';
import N81 from '../assets/sounds/81.mp3';
import N82 from '../assets/sounds/82.mp3';
import N83 from '../assets/sounds/83.mp3';
import N84 from '../assets/sounds/84.mp3';
import N85 from '../assets/sounds/85.mp3';
import N86 from '../assets/sounds/86.mp3';
import N87 from '../assets/sounds/87.mp3';
import N88 from '../assets/sounds/88.mp3';
import N89 from '../assets/sounds/89.mp3';
import N90 from '../assets/sounds/90.mp3';
import N91 from '../assets/sounds/91.mp3';
import N92 from '../assets/sounds/92.mp3';
import N93 from '../assets/sounds/93.mp3';
import N94 from '../assets/sounds/94.mp3';
import N95 from '../assets/sounds/95.mp3';
import N96 from '../assets/sounds/96.mp3';
import N97 from '../assets/sounds/97.mp3';
import N98 from '../assets/sounds/98.mp3';
import N99 from '../assets/sounds/99.mp3';
import N200 from '../assets/sounds/200.mp3';
import N300 from '../assets/sounds/300.mp3';
import N400 from '../assets/sounds/400.mp3';
import N500 from '../assets/sounds/500.mp3';
import N600 from '../assets/sounds/600.mp3';
import N700 from '../assets/sounds/700.mp3';
import N800 from '../assets/sounds/800.mp3';
import N900 from '../assets/sounds/900.mp3';
import N1000 from '../assets/sounds/1000.mp3';
import N1Million from '../assets/sounds/1Million.mp3';
import N1Billion from '../assets/sounds/1Billion.mp3';
import N100 from '../assets/sounds/100.mp3';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, useAnimatedGestureHandler, runOnJS } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
const Numbers = () => {
  const [activeContent, setActiveContent] = useState('content1');
  const fadeAnim = useSharedValue(0);

  useEffect(() => {
    fadeIn();
  }, []);

  const handleButtonClick = (content) => {
    setActiveContent(content);
    fadeIn();
  };

  const fadeIn = () => {
    fadeAnim.value = withTiming(1, { duration: 500 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      // Perform any necessary actions when the swipe gesture starts
    },
    onActive: (event) => {
      // Calculate the swipe distance and perform actions accordingly
      if (event.translationX > 0) {
        // Swiped from left to right (previous content)
        runOnJS(handlePreviousContent)();
      } else {
        // Swiped from right to left (next content)
        runOnJS(handleNextContent)();
      }
    },
    onEnd: () => {
      // Perform any necessary actions when the swipe gesture ends
    },
  });

  const handlePreviousContent = () => {
    // Logic for displaying previous content
   setActiveContent('content2') 
  };

  const handleNextContent = () => {
    // Logic for displaying next content
  setActiveContent('content3')
  };
  const customTextStyles = {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  };
  const  customButtonStyle = {
    width:150,
    height:100,
    backgroundColor:'#f4d3ab',
    
  }
  const  customButtonStyles = {
    width:50,
    height:50,
    backgroundColor:'#f4d3ab',
    
  }
  const styles = StyleSheet.create({
    AlphabetView: {
      backgroundColor: '#73030F',
    },
    Alphabet: {
      padding: 10,
    },
    onerow: {
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',
    },
    Switch:{
      width:100,
      height:30,
      margin:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black',
      borderRadius:10,
      color:'white'
      
    }
  });
const handler = () => {
  pauseSound()
}
  return (
    <ScrollView style={styles.AlphabetView}>
    <View style={{width:'100%',padding:10, height:200, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, fontWeight:'bold'}}>NUMBERS</Text>
      <Text style={{fontSize:20, fontWeight:'bold', color:'#ffa449'}}>In Igbo</Text>
      
    </View>
    
    <Animated.View>
      <View style={{width:'100%', height:60, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
      <TouchableOpacity style={styles.Switch} onPress={() => handleButtonClick('content1')}>
        <Text style={{color:'white', fontWeight:'bold'}}>1 to 50</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Switch} onPress={() => handleButtonClick('content2')}>
        <Text style={{color:'white', fontWeight:'bold'}}>51 to 100</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Switch} onPress={() => handleButtonClick('content3')}>
        <Text style={{color:'white', fontWeight:'bold'}}>Others</Text>
      </TouchableOpacity>

      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.Alphabet, animatedStyle]}>
         {activeContent === 'content1' && <View >
         <View style={styles.onerow}>
          <Button buttonColor="#f4d3ab" soundFile={N1} text="1" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N2} text="2" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N3} text="3" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N4} text="4" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N5} text="5" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N6} text="6" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N7} text="7" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N8} text="8" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N9} text="9" textStyle={customTextStyles}   Button={customButtonStyles}/>
          <Button buttonColor="#f4d3ab" soundFile={N10} text="10" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N11} text="11" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N12} text="12" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N13} text="13" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N14} text="14" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N15} text="15" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N16} text="16" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N17} text="17" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N18} text="18" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N19} text="19" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N20} text="20" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N21} text="21" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N22} text="22" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N23} text="23" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N24} text="24" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N25} text="25" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N26} text="26" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N27} text="27" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N28} text="28" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N29} text="29" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N30} text="30" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N31} text="31" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N32} text="32" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N33} text="33" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N34} text="34" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N35} text="35" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N36} text="36" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N37} text="37" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N38} text="38" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N39} text="39" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N40} text="40" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N41} text="41" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N42} text="42" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N43} text="43" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N44} text="44" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N45} text="45" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N46} text="46" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N47} text="47" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N48} text="48" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N49} text="49" textStyle={customTextStyles} Button={customButtonStyles}  />
          <Button buttonColor="#f4d3ab" soundFile={N50} text="50" textStyle={customTextStyles} Button={customButtonStyles}  />
          </View>
          </View>}
          {activeContent === 'content2' && <View >
          <View style={styles.onerow}>
          <Button buttonColor="#f4d3ab" soundFile={N51} text="51" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N52} text="52" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N53} text="53" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N54} text="54" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N55} text="55" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N56} text="56" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N57} text="57" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N58} text="58" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N59} text="59" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N60} text="60" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N61} text="61" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N62} text="62" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N63} text="63" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N64} text="64" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N65} text="65" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N66} text="66" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N67} text="67" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N68} text="68" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N69} text="69" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N70} text="70" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N71} text="71" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N72} text="72" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N73} text="73" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N74} text="74" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N75} text="75" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N76} text="76" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N77} text="77" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N78} text="78" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N79} text="79" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N80} text="80" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N81} text="81" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N82} text="82" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N83} text="83" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N84} text="84" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N85} text="85" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N86} text="86" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N87} text="87" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N88} text="88" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N89} text="89" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N90} text="90" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N91} text="91" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N92} text="92" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N93} text="93" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N94} text="94" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N95} text="95" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N96} text="96" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N97} text="97" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N98} text="98" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N99} text="99" textStyle={customTextStyles}  Button={customButtonStyles} />
          <Button buttonColor="#f4d3ab" soundFile={N100} text="100" textStyle={customTextStyles} Button={customButtonStyles} />
          </View>
          </View>}
          {activeContent === 'content3' && <View >
          <View style={styles.onerow}>
          <Button buttonColor="#f4d3ab" soundFile={N200} text="200" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N300} text="300" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N400} text="409" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N500} text="500" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N600} text="600" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N700} text="700" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N800} text="800" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N900} text="900" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N1000} text="1000" textStyle={customTextStyles} buttonn={customButtonStyle}  />
          <Button buttonColor="#f4d3ab" soundFile={N1Million} text="1Million" textStyle={customTextStyles} buttonn={customButtonStyle}/>
          <Button buttonColor="#f4d3ab" soundFile={N1Billion} text="1Billion" textStyle={customTextStyles} buttonn={customButtonStyle}  />          
          </View>
          </View>}
      </Animated.View>
      </PanGestureHandler>
      </Animated.View>
      <TouchableOpacity style={{alignSelf:'center', alignItems:'center', justifyContent:'center', marginBottom:15,
      width:250, height:50, backgroundColor:'#f4ead4', borderRadius:50}}><Text style={{fontSize:18, fontWeight:'bold'}}>Take A Test</Text></TouchableOpacity>
    </ScrollView>
  );
};

export default Numbers;



