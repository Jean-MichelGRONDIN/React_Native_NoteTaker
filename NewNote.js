import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

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
                    style={{height: 40}}
                    placeholder="Enter your note here"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <Button
                    onPress={() => {
                        discardNewNote();
                    }}
                    title={"Discard new note"}
                />
                <Button
                    onPress={() => {
                        mySaveNewNote(text);
                    }}
                    title={"Save new note"}
                />
                {/* <Text style={{padding: 10, fontSize: 42}}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text> */}
            </>
        );
    }
}

export default NewNote;