import * as React from 'react';
import { AntDesign,Entypo,Foundation,Feather,Fontisto,FontAwesome,Octicons,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [recording, setRecording] = React.useState();
  
  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.us}>
        <Text style={styles.names}>STEPH & RABY</Text>
        <Text style={styles.names}>  Radio</Text>
        <View style={styles.main}>
          <View style={styles.menu}>
            <TouchableOpacity>
        <MaterialCommunityIcons name="record-circle" size={24} color="red" onPress={recording ? stopRecording : startRecording}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="menu" size={24} color="blue" />
        </TouchableOpacity>
        </View>
          <View style={styles.play}>
            <View style={styles.station}>
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Radio Lesotho</Text>
              <Text>  </Text>
              <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>      93.3</Text>
            </View>
            <View style={styles.me}>
          <Feather name="bar-chart-2" size={55} color="blue" />
          <Feather name="bar-chart-2" size={55} color="blue" />
          <Feather name="bar-chart-2" size={55} color="blue" />
          <Feather name="bar-chart-2" size={55} color="blue" />
          <Feather name="bar-chart-2" size={55} color="blue" />
          <Feather name="bar-chart-2" size={55} color="blue" />
          </View>
          </View>
        <View style={styles.icons}>
          <TouchableOpacity>
        <Octicons name="heart-fill" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="stepbackward" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Foundation name="play" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="stepforward" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialCommunityIcons name="heart-broken" size={27} color="red" />
        </TouchableOpacity>
        </View>
        </View>
      </View>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
  },
  us:{
    borderBottomColor:'blue',
    height:500,
    width:'100%',
    alignItems:'center',
  },
  names:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
  },
  main:{
    backgroundColor:'grey',
    height:400,
    paddingLeft:12,
    width:'98%',
    alignItems:'center',
    justifyContent:'center'
  },
  icons:{
    backgroundColor:'light-grey',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:50,
    paddingRight:25,
    width:'80%'
  },
  play:{
    backgroundColor:'red',
    width:'50%',
    height:300,
    marginBottom:10,
    alignItems:'center',
  },
  menu:{
    backgroundColor:'grey',
    alignItems:'flex-end',
    width:'100%',
    paddingRight:12,padding:2,
  },
  station:{
    marginTop:40,
    padding:15,
  },
  me:{
    flexDirection:'row',
    marginTop:100,
  },
}); 