import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import { Button, Text, View } from 'react-native';
import firebaseSvc from '../FirebaseSvc';
const Chat = ({ route, navigation }) => {

    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState({});
    //const { name } = route.params;
    const { name, email, roomName } = route.params;
    //     setUser(
    //{
    //     name: name,//'fucking'
    //     email: email,//'test3@gmail.com'
    //     avatar: '',
    //     id: firebaseSvc.uid,
    //     _id: firebaseSvc.uid, // need for gifted-chat
    // }
    //)
    navigation.setOptions({ title: roomName })
    useEffect(() => {

        firebaseSvc.refOn(message =>
            // this.setState(previousState => ({
            //   messages: GiftedChat.append(previousState.messages, message),
            // }))

            setMessages(messages => [message, ...messages])
        );
        firebaseSvc.User().then(res => {
            console.warn("USers : ", JSON.stringify(res))
        })

        // return () => {
        //     firebaseSvc.refOff()
        // }
    }, []);//firebaseSvc.refOff()

    return (
        <GiftedChat
            messages={messages}
            onSend={firebaseSvc.send}
            user={{
                name: firebaseSvc.displayName,//'fucking'
                email: email,//'test3@gmail.com'
                avatar: '',
                id: firebaseSvc.uid,
                _id: firebaseSvc.uid, // need for gifted-chat
            }}
            showUserAvatar={true}
        />
    );
}
export { Chat };

// function Chat({ route, navigation }) {

//     const [messages, setMessages] = useState([]);
//     const [user, setUser] = useState({});
//     const { name } = route.params;
//     const { email } = route.params;
//     setUser({
//         name: name,//'fucking'
//         email: email,//'test3@gmail.com'
//         avatar: '',
//         id: firebaseSvc.uid,
//         _id: firebaseSvc.uid, // need for gifted-chat
//     })
    //useEffect(() => {
        // firebaseSvc.refOn(message =>
        //     // this.setState(previousState => ({
        //     //   messages: GiftedChat.append(previousState.messages, message),
        //     // }))

        //     setMessages(messages => [...messages, message])
        // );


        //firebaseSvc.refOff();
    //}, []);






    //return (<View>kuy</View>);
        // <GiftedChat
        //     messages={messages}
        //     onSend={firebaseSvc.send}
        //     user={user}
        // />






// }
// export  {Chat};
