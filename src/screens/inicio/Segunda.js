import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const App = () => {
    const [images, setImages] = React.useState([
        require('../../imgs/logo.png'),
        require('../../imgs/imgTeste.png'),
        require('../../imgs/usuario.png'),
    ]);

    return (
        <View style={styles.container}>
            <SliderBox 
                images={images}
                sliderBoxHeight={400}
                dotColor="black"
                inactiveDotColor="#90A4AE"  
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                paginationBoxVerticalPadding={20}
            />
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 10,
        flex: 1,
    },
});

export default App;