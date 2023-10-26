import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';
import React from 'react'

const NewViewer = ({navigation, route}) => {
    const {url} = route.params;
  return (
    <WebView source={{ uri: url }} style={{ flex: 1 }} />
  )
}

export default NewViewer

const styles = StyleSheet.create({})