import ApexCharts from "apexcharts"
import ReactApexChart from "react-apexcharts";
import React from "react";

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: props.series,
        options: {
          chart: {
            height: 350,
            type: 'radar',
            toolbar: {
              show: false
            },
          },
          title: {
            text: props.title,
            align: 'center'
          },
          yaxis: {
            stepSize: 1,
            labels: {
              show: false,
              formatter: function(val, index) {
                return ''
              }
            }
          },
          xaxis: {
            // type: 'numeric',
            categories: ['Technology', 'System', 'People', 'Process', 'Influence'],
            labels: {
              show: true
            }
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            }
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            formatter: function (val, opts) {
              switch (opts.dataPointIndex) {
                case 0: 
                  switch (val) {
                    case 5:
                      return 'Creates'
                    case 4:
                      return 'Masters'
                    case 3:
                      return 'Evangelizes'
                    case 2:
                      return 'Specializes'
                    case 1:
                      return 'Adopts'
                    default:
                      return ''
                  }
                  case 1: 
                  switch (val) {
                    case 5:
                      return 'Leads'
                    case 4:
                      return 'Evolves'
                    case 3:
                      return 'Owns'
                    case 2:
                      return 'Designs'
                    case 1:
                      return 'Enhances'
                    default:
                      return ''
                  }
                  case 2: 
                  switch (val) {
                    case 5:
                      return 'Manages'
                    case 4:
                      return 'Coordinates'
                    case 3:
                      return 'Mentors'
                    case 2:
                      return 'Supports'
                    case 1:
                      return 'Learns'
                    default:
                      return ''
                  }
                  case 3: 
                  switch (val) {
                    case 5:
                      return 'Defines'
                    case 4:
                      return 'Adjusts'
                    case 3:
                      return 'Challenges'
                    case 2:
                      return 'Enforces'
                    case 1:
                      return 'Follows'
                    default:
                      return ''
                  }
                  case 4: 
                  switch (val) {
                    case 5:
                      return 'Community'
                    case 4:
                      return 'Company'
                    case 3:
                      return 'Multiple Teams'
                    case 2:
                      return 'Team'
                    case 1:
                      return 'Subsystem'
                    default:
                      return ''
                  }
              
                default:
                  return val
              }
            },
            background: {
              enabled: true,
              borderRadius:2,
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} labels={this.state.labels} series={this.state.series} type="radar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default ApexChart
