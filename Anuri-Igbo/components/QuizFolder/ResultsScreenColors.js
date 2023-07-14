import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
  Share,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { captureRef } from "react-native-view-shot";

const ResultsScreenColors = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score = route.params.score;
  const answers = route.params.answers;
  const resultViewRef = useRef();

  const incorrectAnswers = answers.filter((item) => !item.answer);
  const allIncorrect = incorrectAnswers.length === answers.length;

  let resultText = "";
  let buttonText = "";

  console.log("Score:", score);
  console.log("Answers:", answers);
  console.log("Incorrect Answers:", incorrectAnswers);
  console.log("All Incorrect:", allIncorrect);

  if (allIncorrect) {
    resultText = "😒😒Very Poor😒😒";
    buttonText = "Back to Lesson";
  } else if (score <= 5) {
    resultText = "😒😒Poor Result😒😒";
    buttonText = "Back to Lesson";
  } else if (score >= 6 && score <= 7) {
    resultText = "😌😌Fair Result😌😌";
    buttonText = "Next Lesson";
  } else {
    resultText = "🥳🥳Excellent Result🥳🥳";
    buttonText = "Next Lesson";
  }

  console.log("Result Text:", resultText);
  console.log("Button Text:", buttonText);

 
  const handleShare = async () => {
    try {
      const resultViewSnapshot = await captureRef(resultViewRef.current, {
        format: "png",
        quality: 1,
      });

      Share.share({
        title: "My Quiz Result",
        url: resultViewSnapshot,
      });
    } catch (error) {
      console.error("Error sharing result:", error);
    }
  };

  const handleButtonClick = () => {
    if (resultText === "Poor Result" || resultText === "Very Poor") {
      handleRetakeLessons()
      navigation.navigate("Colors");
    } else {
      navigation.navigate("Basics");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Your Results</Text>
        <TouchableOpacity style={styles.shareContainer}>
          <Text onPress={handleShare}>Share</Text>
          <AntDesign
            name="sharealt"
            size={18}
            color="black"
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.questionCount}>
        <Text>Questions Answered</Text>
        <Text>({answers.length}/10)</Text>
      </View>

      <View style={styles.scoreCardContainer} ref={resultViewRef}>
        <Text style={styles.scoreCardTitle}>{resultText}</Text>
        {incorrectAnswers.length > 0 && (
          <FlatList
            numColumns={2}
            data={incorrectAnswers}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.answerItem}>
                <Text>{item.question}</Text>
                <AntDesign
                  name="closecircle"
                  size={20}
                  color="red"
                  style={styles.answerIcon}
                />
              </View>
            )}
          />
        )}
      </View>

      <Pressable style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width:'80%'
  },
  shareContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  shareIcon: {
    marginLeft: 4,
  },
  questionCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  scoreCardContainer: {
    backgroundColor: "white",
    height: 300,
    borderRadius: 7,
    marginTop: 20,
    padding: 20,
    width:'100%',
    justifyContent: "center",
  },
  scoreCardTitle: {
    color: "magenta",
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 8,
    marginBottom:10
  },
  answerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
   marginLeft:'auto',
   marginRight:'auto',
   marginTop:15
  },
  answerIcon: {
    marginLeft: 5,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ResultsScreenColors;