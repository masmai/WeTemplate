import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import firebaseSvc from '../../FirebaseSvc';
var rosterList = []
const RosterList = ({ route, navigation }) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {


        // firebaseSvc.User().then(res => {

        //     setUsers(users => [users, ...users])
        // })
        console.warn('mount')
        firebaseSvc.updateUsers(firebaseSvc.uid);
        // firebaseSvc.User(user => {
        //     var filter=rosterList.filter(item=>{item.uid===user.uid});
        //     if(filter.length>0){
        //         rosterList.push(user);
        //     }else{
        //         rosterList.push(user);
        //     }

        //     //setTempUsers(tempUsers => [user, ...tempUsers])
        //     setUsers(users => [user, ...users])



        // })
        firebaseSvc.userRef.on('value', (snapshot) => {
            const users = [];
            snapshot.forEach((user) => {
                if(firebaseSvc.uid!=user.toJSON().uid)
                users.push(user.toJSON())
            })
            setUsers(users, users)
        })




        return function cleanup() {
            console.warn('unmount')
            firebaseSvc.refOff();
        }

    }, []);//firebaseSvc.refOff()

    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            {
                users.length > 0 ?
                    users.map((item) => {
                        //alert(typeof item["name"])
                        return <Text>{item.name}
                            {
                                item.isOnline ? <Text color='green'> online</Text> : <Text style={{ color: 'red' }}> offLine</Text>
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
