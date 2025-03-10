import React, { ReactNode } from "react"
import { View, ScrollView, StyleSheet, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type PageWrapperProps = {
  children: ReactNode
  scrollable?: boolean
  style?: ViewStyle
  contentContainerStyle?: ViewStyle
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  scrollable = false,
  style = {},
  contentContainerStyle = {}
}) => {
  if (scrollable) {
    return (
      <SafeAreaView style={[styles.safeArea, style]}>
        <ScrollView
          contentContainerStyle={[styles.container, contentContainerStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <View style={[styles.container, contentContainerStyle]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexGrow: 1
  }
})

export default PageWrapper
