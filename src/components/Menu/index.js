import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import menuItems from './menuItems'
import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      {menuItems.map(item => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesome name={item.name} size={24}
              style={styles.icon}
            />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesome name="angle-right" size={24}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      ))}    
    </View>
  )
}

export default Menu;
