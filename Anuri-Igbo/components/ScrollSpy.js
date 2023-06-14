import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrollSpy = () => {
  const sections = [
    { id: 'section1', title: 'Section 1' },
    { id: 'section2', title: 'Section 2' },
    { id: 'section3', title: 'Section 3' },
  ];

  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const offsetX = contentOffset.x;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const ref = refs.current[i];
      const { x, width } = ref.measureLayout();

      if (offsetX >= x && offsetX < x + width) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  const refs = useRef(sections.map(() => React.createRef()));

  useEffect(() => {
    const scrollListener = (event) => handleScroll(event);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <ScrollView horizontal onScroll={handleScroll} style={styles.container}>
      {sections.map((section, index) => (
        <View key={section.id} ref={refs.current[index]} style={styles.section}>
          <Text style={activeSection === section.id ? styles.activeText : styles.text}>{section.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    width: 200,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  activeText: {
    fontSize: 20,
    color: '#f00',
    fontWeight: 'bold',
  },
});

export default ScrollSpy;
