import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
    height: 600
 },  
 containers: {

 flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
    screen: {
        padding: 50
      },
      headerLink: {
        color:"#000000",
        fontWeight:"bold",
        fontSize: 16,
        padding:50,
        paddingLeft:110
      },
      buttonimg: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 2,
        fontWeight: "bold",
        textAlign:'center',
        color: "blue"
      },
      buttongl: {
        width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    fontWeight: "bold",
    textAlign:'center',
     color: "blue"

      },

})