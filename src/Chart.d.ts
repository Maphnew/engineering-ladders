export default ApexChart;
declare class ApexChart {
    constructor(props: any);
    state: {
        series: {
            name: string;
            data: number[];
        }[];
        options: {
            chart: {
                height: number;
                type: string;
            };
            title: {
                text: string;
            };
            yaxis: {
                stepSize: number;
            };
            xaxis: {
                categories: string[];
            };
        };
    };
    render(): JSX.Element;
}
