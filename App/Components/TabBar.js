import React from 'react';
import { View, TabBarIOS, StyleSheet, Platform } from 'react-native';
import { ScrollableTabView } from "react-native-scrollable-tab-view"
import Icon from 'react-native-vector-icons/FontAwesome'


export default class TabBar extends React.Component {

    state = {
      structure: this.props.structure,
      selectedTab: this.props.selectedTab,
      iconSize: this.props.iconSize ? this.props.iconSize : 30,
      activeTintColor: this.props.activeTintColor ? this.props.activeTintColor : null
    }

  render(){
    return (      
      <TabBarIOS 
        tintColor={this.state.activeTintColor}
        translucent={true}>
        {this.state.structure.map((tabProps, tabIndex) => 
          <Icon.TabBarItem
            title = {tabProps.iconName}
            iconSize = {this.state.iconSize}
            selected = {tabIndex == this.state.selectedTab}
            onPress={() => { this.setState({ selectedTab: tabIndex }); }}
            >
              {tabProps.renderContent()}
            </Icon.TabBarItem>
        )}
      </TabBarIOS>
    );
  }


}