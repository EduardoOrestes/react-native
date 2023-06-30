import {View, Text, Button, ImageBackground} from 'react-native'

const ShowButton= () => {
    return (
        <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg'}}
                         style={{width: '100%', height: '100%'}} >
            <View style={{padding: 10, flex: 1, height: '100%'}}>
                <Text>
                    Learning Buttons
                </Text>
                <Button
                    onPress={() => {
                        console.log('Tapped the button.');
                    }}
                    title="Press Me"
                />
            </View>
        </ImageBackground>
    )
}

export default ShowButton;
