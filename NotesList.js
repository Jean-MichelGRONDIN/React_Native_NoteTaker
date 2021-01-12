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

const NotesList = () => {
    const [list, addToList] = useState([]);
    const [nbInList, setNbInList] = useState(list.length);

    const deleteNote = (thisId) => {
        var tmpList = [];
        for (const elem in list) {
            if (Object.hasOwnProperty.call(list, elem)) {
                const element = list[elem];
                if (element.myId !== thisId) {
                    tmpList.push(element);
                }
            }
        }
        addToList(tmpList);
    }

    const addToListFunc = (newOne) => {
        var tmpList = [];
        tmpList.push(<Note value={newOne} key={nbInList} myId={nbInList} selfDelete={deleteNote} />);
        for (const elem in list) {
            if (Object.hasOwnProperty.call(list, elem)) {
                const element = list[elem];
                tmpList.push(element);
            }
        }
        addToList(tmpList);
        setNbInList(nbInList + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.item} >You curently have {nbInList} notes:</Text>
            <NewNote saveNewNote={addToListFunc}/>
            {list}
        </View>
    );
}

export default NotesList;