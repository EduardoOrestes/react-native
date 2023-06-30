import {View, Image, Text, ImageBackground} from 'react-native';

const PositionLayout = () => {
    const icon = 1 == 1 ? require('./img/logo-react.png') : '';

    return (
        <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg'}}
                         style={{width: '100%', height: '100%'}} >
            <View style={{padding: 10, flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    Image 01
                </Text>
                <View style={{ paddingTop: 5 }}>
                    <Image source={require('./img/logo-react.png')} style={{ width: 50, height: 50 }} />
                </View>

                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    Image 02
                </Text>
                <View style={{ paddingTop: 5 }}>
                    <Image source={icon} style={{ width: 30, height: 30 }} />
                </View>

                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    Image 03
                </Text>
                <View style={{ padding: 5 }}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{ width: 100, height: 100 }} />
                </View>

                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    Image 04
                </Text>
                <View style={{ padding: 5 }}>
                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png',
                        cache: 'only-if-cached',
                        // default / reload /  force-cache / only-if-chached
                    }}
                    style={{width: 70, height: 70}} />
                </View>
            </View>
        </ImageBackground>
    );
};
export default PositionLayout;
