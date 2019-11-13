class TimeSeries {
    data1 = [{ time: 1, data: '60' }, { time: 2, data: '30' }, { time: 3, data: '20' }];
    data2 = [{ time: 5, value: 20 }, { time: 6, value: 25 }];

    getTimes(arg: any) {
        return {
            times: arg.map((x: any) => x.time)
        };
    }
}