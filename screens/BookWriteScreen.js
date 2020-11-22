import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config';

export default class WriteStoryScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            storyTitle: '',
            storyAuthor: '',
            storyContent: ''
        }
    }

    submitStory = ()=>{
        db.collection('writtenBookDetails').add({
            authorName: this.state.storyAuthor,
            storyHeading: this.state.storyTitle,
            story: this.state.storyContent
        })
        this.setState({
            storyTitle: '',
            storyAuthor: '',
            storyContent: ''
        })
    }

    render(){
        return(
            <View style={styles.container}>
                    <Header
                        backgroundColor = {'black'}
                        centerComponent={{
                            text: 'Story Hub',
                            style: { color: 'white', fontSize: 30, fontWeight: "bold"}
                        }}
                    />

                    <View style={styles.inputView}>
                        <TextInput 
                            style={styles.inputBox} 
                            placeholder="Title of the story" 
                            onChangeText= {(text)=>{
                                this.setState({
                                    storyTitle: text
                                })
                            }}                            
                            value={this.state.storyTitle}
                        />  
                    </View>

                    <View style={styles.inputView}>
                        <TextInput 
                            style={styles.inputBox2} 
                            placeholder="Author of the story" 
                            onChangeText= {(text)=>{
                                this.setState({
                                    storyAuthor: text
                                })
                            }}    
                            value={this.state.storyAuthor}
                        />   
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputBox3} 
                            multiline numberOfLines={10} 
                            placeholder="Write Story" 
                            onChangeText= {(text)=>{
                                this.setState({
                                    storyContent: text
                                })
                            }}    
                            value={this.state.storyContent}
                            multiline={true}
                        />
                    </View>

                    <View style={styles.container}>
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={async () => {this.submitStory()}}>

                            <Text style={styles.buttonText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
    },
    inputView:{
        flexDirection:"row",
        margin:20
    },
    inputBox:{
        width:280,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        marginTop: 50
    },
    inputBox2:{
        width:280,
        height:40,
        borderWidth:1.5,
        fontSize:20
    },
    inputBox3:{
        width:280,
        height:200,
        borderWidth:1.5,
        fontSize:20,
    },
    button:{
        backgroundColor:'#f6416c',
        width:200,
        height:50,
        alignItems:"center",
        alignSelf:"center"
    },
    buttonText:{
        fontSize:30,
        fontWeight:"bold"
    }
});



   
             