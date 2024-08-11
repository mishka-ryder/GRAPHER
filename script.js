document.getElementById('graphForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const xData = document.getElementById('xData').value.split(',').map(Number);
    const yData = document.getElementById('yData').value.split(',').map(Number);

    const ctx = document.getElementById('graphCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'line', // or 'bar', 'pie', etc.
        data: {
            labels: xData,
            datasets: [{
                label: 'User Data',
                data: yData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
});
