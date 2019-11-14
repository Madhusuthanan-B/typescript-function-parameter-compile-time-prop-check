interface ITime {
  time: number;
}

class TimeSeries {

    getTimes<T extends ITime>(arg: T[]) {
        return {
            times: arg.map((x: T) => x.time)
        };
    }
}

const data1 = [{ time: 1, data: '60' }, { time: 2, data: '30' }, { time: 3, data: '20' }];
const data2 = [{ time: 5, value: 20 }, { time: 6, value: 25 }];

// New data set without time property
const data3 = [{ t: 10, value: 50 }, { t: 11, value: 60 }];

var series = new TimeSeries();

console.log(series.getTimes(data1));
console.log(series.getTimes(data2));
console.log(series.getTimes(data3));
