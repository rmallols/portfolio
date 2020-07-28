import Chart from 'chart.js';
const color = '#50fa7b';

export default function skillsChartDisplay(ctxNode) {
    new Chart(ctxNode, {
        type: 'radar',
        data: getChartData(),
        options: getChartOptions()
    });
}

function getChartData() {
    return {
        labels: [
            'JavaScript', 'HTML5', 'CSS3', 'Less/Sass', 'React',
            'Vue', 'Node/Express', 'MongoDB', 'Cloud'
        ],
        datasets: [{
            data: [90, 80, 80, 85, 70, 50, 70, 75, 80],
            borderColor: color,
            backgroundColor: getAlphaColor(color),
            borderWidth: 5
        }]
    };
}

function getChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            gridLines: { color: getAlphaColor('white') },
            angleLines: { color: getAlphaColor('white') },
            ticks: {
                display: false,
                beginAtZero: true,
                min: 0,
                max: 100
            },
            pointLabels: { fontSize: 16, fontColor: color },
        },
        legend: { display: false },
        animation: { duration: 1500 },
    };
}

function getAlphaColor(color, alpha = 0.1) {
    const colorHelper = Chart.helpers.color;
    return colorHelper(color).alpha(alpha).rgbString();
}