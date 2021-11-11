import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Menu from '../Menu'
import styles from './styles'

const CartItem = () => {
  const [locked, setLocked ] = useState(true)
  const clickLock = () => {
    if(locked){
      setLocked(false);
    } else {
      setLocked(true);
    }
  }

  return (
    <View style={styles.carContainer}>
      <ImageBackground 
        source = {
          require('../../assets/image/background.png')
        }
        style={styles.backgroundImage}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="gear" size={24}
            style={styles.icon} 
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.headerTitle}>Aaditya</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name="briefcase" size={24}
            style={styles.icon} 
          />
        </TouchableOpacity>
      </View>

      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image 
          source = { 
            require('../../assets/image/battery.png')
          }
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}> 150 miles </Text>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}> Parked </Text>
      </View>
      
      <ScrollView>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity onPress={clickLock} >
            <View style={styles.controlsButton}>
              <FontAwesome5 name= {locked ? "lock" : "unlock-alt"} size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesome5 name="key" size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesome5 name="fan" size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <MaterialCommunityIcons name="lightning-bolt" size={24}
                style={styles.icon}
             />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <MaterialCommunityIcons name="bluetooth" size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  )
}

export default CartItem;
