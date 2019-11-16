import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Modal from "react-native-modal";
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from './button';

const CreateMeetingModal = ({isVisible, date, time, createMeeting,cancel, mode, showPicker, setDate, show})=>{
    return <Modal isVisible={isVisible} avoidKeyboard={false}>
    <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
              <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.itemLabel}>Meeting Agenda</Text>
              <TextInput style={styles.selectDate} placeholder="Agenda" multiline/>
              <TouchableOpacity onPress={()=>showPicker('date')}>
                <Text style={styles.itemLabel}>Meeting Date</Text>
                <Text style={styles.selectDate}>{date}</Text>
              </TouchableOpacity>
              { show && <DateTimePicker value={new Date()}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={setDate} />}
              <TouchableOpacity onPress={()=>showPicker('time')}>
                <Text style={styles.itemLabel}>Meeting Time</Text>
                <Text style={styles.selectDate}>{time}</Text>
              </TouchableOpacity>
              <Button text="Create Meeting" onPress={createMeeting}/>
              <TouchableOpacity onPress={cancel} style={{alignItems: "center"}}>
                  <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              </ScrollView>
          </View>
    </View>
  </Modal>
}


const styles = StyleSheet.create({
    
    modalContainer:{
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: "white",
        paddingVertical: 50,
        borderRadius: 3
    },
    modalContentContainer:{
        marginHorizontal: 10
    },
    selectDate:{
        borderWidth: 1,
        borderColor: "#067b7a",
        borderRadius: 3,
        padding: 5,
        fontSize: 18,
        color: "#333333",
        opacity: 0.7,
        marginVertical: 10
    },
    cancelText:{
        textAlign: "center",
        marginTop: 20,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
    },
    itemLabel:{
        fontSize: 17,
        marginTop: 10,
        color: "#4d4d4d"
    }
})

export default CreateMeetingModal;
