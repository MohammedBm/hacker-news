import React, { Component } from 'react';
import { View, TabBarIOS, StyleSheet, TabBarItem } from 'react-native';
import { ScrollableTabView } from "react-native-scrollable-tab-view"

class TabBar extends Component {
    state = {
      structure: this.props.structure,
      selectedTab: this.props.selectedTab,
      iconSize: this.props.iconSize ? this.props.iconSize : 30,
      activeTintColor: this.props.activeTintColor ? this.props.activeTintColor : null
    }

  render() {
    return(      
      <TabBarIOS 
        tintColor={'#fff'}
        translucent={true}>
      </TabBarIOS>
    );
  }
}

export default TabBar;