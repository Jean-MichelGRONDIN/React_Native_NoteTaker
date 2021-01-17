import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NewNote from './NewNote';
import Note from './Note';

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

var trueList = [];

const NotesList = () => {
    const [reload, setreload] = useState(false);
    const [nbInList, setNbInList] = useState(trueList.length);

    const deleteNote = (thisId) => {
        var otherTmpList = [];
        trueList.forEach(elem => {
            if (elem.id.toString() !== thisId) {
                otherTmpList.push(elem);
            }
        });
        trueList = otherTmpList;
        setNbInList(nbInList + 1);
    }

    const addToListFunc = (newOne) => {
        var tmpList = [];
        var tmpID = nbInList.toString();
        tmpList.push({id: tmpID, item: <Note value={newOne} key={nbInList} myId={tmpID} selfDelete={() => deleteNote(tmpID)} />});
        trueList.forEach(elem => {
            tmpList.push(elem);
        });
        trueList = tmpList;
        setNbInList(nbInList + 1);
    }

    var tmpList = [];
    trueList.forEach(elem => {
        tmpList.push(elem.item);
    });

    return (
        <View style={styles.container}>
            <Text style={styles.item} >All the notes you have:</Text>
            <NewNote saveNewNote={addToListFunc}/>
            {tmpList}
        </View>
    );
}

export default NotesList;