import React from 'react';
import { Image, View } from 'react-native';

function Loader(props) {
    return (
        <View style={styles.container}>
            
            <Image
            style={styles.logo}
            source={require("../assets/whitelogo.png")}
            ></Image>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FF5200",
    },

    logo: {
       height:100,
       width: 120,
       backgroundColor: "#FF5200" 
    }
})

export default Loader;