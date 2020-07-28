import React, { useState, useEffect } from 'react';
import skillsChartDisplay from './skillsChartDisplay';

export default function SkillsChart() {

    const [rootNode, setRootNode] = useState();

    useEffect(() => {
        //We delay the display of the chart because of two reasons:
        //1. Performance: To relieve the stress of view migration
        //2. UX: To show the expansion of the chart once it's fully visible
        const chartDisplayDelay = 1250;
        if (rootNode) {
            setTimeout(() => skillsChartDisplay(rootNode), chartDisplayDelay);
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