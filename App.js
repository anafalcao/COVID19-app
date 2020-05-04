import React, {useState} from 'react';
 import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView} from 'react-native';
 import * as screen from "./src/constants/dimensions"

 export default function App() {
   const [userName, setUserName] = useState("");
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image 
              source={require('./assets/Imagens/covidTitle.png')}
              style = {styles.titleImage}
              resizeMode={"contain"}
            />
        </View>
        <View>
          <Image source={require("./assets/Imagens/corona-doctor.gif")}  
          style={styles.gifImage}
          resizeMode={"cover"}
          />
        </View>
        <KeyboardAvoidingView behavior={"position"}>
        <TextInput style={styles.userNameInput}
        placeholder={"@USUARIO"}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={userName}
        onChangeText={(newText)=> setUserName(newText)}
        />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.submitButton} onPress={() => console.log('clicked')}>
          <Text> ENTRAR </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );

 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    alignItems: "flex-end",
    marginTop: screen.height  * 0.05
    
  },
  titleImage: {
    width: screen.width * 0.8,
    height: screen.height * 0.2,
    marginRight: screen.width * 0.04,
  },
  gifImage:{
    width: screen.width * 1,
    height: screen.height * 0.45,
  },
  userNameInput:{
    borderWidth: 1,
    width: screen.width * 0.9,
    height: screen.height * 0.05,
    alignSelf: "center",
    backgroundColor: '#f5f5f5',
    borderRadius: screen.width * 0.02,
    color: "#333",
    paddingHorizontal: screen.width * 0.03,

  },

  submitButton:{
    width: screen.width * 0.2,
    height: screen.height * 0.06,
    backgroundColor: '#75ffaf',
    alignSelf: "center",
    borderRadius: screen.width * 0.02,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  }
});

// export default function App() {
//   //let count = 0; //assim o count nao vai mudar pq a aplicacao nao vai atualizar, precisamos fazer ele como um state
//   const [state, setState] = useState(0)
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>
//         {state}
//       </Text>

//       <Button title="aumentar" onPress={()=>setState(state + 1)}/>
//     </SafeAreaView>
//   );
// }




//propriedades ex de prop na view é o style. 
//estados ==  states
//usar sempre camelcase, mesmo no flexbox

