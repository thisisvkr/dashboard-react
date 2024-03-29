import Chart from 'react-apexcharts';
import './Overview.css';

function Overview() {
  return (
    <div className='overview-container'>
      <div className='overview-header'>
        <h3 className='overview-title'>Overview</h3>
        <select name='range' id='range'>
          <option value='quarterly'>Quarterly</option>
          <option value='monthly'>Monthly</option>
        </select>
      </div>
      <h5 className='earning-subtitle'>Monthly Earning</h5>
      <div className='chart-container'>
        <Chart
          type='bar'
          width={800}
          height={300}
          series={[
            {
              name: 'overview data',
              //jan  feb  mar apr may jun jul  aug  sep  oct nov  dec
              data: [
                { x: 'Jan', y: 4.5, fillColor: '#ede6ff' },
                { x: 'Feb', y: 3.5, fillColor: '#ede6ff' },
                { x: 'Mar', y: 6.5, fillColor: '#ede6ff' },
                { x: 'Apr', y: 5, fillColor: '#ede6ff' },
                { x: 'May', y: 6, fillColor: '#ede6ff' },
                { x: 'Jun', y: 3, fillColor: '#ede6ff' },
                { x: 'Jul', y: 6, fillColor: '#ede6ff' },
                { x: 'Aug', y: 6.8, fillColor: '#5f3dc4' }, // replace 'yourColor' with the color you want
                { x: 'Sep', y: 6.2, fillColor: '#ede6ff' },
                { x: 'Oct', y: 5, fillColor: '#ede6ff' },
                { x: 'Nov', y: 4.8, fillColor: '#ede6ff' },
                { x: 'Dec', y: 6, fillColor: '#ede6ff' },
              ],
            },
          ]}
          options={{
            states: {
              normal: {
                filter: {
                  type: 'none',
                  value: 0,
                },
              },
              hover: {
                filter: {
                  type: 'darken',
                  value: 0,
                },
              },
              active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                  type: 'darken',
                  value: 0,
                },
              },
            },

            colors: ['#eeeaea'],

            plotOptions: {
              bar: {
                borderRadius: 10,
              },
            },

            chart: {
              toolbar: {
                show: false,
              },
            },

            xaxis: {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],

              labels: {
                style: {
                  fontSize: 14,
                  fontWeight: 600,
                },
              },

              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },

            yaxis: {
              show: false,
            },

            dataLabels: {
              enabled: false,
            },

            grid: {
              show: false,
            },

            legend: {
              show: false,
            },
          }}
        />
      </div>
    </div>
  );
}

export default Overview;
