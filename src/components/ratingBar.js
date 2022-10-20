import React, { useState } from "react";

import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Ratings = () => {
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxiRating] = useState([1, 2, 3, 4, 5])
  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, key) => {
            return (
              <TouchableOpacity 
                activeOpacity={0.7}
                key={item}
                onPress={() => setdefaultRating(item)}>
                <Image style={styles.starImgStyle}
                  source={
                    item <= defaultRating ?
                      { uri: starImgFilled } :
                      { uri: starImgCorner }
                  } />
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomRatingBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  
  customRatingBarStyle: {
    flexDirection: 'row',
  },
  starImgStyle:{
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginLeft: 10
  }
})


export default Ratings
