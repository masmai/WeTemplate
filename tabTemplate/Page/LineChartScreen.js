


import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
function LineChartScreen({ route, navigation }) {
    // const [users, setUsers] = useState([
    //     { id: 1, name: "Mark Doe", position: "CEO", image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
    //     { id: 1, name: "John Doe", position: "CTO", image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    //     { id: 2, name: "Clark Man", position: "Creative designer", image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    //     { id: 3, name: "Jaden Boor", position: "Front-end dev", image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
    //     { id: 4, name: "Srick Tree", position: "Backend-end dev", image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
    //     { id: 5, name: "John Doe", position: "Creative designer", image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    //     { id: 6, name: "John Doe", position: "Manager", image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
    //     { id: 8, name: "John Doe", position: "IOS dev", image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    //     { id: 9, name: "John Doe", position: "Web dev", image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
    //     { id: 9, name: "John Doe", position: "Analyst", image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
    // ]);
    // const [isStarted, setIsStarted] = useState(false);
    // useEffect(() => {



    // }, []);
    
    return (<Chart
        style={{ height: 200, width: 400 }}
        data={[
            { x: '2560', y: 0 },
          { x: '2561', y: 15 },
          { x: '2562', y: 10 },
          
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 2559, max: 2563 }}
        //yDomain={{ min: 0, max: 20 }}
      >
        <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
        <HorizontalAxis tickCount={5} theme={{labels: {
                visible: true,
                label: {
                  color: '#000',
                  fontSize: 10,
                  fontWeight: 300,
                  textAnchor: 'middle',
                  opacity: 1,
                  dx: 0,
                  dy: -12,
                  rotation: 0,
                }
              }}} />
        
        <Line theme={{ 
            stroke: { color: '#ffa502', width: 5 }, 
            scatter: { default: { width: 10, height: 10, rx: 5,dx: 0 }} ,
            
            }} />
      </Chart>)

}

export { LineChartScreen }