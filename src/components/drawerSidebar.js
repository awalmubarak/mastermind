import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";

export default DrawerSidebar = ({navigation})=> {

    return (
      <View style={styles.container}>
        <View style={styles.containertopRow}>
          <TouchableOpacity>
            <Image
                style={styles.imageTopRow}
                source={require('../assets/user-white.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerBottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Groups')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>My Groups</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Join Group</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CreateGroup')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Create Group</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerFooter}>
        <TouchableOpacity
            onPress={() => navigate('')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#067b7a'
  },
  containertopRow: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center',
    flex: 0.2
  },
  txtBottom: {
    marginLeft: 10,
    color: '#E6FAFF',
    fontSize: 15,
    fontWeight: '100'
  },
  imageTopRow: {
    height: 100,
    width: 100,
    ...Platform.select({
      ios: {
        borderRadius: 100 / 2
      },
      android: {
        borderRadius: 100
      }
    }),
    borderWidth: 1,
    borderColor: "white"
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containertopRowText: {
    flexDirection: 'column',
    marginLeft: 5
  },

  containerBottom: {
    backgroundColor: '#067b7a',
    marginTop: 20,
    flex: 0.6
  },
  containerBottomItem: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#E6FAFF',
    borderBottomWidth: 0.5
  },
  containerFooter:{
      flex: 0.2,
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 20
  }
});