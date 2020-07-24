import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import Footer from '../shared/Footer/Footer';

export default function Skills() {

    const [rootNode, setRootNode] = useState();

    const getAlphaColor = (color, alpha = 0.1) => {
        let colorHelper = Chart.helpers.color;
        return colorHelper(color).alpha(alpha).rgbString();
    }

    useEffect(() => {
        if (rootNode) {
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
        }
    }, [rootNode]);

    return (
        <div className="Skills">
            <main>
                <div className="content">
                    <div className="no-margin">
                        <canvas
                            className="radar"
                            ref={el => !rootNode && el && setRootNode(el)}
                        />
                    </div>
                    <div className="text">
                        <p>
                            <label className="is-color-red">I love JavaScript!</label><br/>
                            I've been using it commercially for 15+ years,
                            Not just in frontend and backend, but also in exotic environments
                            including PDF readers and <label className="is-color-green">Robots.</label>
                        </p>
                        <p>
                            JavaScript friends are my friends too. I've been playing
                            with many JS libraries, plugins and frameworks, including YUI,
                            jQuery and Angular (I was one of the first Angular devs globally, since Summer 2011!).
                            I specialised in <label className="is-color-cyan">ReactJs</label>&nbsp;
                            an I'm now learning <label className="is-color-yellow">Deno and Vue3</label>.
                        </p>
                        <p>
                            I really enjoy playing with <label className="is-color-red">UI/UX</label>&nbsp;
                            too! I strongly believe that thinks should work smoothly, but they should look great too.
                        </p>
                        <p>
                            I'm a curious animal when talking about&nbsp;
                            <label className="is-color-green">testing</label> at any level
                            (unit, component, functional, integration...even screenshot-based!)
                        </p>
                        <p>
                            And the <label className="is-color-cyan">cloud</label>! I've worked with different platforms including
                            AWS (my favourite!), Google Cloud, Heroku, Vercel, Github Pages, etc.
                        </p>
                        <p>
                            I'm passionate about building <label className="is-color-red">UI/UX</label>, 
                            running natively on mobile and desktop, using a single core and APIs.
                        </p>
                    </div>
                </div>
            </main>
            <Footer text="Experience" path="experience" />
        </div>
    );
}