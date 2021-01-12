import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const Note = ( props ) => {
    const [text, setText] = useState(props.value);
    const [edit, setEdit] = useState(false);

    const deleteNote = () => {
        props.selfDelete(props.myId);
    }

    if (edit === false) {
        return (
            <Text style={styles.item} onPress={ () => setEdit(true)} >
                {text.substring(0, 20)}
            </Text>
        );
    } else {
        return (
            <>
                <TextInput
                    style={styles.item}
                    placeholder="Enter your note here"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <Button
                    onPress={() => {
                        setEdit(false);
                    }}
                    title={"Stop editing"}
                />
                <Button
                    onPress={deleteNote}
                    title={"Delete Note"}
                />
            </>
        );
    }
}

export default Note;