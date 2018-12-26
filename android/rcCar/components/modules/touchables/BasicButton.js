import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';
import clientSocket from 'react-native-react-socket';
import { connect } from 'react-redux';


let styles = undefined;


export default class BasicButton extends Component{
    constructor(props){
        super(props);
    }

    applyCustomization(props){
        styles = StyleSheet.create({
            ...props.styles,container:{
                ...props.styles.container,alignItems:"center",
            },
            button:{
                ...props.styles.button,alignItems:"center",
                flex:1,
                justifyContent: 'center',
            },
            buttonText:{
                ...props.styles.buttonText,
            }
        });
    }

    componentWillReceiveProps(nextProps,nextState){
       this.applyCustomization(nextProps);
    }

    componentWillMount(){
        this.applyCustomization(this.props);
    }

    checkTextOrImage(){
        if (this.props.imageUrl){
            return (
                <Image style = {this.props.imageStyle} source = {this.props.imageUrl()}></Image>
            );
        }else{
            return(
                <Text style = {styles.buttonText}>{this.props.text}</Text>
            );
        }
    }
    checkPressEvent(){
        if (this.props.onPress){
            return this.props.onPress;
        }else{
            return ()=>{};
        }
        
    }
    checkOnTouchStartEvent(){
        if (this.props.onTouchStart){
            return this.props.onTouchStart;
        }else{
            return ()=>{};
        }
    }
    checkOnTouchEndEvent(){
        if (this.props.onTouchEnd){
            return this.props.onTouchEnd;
        }else{
            return ()=>{};
        }
    }

    render(){
        let component = this.checkTextOrImage();
        let onTouchStart = this.checkOnTouchStartEvent(); 
        let onTouchEnd = this.checkOnTouchEndEvent();
        let onPress = this.checkPressEvent();

        return(
            <View style = {styles.container}>
                <TouchableHighlight onPress={onPress} onLongPress={this.props.onLongPress} underlayColor = {this.props.underlayColor}>
                    <View onTouchStart = {onTouchStart} onTouchEnd = {onTouchEnd} style = {styles.button}>
                        {component}
                    </View>
                </TouchableHighlight>
            </View>
         
        )
    }
}

