import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
    LineChart
} from "react-native-chart-kit";
function Dashboard() {
    const [lineWidth, setLineWidth] = useState(0);
    const [progWidth, setProgWidth] = useState(0);
    const [pieWidth, setPieWidth] = useState(0);
    
    const progressChartData = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    const chartConfig = {
        backgroundColor: '#022173',
        backgroundGradientFrom: '#022173',
        backgroundGradientTo: '#1b3fa0',
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const graphStyle = {
        marginVertical: 8,
        ...chartConfig.style
    }
    const pieChartConfig = {
        backgroundColor: '#26872a',
        backgroundGradientFrom: '#43a047',
        backgroundGradientTo: '#66bb6a',
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      };
    const pieGraphStyle = {
        marginVertical: 8,
        ...pieChartConfig.style
    }
    const pieChartData = [
        { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ]
    return (<View>
        <View style={{ marginHorizontal: 20 }} onLayout={(e) => {
            setLineWidth(e.nativeEvent.layout.width)
        }}>
            <Text>Line Chart</Text>


            {renderLine()}




        </View>

        <View style={{ marginHorizontal: 20 }} onLayout={(e) => {
            setProgWidth(e.nativeEvent.layout.width)
        }}>
            <Text>ProgressChart </Text>
            <ProgressChart
                data={progressChartData}
                width={progWidth}
                height={220}
                chartConfig={chartConfig}
                style={graphStyle}
            />
        </View>

        <View style={{ marginHorizontal: 20 }} onLayout={(e) => {
            setPieWidth(e.nativeEvent.layout.width)
        }}>
            <Text>PieChart </Text>
            <PieChart
                data={pieChartData}
                height={220}
                width={pieWidth}
                chartConfig={pieChartConfig}
                accessor="population"
                style={pieGraphStyle}
            />
        </View>




        {/* <View style={{ flexDirection: 'row', height: 220, marginHorizontal: 20 }}>
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

            </View>
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

            </View>
        </View> */}
    </View>

    );



    function renderLine() {
        return <LineChart data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }
            ]
        }} width={lineWidth} // from react-native
            height={220} yAxisLabel="$" yAxisSuffix="k" yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }} bezier style={{
                marginVertical: 8,
                borderRadius: 16
            }} />;
    }
}
export { Dashboard }


