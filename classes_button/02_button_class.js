import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('Press');
    }

    _onPressButtonLog(){
        console.log('button press');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._onPressButton} title="Press me" />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press me"
                        color="#841584"
                    />
                </View>

                <View style={styles.alternativeLAyoutButtonContainer}>
                    <Button onPress={this._onPressButton} title="This looks great!" />
                    <Button onPress={this._onPressButtonLog} title="Ok." color="#841584" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLAyoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
