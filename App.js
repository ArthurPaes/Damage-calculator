/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, SetStateAction } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  CheckBox,
  Picker,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  resizeMode
} from 'react-native';



import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {

  let [total, setTotal] = useState(0)
  const [checkedBleed, setCheckedBleed] = useState(false)
  const [checkedCombat, setCheckedCombat] = useState(false)
  const [checkedPassive, setCheckedPassive] = useState(false)
  const [checkedVS, setCheckedVS] = useState(false)
  const [selectedValue, setSelectedValue] = useState("java");
  const [textInput, setTextInput] = useState(1)
  let [diceCount, setDiceCount] = useState(1)



  const bleeding = 1
  const combatAdvantage = 2
  const passivaAi = 3

  const image = 'https://images.unsplash.com/photo-1519285257509-80caa15dc32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

  function addDamage(bonus){
   if(bonus===1){
    setCheckedBleed(!checkedBleed)
    if(checkedBleed===false){
    setTotal(total+=bonus)
    }

    else{
      setTotal(total-=bonus)
    }
  }
  if(bonus===2){
    setCheckedCombat(!checkedCombat)
    if(checkedCombat===false){
    setTotal(total+=bonus)
    }

    else{
      setTotal(total-=bonus)
    }
  }
  if(bonus===3){
    setCheckedPassive(!checkedPassive)
    if(checkedPassive===false){
    setTotal(total+=bonus)
    }

    else{
      setTotal(total-=bonus)
    }
  }
  if(bonus===4){
    setCheckedVS(!checkedVS)
    if(checkedVS===false){
    setTotal(total+=bonus)
    }

    else{
      setTotal(total-=bonus)
    }
  }
}

function timesRoll(sides){
 let result = 0
 let randomNumber = 0
  for (let i = 1; i <= diceCount; i++) {

    const randomNumber = (Math.floor((Math.random() *sides) + 1))

    result = result + randomNumber
    console.log(result)

  }
  console.log(result)
  setTotal(total= total+result)

}


function refreshDamage(){
  setTotal(total=0)
  setCheckedCombat(false)
  setCheckedPassive(false)
  setCheckedBleed(false)
  setDiceCount(1)
}




  return(
    <>

    <ScrollView style={styles.container}>
    <Image style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }} source={require('./assets/bgd.jpg')} ></Image>
    <Text style={styles.textTitle}>Blackguard Damage Calculator</Text>
    <Text style={styles.text}>Bonus damage</Text>
    <View style={styles.checkContainer} >
    <CheckBox style={styles.checkBox} value={checkedBleed} onChange={()=>addDamage(bleeding)} />
    <Text style={styles.textCB}>Are you bleeding?</Text>
    </View>
    <View style={styles.checkContainer}>
    <CheckBox  style={styles.checkBox} value={checkedCombat} onChange={()=>addDamage(combatAdvantage)} />
    <Text style={styles.textCB}>Do you have combat advantage?</Text>
    </View>
    <View style={styles.checkContainer}>
    <CheckBox style={styles.checkBox} value={checkedPassive} onChange={()=>addDamage(passivaAi)} />
    <Text style={styles.textCB}>Is Dread Smite active?</Text>
    </View>
    <View style={styles.checkContainer}>
    <CheckBox style={styles.checkBox} value={checkedVS} onChange={()=>addDamage(4)} />
    <Text style={styles.textCB}>Vengeance Striking?</Text>
    </View>
    {/* <View style={styles.techsContainer}>
    <TextInput keyboardType='numeric' style={styles.textInput} placeholder='How many dice would you like to roll?'></TextInput>
    <TouchableOpacity style={styles.button3} onPress={data => setTextInput( data )} ><Text style={styles.buttonText2}>OK</Text></TouchableOpacity>
    </View> */}
    <Text style={styles.text}>Roll your weapon damage</Text>
    <View style={styles.techsContainer}>
       <TouchableOpacity style={styles.button3} onPress={()=>timesRoll(6)} ><Text style={styles.buttonText}>D6</Text></TouchableOpacity>
       <TouchableOpacity style={styles.button3} onPress={()=>timesRoll(8)} ><Text style={styles.buttonText}>D8</Text></TouchableOpacity>
    </View>
    <View style={styles.techsContainer}>
       <TouchableOpacity style={styles.button3} onPress={()=>timesRoll(10)} ><Text style={styles.buttonText}>D10</Text></TouchableOpacity>
       <TouchableOpacity style={styles.button3} onPress={()=>timesRoll(12)} ><Text style={styles.buttonText}>D12</Text></TouchableOpacity>
    </View>
    <View style={styles.diceContainer}>
       <TouchableOpacity style={styles.button3} onPress={()=>setDiceCount(diceCount-=1)}  ><Text style={styles.buttonText}>-</Text></TouchableOpacity>
       <Text style={styles.dados}>{diceCount}d</Text>
       <TouchableOpacity style={styles.button3}  onPress={()=>setDiceCount(diceCount+=1)}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
    </View>

    <Text style={styles.text}>Total damage: {total}</Text>
    <View >
       <TouchableOpacity style={styles.button} onPress={()=>refreshDamage()}  ><Text style={styles.buttonText1}>Refresh</Text></TouchableOpacity>

    </View>

    </ScrollView>

     </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  textTitle:{
    fontSize: 30,
    color: 'rgba(34, 49, 63, 1)'
  },
  text: {
    color: '#DDD',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    borderRadius: 10,
    marginBottom: 10
  },
  textCB: {
    color: '#DDD',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 10
  },
  checkContainer:{
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: 'rgba(34, 49, 63, 0.9)',
    marginBottom: 10,


    borderRadius:8


  },
  checkBox:{
   marginTop: 20
  },

  dados:{
    fontSize: 25,
    backgroundColor: 'rgba(34, 49, 63, 0.9)',
    borderRadius: 8,
    paddingVertical: 5,
    color: "white",
  },
  textInput:{
    borderRadius: 10,
    fontSize: 20,
    backgroundColor:'#777',
    marginLeft: 5
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  diceContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 250,

  },
  button3: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    // backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    color: '#DDD',
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: 'rgba(34, 49, 63, 0.1)'
  },
  button2: {
    flex: 1,
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 0
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: 'rgba(34, 49, 63, 0.9)',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    textAlign: 'center'
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: 'rgba(34, 49, 63, 0.9)',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    textAlign: 'center'
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: 'rgba(34, 49, 63, 0.9)',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
    textAlign: 'center'
  },
});

