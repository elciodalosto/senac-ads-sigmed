import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Patient } from "../components/tempInterfaces/Patient";

interface SideEffectsListProps {
  sideEffects: string[];
}

const SideEffectsList: React.FC<SideEffectsListProps> = ({ sideEffects }) => {
  const firstColumn = sideEffects.slice(0, Math.ceil(sideEffects.length / 2));
  const secondColumn = sideEffects.slice(Math.ceil(sideEffects.length / 2));

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {firstColumn.map((effect, index) => (
          <Text key={index} style={styles.effect}>
            {effect}
          </Text>
        ))}
      </View>
      <View style={styles.column}>
        {secondColumn.map((effect, index) => (
          <Text key={index} style={styles.effect}>
            {effect}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#548729",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  column: {
    flex: 1,
  },
  effect: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default SideEffectsList;
