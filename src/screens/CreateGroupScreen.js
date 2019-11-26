import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenContainer from '../components/screenContainer'
import Input from '../components/input'
import Button from '../components/button'
import {Formik} from 'formik'
import Loader from '../components/loader'
import { withUserHOC } from '../contexts/UserContext'
import { NewGroupSchema } from '../validationSchemas/GroupSchema'
import { createNewGroup, generateUniqueID } from '../firebase/GroupsApi'
import { DropDownHolder } from '../commons/DropDownHolder';
import moment from 'moment'
import {useNetInfo} from "@react-native-community/netinfo";


const CreateGroupScreen = ({context, navigation})=>{
    const netInfo = useNetInfo();
    const {profile, user} = context
    const [isLoading, setIsLoading] = useState(false)
    return <>
    <ScreenContainer 
        title="New Mastermind Group">
        <Formik
            initialValues={{title: "", description: "", niche: "", experience: ""}}
            onSubmit={values => {
                if (netInfo.type==="none" || netInfo.type==="unknown"|| !netInfo.isInternetReachable) {
                    DropDownHolder.dropDown.alertWithType('error', 'Error', "No Internet Connection");
                    return;
                }
                    setIsLoading(true)
                const newGroup = {creator:{name: profile.name, id: user.uid}, ...values, createdAt: moment().unix(), uid: generateUniqueID(), memberCount:0}
                createNewGroup(newGroup,user, profile, ()=>{
                    setIsLoading(false)
                    navigation.navigate("Group")
                    DropDownHolder.dropDown.alertWithType('success', 'Success', "Group Created Successfully");
                },(error)=>{
                    setIsLoading(false)
                    DropDownHolder.dropDown.alertWithType('error', 'Error', error.message);
                })
            }}
            validationSchema={NewGroupSchema}
        >
        {({values, handleChange, handleSubmit, errors, handleBlur, touched})=>(
        <View style={styles.container}>
            <Input 
                label="Group Name" 
                placeholder="e.g Success Alliance Group"
                value={values.title} 
                error={errors.title}
                onBlur={handleBlur('title')}
                touched={touched.title}
                onchange={handleChange("title")}
                />
            <Input label="Description"  
                placeholder="short description about group"
                numberOfLines={5}
                multiline={true}
                style={styles.input}
                value={values.description} 
                error={errors.description}
                onBlur={handleBlur('description')}
                touched={touched.description}
                onchange={handleChange("description")}
                />
            <Input 
                label="Who can join this group?" 
                placeholder="e.g Startup CEOs, New Mothers etc"
                value={values.niche} 
                error={errors.niche}
                onBlur={handleBlur('niche')}
                touched={touched.niche}
                onchange={handleChange("niche")}
                />
            <Input 
                label="Experience" 
                placeholder="e.g Beginner, Senior Level etc"
                value={values.experience} 
                error={errors.experience}
                onBlur={handleBlur('experience')}
                touched={touched.experience}
                onchange={handleChange("experience")}
                />
            <Button text="Create Group" onPress={handleSubmit}/>
            
        </View>
    )}
    </Formik>
    </ScreenContainer>
    <Loader message="Creating group..." visible={isLoading}/>
    </>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
})

export default withUserHOC(CreateGroupScreen);

