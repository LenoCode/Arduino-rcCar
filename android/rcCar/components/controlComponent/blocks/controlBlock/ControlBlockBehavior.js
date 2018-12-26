let styles = {
    mainView: {
      flex:2,
      
    },
    info:{
      flex:0.45,
      backgroundColor:"green"
    },
    controlPanel:{
      flex:2,
      flexDirection:"row",
    },
    controlPanel_bar:{
      flex:0.21,
      alignItems:"center",
    },

    controlPanel_bar_turnEngineButton:{
      container:{
        backgroundColor: 'rgba(200, 1, 1, 1)',
        height:30,
        width:30,
        borderRadius:30/2,
        marginTop:20,
      },
      button:{
      },
      buttonText:{
        color:"white",
        fontWeight:"bold"
      }
      
    },
    controlPanel_container:{
      flex:1,
      flexDirection:"row",
    },

    controlPanel_container_direction:{
      flex:1.5,
    },
    controlPanel_container_direction_arrows:{
      height:120,
      flexDirection:"row",
    },

    controlPanel_container_direction_left:{
      flex:1,
      justifyContent:"center",
      alignItems:"flex-end",
    },
    controlPanel_container_direction_upDown:{
      flex:1,
      alignItems:"center",
    },
    controlPanel_container_direction_right:{
      flex:1,
      justifyContent:"center",
    },

    controlPanel_container_direction_button:{
      container:{
        backgroundColor: 'rgba(0,100,2, 1)',
        height:70,
        width:70,
        borderRadius:70/2,
        marginTop:20,
        borderColor:"green",
      },
      imageStyle:{
      }, 
    },


    controlPanel_container_speed:{
      flex:0.5,
      alignItems:"center",
      backgroundColor:"orange",
    },
    controlPanel_container_speed_up_button:{
      container:{
        backgroundColor: 'rgba(120,120,120, 1)',
        height:40,
        width:40,
        borderRadius:40/2,
        marginTop:20,
        borderColor:"green",
      },
      imageStyle:{
      }, 
    }
  };
  

export function styleAdjust(props){
  if (props.engineStatus == "ON"){
    engineSwitchButtonAdjust('rgba(0,150,70, 1)');
  }

}
export function getControlStyle(){
  return styles;
}



function engineSwitchButtonAdjust(color){
    styles = {...styles,controlPanel_bar_turnEngineButton:
      {...styles.controlPanel_bar_turnEngineButton,container:{
        ...styles.controlPanel_bar_turnEngineButton.container,backgroundColor:color,
      }}}
}


