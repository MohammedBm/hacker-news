import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { GiftedListView } from 'react-native-gifted-listview'

export default class RefreshableListView extends React.Component {
  constructor(){
    super(props)

    this.state = {
      renderRow: this.props.renderRow,
      backgroundColor: this.props.backgroundColor
        ? this.props.backgroundColor
        : '#FFFFFF',
      loadMoreText: this.props.loadMoreText
        ? this.props.loadMoreText
        : 'Load More...',
      renderHeader: this.props.renderHeader
        ? this.props.renderHeader
        : null
    }
  }

  onRefresh = (page = 1, callback, options) => {
    this.props.onRefresh(page, callback)
  }

  renderRow = (page =1, callback, options) => {
    return this.state.renderRow(row);
  }

  renderPaginationAllLoadedView = () => {
    return(<View/>)
  }

  renderPaginationWaitingView = (paginateCallback) => {
    return(
      <TouchableOpacity style={styles.PaginationView}
        onPress={paginateCallback}>
          <Text style={styles.loadMoreText}>
            {this.state.loadMoreText}
          </Text>
        </TouchableOpacity>
    )
  }

  renderHeaderView = () => {
    if(this.state.renderHeader) {
      return this.props.renderHeader();
    }
    return (null);
  }

  render(){
    return(
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}, this.props.style]}>
        <View style={styles.navBatSpace}>
          <GiftedListView rowView={this.renderRow} onFetch={this.onRefresh} paginationAllLoadedView={this.renderPaginationAllLoadedView} paginationWaitingView={this.renderPaginationWaitingView} headerView={this.renderHeaderView} PullToRefreshViewAndroidProps={{
            colors: ['#F6F6EF'],
            progressBackgroundColor: '#FF6600'
          }} customStyles={{
            refreshableView: {
              backgroundColor: this.state.backgroundColor,
              justifyContent: 'flex-end',
              paddingBottom: 12
            },
            paginationView: {
              backgroundColor: this.state.backgroundColor,
              height: 60
            }
          }} />
        </View>
      </View>
    )
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBarSpace: {
    height: (Platform.OS !== 'android')
      ? 64
      : 0
  },
  rowContainer: {
    paddingRight: 15,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  paginationView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  loadMoreText: {
    fontSize: 15,
    color: 'gray'
  }
});
