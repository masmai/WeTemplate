import React, { useState } from 'react';


 function CustomLine() {
    const [lineWidth, setLineWidth] = useState(0);
    return (<View style={{ marginHorizontal: 20 }} onLayout={(e) => {
        newFunction(e);
    }}>
        <Text>Bezier Line Chart</Text>


        <LineChart data={{
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
            }} /></View>);
    function newFunction(e) {
        setLineWidth(e.nativeEvent.layout.width)
        //    e.nativeEvent.layout.height,
        //     e.nativeEvent.layout.x,
        //    e.nativeEvent.layout.y

    }
}
 export default { CustomLine };
