
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // getting all values, returns new array
    const totalMaximum = Math.max(...dataPointValues); // checking which value is the highest; spread operator to change array into separate arguments // math.max expects several values and not a single array
    
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}/>
            ))} 
        </div>
    );
};

export default Chart;