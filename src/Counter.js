import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, multiplyIntoTwo} from "../Redux/Slices/counterSlice";
import { displayText, eraseText } from "../Redux/Slices/messageSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const countValue = useSelector(state => state.counter.count);
    const messageEntered = useSelector(state => state.messageDisplay?.text)

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>{countValue}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
                <Text style={styles.buttonText}>Decrease</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => dispatch(reset())}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(multiplyIntoTwo())}>
                <Text style={styles.buttonText}>Multiply</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => dispatch(displayText())}>
                <Text style={styles.buttonText}>Show message</Text>
            </TouchableOpacity>

            <View style={[styles.button, styles.resetButton]}>
            <Text>{messageEntered}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => dispatch(eraseText())}>
                <Text style={styles.buttonText}>Clear Message</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    resetButton: {
        backgroundColor: '#B00020',
    },
});

export default Counter;
