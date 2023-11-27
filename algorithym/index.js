const calendar = [
    {
        day: 'Monday',
        isWorkingDay: true,
        shifts: [
            {
                start: '08:00',
                end: '16:00',
                position: 'waiter',
                worker: ''
            },
            {
                start: '16:00',
                end: '22:00',
                position: 'host',
                worker: ''
            },
        ]
    },
    {
        day: 'Tuesday',
        isWorkingDay: true,
        shifts: [
            {
                start: '09:00',
                end: '17:00',
                position: 'chef',
                worker: ''
            },
            {
                start: '18:00',
                end: '23:00',
                position: 'bartender',
                worker: ''
            },
        ]
    },
    {
        day: 'Wednesday',
        isWorkingDay: true,
        shifts: [
            {
                start: '10:00',
                end: '18:00',
                position: 'waiter',
                worker: ''
            },
            {
                start: '18:00',
                end: '23:00',
                position: 'host',
                worker: ''
            },
        ]
    },
    {
        day: 'Thursday',
        isWorkingDay: true,
        shifts: [
            {
                start: '08:00',
                end: '16:00',
                position: 'chef',
                worker: ''
            },
            {
                start: '16:00',
                end: '22:00',
                position: 'bartender',
                worker: ''
            },
        ]
    },
    {
        day: 'Friday',
        isWorkingDay: true,
        shifts: [
            {
                start: '10:00',
                end: '18:00',
                position: 'waiter',
                worker: ''
            },
            {
                start: '18:00',
                end: '23:00',
                position: 'host',
                worker: ''
            },
        ]
    },
];

const wika_mala = {
    id: 1,
    name: 'Wika Mala',
    dysposition: [
        {   
            day: 'Monday',
            from: '08:00',
            to: '18:00'
        },
        {   
            day: 'Tuesday',
            from: '00:00',
            to: '00:00'
        },
        {   
            day: 'Wednesday',
            from: '09:00',
            to: '15:00'
        },
        {   
            day: 'Thursday',
            from: '17:30',
            to: '23:00'
        },
        {   
            day: 'Friday',
            from: '00:00',
            to: '24:00'
        },
    ]       
}

const domi = {
    id: 2,
    name: 'Domi',
    dysposition: [
        {   
            day: 'Monday',
            from: '12:00',
            to: '22:00'
        },
        {   
            day: 'Tuesday',
            from: '10:00',
            to: '20:00'
        },
        {   
            day: 'Wednesday',
            from: '11:00',
            to: '19:00'
        },
        {   
            day: 'Thursday',
            from: '08:30',
            to: '22:00'
        },
        {   
            day: 'Friday',
            from: '00:00',
            to: '24:00'
        },
    ]
}

const bartek = {
    id: 3,
    name: 'Bartek',
    dysposition: [
        {   
            day: 'Monday',
            from: '12:00',
            to: '16:00'
        },
        {   
            day: 'Tuesday',
            from: '10:00',
            to: '17:00'
        },
        {   
            day: 'Wednesday',
            from: '11:00',
            to: '22:00'
        },
        {   
            day: 'Thursday',
            from: '12:30',
            to: '23:00'
        },
        {   
            day: 'Friday',
            from: '12:00',
            to: '24:00'
        },
    ]
}

const kasia = {
    id: 4,
    name: 'Kasia',
    dysposition: [
        {   
            day: 'Monday',
            from: '08:00',
            to: '18:00'
        },
        {   
            day: 'Tuesday',
            from: '00:00',
            to: '00:00'
        },
        {   
            day: 'Wednesday',
            from: '09:00',
            to: '15:00'
        },
        {   
            day: 'Thursday',
            from: '17:30',
            to: '23:00'
        },
        {   
            day: 'Friday',
            from: '00:00',
            to: '24:00'
        },
    ]
}

const kuba = {
    id: 5,
    name: 'Kuba',
    dysposition: [
        {   
            day: 'Monday',
            from: '08:00',
            to: '18:00'
        },
        {   
            day: 'Tuesday',
            from: '00:00',
            to: '00:00'
        },
        {   
            day: 'Wednesday',
            from: '09:00',
            to: '15:00'
        },
        {   
            day: 'Thursday',
            from: '17:30',
            to: '23:00'
        },
        {   
            day: 'Friday',
            from: '00:00',
            to: '24:00'
        },
    ]
}

const kacper = {
    id: 6,
    name: 'Kacper',
    dysposition: [
        {   
            day: 'Monday',
            from: '08:00',
            to: '18:00'
        },
        {   
            day: 'Tuesday',
            from: '00:00',
            to: '00:00'
        },
        {   
            day: 'Wednesday',
            from: '09:00',
            to: '15:00'
        },
        {   
            day: 'Thursday',
            from: '17:30',
            to: '23:00'
        },
        {   
            day: 'Friday',
            from: '00:00',
            to: '24:00'
        },
    ]
}



const workers = [wika_mala, domi, bartek, kasia, kuba, kacper];

const hourToNum = (hour) => {
    const [h, m] = hour.split(':');
    return parseInt(h + m, 10);
}

const set_workers = (calendar, workers) => {
    calendar.forEach(day => {
        if(day.isWorkingDay){
            day.shifts.forEach(shift => {

                if(!workers.length) {
                    console.log('no more workers available');
                    return calendar;
                };

                workers.forEach(worker => {
                    const dyspositionForAday = worker.dysposition.find(dysp => dysp.day === day.day)
                    const start = hourToNum(shift.start);
                    const end = hourToNum(shift.end);
                    const from = hourToNum(dyspositionForAday.from);
                    const to = hourToNum(dyspositionForAday.to);
                    if (start >= from && end <= to) {
                        shift.worker = worker.name;
                        workers.splice(workers.indexOf(worker), 1);
                        return;
                    }
                });
            })
        }
    });
    return calendar;
} 

console.dir(set_workers(calendar, workers), {maxArrayLength: null, depth: null});