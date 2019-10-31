import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationNativeContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function Home() {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
    </View>
  )
}

function Nav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationNativeContainer>
      <Nav />
    </NavigationNativeContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
