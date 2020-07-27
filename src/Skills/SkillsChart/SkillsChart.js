import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

export default function SkillsChart() {

    const [rootNode, setRootNode] = useState();

    const getAlphaColor = (color, alpha = 0.1) => {
        let colorHelper = Chart.helpers.color;
        return colorHelper(color).alpha(alpha).rgbString();
    }

    useEffect(() => {
        let chartDelay = 2000;
        if (rootNode) {
            setTimeout(() => {
                new Chart(rootNode, {
                    type: 'radar',
                    data: {
                        labels: [
                            'JavaScript', 'HTML5', 'CSS3', 'Less/Sass', 'React',
                            'Vue', 'Node/Express', 'MongoDB', 'Cloud'
                        ],
                        datasets: [{
                            data: [90, 80, 80, 85, 70, 50, 70, 75, 80],
                            borderColor: '#8be9fd',
                            backgroundColor: getAlphaColor('#8be9fd'),
                            borderWidth: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scale: {
                            gridLines: { color: getAlphaColor('white') },
                            angleLines: {
                                color: getAlphaColor('white'),
                            },
                            ticks: {
                                display: false,
                                beginAtZero: true,
                                min: 0,
                                max: 100
                            },
                            pointLabels: {
                                fontSize: 16,
                                fontColor: '#8be9fd'
                            },
                        },
                        legend: {
                            display: false
                        },
                        animation: {
                            duration: 1500
                        },
                    }
                });
            }, 1000);
        }
    }, [rootNode]);

    return (
        <div className="SkillsChart">
            <canvas
                className="radar"
                ref={el => !rootNode && el && setRootNode(el)}
            />
        </div>
    );
}