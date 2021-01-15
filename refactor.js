import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableHighlight, Button, StyleSheet } from "react-native";
import someListener from "some-listener-library";

export default function RefactorComponent({ dataSet }){
  const [time, setTime] = useState(null);

  const getTimeStamp = () => {
    const date = new Date();
    setTime(date.toLocaleString());
    return date.toLocaleString();
  };

  const renderItem = ({ item, separators }) => {
    <TouchableHighlight
      onPress={() => _onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{getTimeStamp()}</Text>
      </View>
    </TouchableHighlight>;
  };

  useEffect(() => {
    getTimeStamp();
    someListener.register((e) => { })
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text>Current Time: {time}</Text>
        <Button title="Update Timestamp" onPress={getTimeStamp} />
      </View>
      <FlatList data={dataSet} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  timeCointainer: {
    width: "100%",
    height: 60,
  },
  item: {
    backgroundColor: "white",
  },
});

/*
  Write your notes below:
  1. Translate the react class syntax component to react hooks syntax
  2. Replacement of "state" by useState hook 
  3. Replacement of "componentDidMount()" by useEffect hook 
  4. getTimeStamp() now sets the local state value and returns it too
  5. styles were grouped to a StyleSheet
  6. renderItem() was modularized to clean up the code inside the return
*/
