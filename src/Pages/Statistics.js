import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    indexAxis: 'x',
    elements:{
        bar:{
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins:{
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Quiz Horizontal Bar Chart',
        },
    },
};


const Statistics = () => {
    const [data, setData]= useState({
        labels:['React','Javascript','CSS', 'Git'],
        datasets: [
            {
                label : 'Dataset 1',
                data:[1,2,3,4,5],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label : 'Dataset 2',
                data: [1,2,3,4,5],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    });
    useEffect(()=>{
        const fetchData = async() =>{
            const url = `https://openapi.programming-hero.com/api/quiz`
            const labelSet = [];
            const dataSet1 = [];
            const dataSet2 = [];
            await fetch(url).then((data) =>{
                console.log("Api data", data)
                const res = data.json();
                return res
            }).then((res)=>{
                console.log("ress",res.data)
                for(const val of res.data){
                    dataSet1.push(val.id);
                    dataSet2.push(val.total);
                    labelSet.push(val.name);
                }
                setData({
                    labels:labelSet,
                    datasets: [
                        {
                            label : 'Dataset ID',
                            data: dataSet1,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label : 'Total Quiz',
                            data: dataSet2,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                })
                console.log(dataSet1,dataSet2);
            }).catch(e =>{
                console.log('error', e)
            })
        }
        fetchData ();
    },[]);
    return (<div style={{width:'85%', height:'50%'}}>
    <Bar data={data} options={options}/>
    </div>
    );
};

export default Statistics;