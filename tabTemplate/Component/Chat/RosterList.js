import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import firebaseSvc from '../../FirebaseSvc';
const RosterList = ({ route, navigation }) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {


        // firebaseSvc.User().then(res => {

        //     setUsers(users => [users, ...users])
        // })
        console.warn('mount')
        firebaseSvc.updateUsers(firebaseSvc.uid);
        firebaseSvc.User(user => {
            console.warn(JSON.stringify(user))
            if(user.uid!==firebaseSvc.uid)
            setUsers(users => [...users, user])

        })

    }, []);//firebaseSvc.refOff()

    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            {
                users.length > 0 ?
                    users.map((item) => {
                        //alert(typeof item["name"])
                        return <Text>{item.name}  
                            {
                                item.isOnline ?<Text color='green'> online</Text> :<Text style={{color:'red'}}> offLine</Text>
                            }
                        </Text>
                    })

                    // users.map(user => {
                    //     <View >
                    //         <Text>{user.name}</Text>
                    //     </View>
                    // }) 
                    : <View><Text>nodata </Text></View>
            }
        </View>
    );
}
export { RosterList };
