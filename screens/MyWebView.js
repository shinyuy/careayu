import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';

const MyWebView = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{uri: 'https://meta.discourse.org/'}}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.flexContainer}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});

export default MyWebView;
