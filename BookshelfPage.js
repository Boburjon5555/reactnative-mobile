// BookshelfPage.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [isCreating, setIsCreating] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (key, value) => {
    setNewBook({ ...newBook, [key]: value });
  };

  const handleCreate = () => {
    setIsCreating(true);
  };

  const handleSubmit = () => {
    if (newBook.title !== '' && newBook.author !== '') {
      if (editIndex !== null) {
        const updatedBooks = [...books];
        updatedBooks[editIndex] = newBook;
        setBooks(updatedBooks);
        setEditIndex(null);
      } else {
        setBooks([...books, newBook]);
      }
      setNewBook({ title: '', author: '' });
      setIsCreating(false);
    }
  };

  const handleEdit = (index) => {
    setNewBook(books[index]);
    setIsCreating(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (  
    <ScrollView>  
    <View style={styles.container}>
      <Text style={styles.heading}>Bookshelf</Text>
      <TouchableOpacity style={styles.createButton} onPress={handleCreate}>
        <Text style={styles.buttonText}>Create Book</Text>
      </TouchableOpacity>
      {isCreating && (
        <View style={styles.bookForm}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newBook.title}
            onChangeText={(text) => handleInputChange('title', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Author"
            value={newBook.author}
            onChangeText={(text) => handleInputChange('author', text)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bookList}>
        {books.map((book, index) => (
          <View style={styles.bookItem} key={index}>
            <Text>Title: {book.title}</Text>
            <Text>Author: {book.author}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>  
    </ScrollView>
  );
};

export default BookshelfPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookForm: {
    width: '80%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  bookList: {
    width: '80%',
  },
  bookItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
