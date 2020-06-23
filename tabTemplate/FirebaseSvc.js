import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/database';
import uuid from 'uuid';

const config = {
  apiKey: "AIzaSyCX2vJEmzUrUUGF-tMevA8vNgfLdz4RvVI",
  authDomain: "templatechatapp.firebaseio.com",
  databaseURL: "https://templatechatapp.firebaseio.com",
  projectId: "templatechatapp",
  storageBucket: "templatechatapp.appspot.com",
  messagingSenderId: "246245073288"
}
var roomName = 'Messages';
class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }
  }


  login = async (user, success_callback, failed_callback) => {
    console.log("logging in");
    roomName = user.roomName != '' ? user.roomName : roomName;
    const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  }

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        this.login(user);
      } catch ({ message }) {
        console.log("Failed:" + message);
      }
    } else {
      console.log("Reusing auth...");
    }
  };

  createAccount = async (user) => {
    let self = this;
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(function () {
        console.log("created user successfully. User email:" + user.email + " name:" + user.name);
        var userf = firebase.auth().currentUser;
        userf.updateProfile({ displayName: user.name })
          .then(function () {
            console.log("Updated displayName successfully. name:" + user.name);
            alert("User " + user.name + " was created successfully. Please login.");
            self.saveUsers(user, userf.uid);
          }, function (error) {
            console.warn("Error update displayName.");
          });
      }, function (error) {
        console.error("got error:" + typeof (error) + " string:" + error.message);
        alert("Create account failed. Error: " + error.message);
      });
  }

  uploadImage = async uri => {
    console.log('got image to upload. uri:' + uri);
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref('avatar')
        .child(uuid.v4());
      const task = ref.put(blob);

      return new Promise((resolve, reject) => {
        task.on(
          'state_changed',
          () => {
            /* noop but you can track the progress here */
          },
          reject /* this is where you would put an error callback! */,
          () => resolve(task.snapshot.downloadURL)
        );
      });
    } catch (err) {
      console.log('uploadImage try/catch error: ' + err.message); //Cannot load an empty url
    }
  }

  updateAvatar = (url) => {
    //await this.setState({ avatar: url });
    var userf = firebase.auth().currentUser;
    if (userf != null) {
      userf.updateProfile({ avatar: url })
        .then(function () {
          console.log("Updated avatar successfully. url:" + url);
          alert("Avatar image is saved successfully.");
        }, function (error) {
          console.warn("Error update avatar.");
          alert("Error update avatar. Error:" + error.message);
        });
    } else {
      console.log("can't update avatar, user is not login.");
      alert("Unable to update avatar. You must login first.");
    }
  }

  onLogout = user => {
    firebase.auth().signOut().then(function () {
      console.log("Sign-out successful.");
    }).catch(function (error) {
      console.log("An error happened when signing out");
    });
  }
  get displayName() {
    return (firebase.auth().currentUser || {}).displayName;
  }
  get uid() {
    console.log("user : " + JSON.stringify((firebase.auth().currentUser || {})))
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    console.log(" this.state.roomName : " + roomName)
    return firebase.database().ref(roomName);
  }
  User = callback => {
    //return firebase.database().ref('Users').once('value');
    return firebase.database().ref('Users').on('child_added', snapshot => callback(this.userParse(snapshot)));
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: id } = snapshot;
    const { key: _id } = snapshot; //needed for giftedchat
    const timestamp = new Date(numberStamp);

    const message = {
      id,
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };
  userParse = snapshot => {
    const { uid, name, email, isOnline } = snapshot.val();

    const user = {
      uid,
      name,
      email,
      isOnline
    };
    return user;
  };

  refOn = callback => {
    this.ref
      .limitToLast(100)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      this.ref.push(message);
    }
  };
  saveUsers(user, uid) {
    firebase.database()
      .ref('/Users/' + uuid.v4())
      .set({
        name: user.name,
        email: user.email,
        uid: uid,
        isOnline: false
      })
      .then(() => console.log('Save firebaseUser to Users.'));
  }
   async updateUsers(uid) {
     console.log("update users by uid : "+uid)
    //query where uid=
      firebase.database()
      .ref('/Users/'+uid).update({
        isOnline: true,
      }).then(() => console.log('Data updated.'));
     
  }


  refOff() {
    this.ref.off();
  }
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
