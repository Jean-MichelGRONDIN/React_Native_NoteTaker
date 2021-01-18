import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const styles = StyleSheet.create({
    inputStyle: {
        padding: 10,
        fontSize: 18,
    },
});

const NewNote = ( props ) => {
    const [text, setText] = useState('');
    const [newNote, setNewNote] = useState(false);
    const discardNewNote = () => {
        setText('');
        setNewNote(false);
    }
    const mySaveNewNote = () => {
        var tmp = text;
        setText('');
        if (tmp.length !== 0) {
            props.saveNewNote(tmp);
        }
        setNewNote(false);
    }
    if (newNote === false) {
        return (
            <Button
                onPress={() => {
                    setNewNote(true);
                }}
                title={"Add a new note"}
            />
        );
    } else {
        return (
            <>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your note here"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                    multiline={true}
                />
                <Button
                    onPress={() => {
                        mySaveNewNote(text);
                    }}
                    title={"Save new note"}
                />
                <Button
                    onPress={() => {
                        discardNewNote();
                    }}
                    title={"Discard new note"}
                />
            </>
        );
    }
}

export default NewNote;