import React from "react";

import TripSchedule from "../../components/organisms/TripSchedule";

const tripList = [
    {
        date: "2022/05/01",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "跨海大橋",
                googleMapUri: "https://goo.gl/maps/w2Gv1umtUdyZ8bLa8",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "三仙台",
                googleMapUri: "https://goo.gl/maps/2TKoyMEWAkiKDxPs9",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/02",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "跨海大橋",
                googleMapUri: "https://goo.gl/maps/w2Gv1umtUdyZ8bLa8",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "三仙台",
                googleMapUri: "https://goo.gl/maps/2TKoyMEWAkiKDxPs9",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/03",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "跨海大橋",
                googleMapUri: "https://goo.gl/maps/w2Gv1umtUdyZ8bLa8",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "三仙台",
                googleMapUri: "https://goo.gl/maps/2TKoyMEWAkiKDxPs9",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/04",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "跨海大橋",
                googleMapUri: "https://goo.gl/maps/w2Gv1umtUdyZ8bLa8",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "三仙台",
                googleMapUri: "https://goo.gl/maps/2TKoyMEWAkiKDxPs9",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/05",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "跨海大橋",
                googleMapUri: "https://goo.gl/maps/w2Gv1umtUdyZ8bLa8",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "三仙台",
                googleMapUri: "https://goo.gl/maps/2TKoyMEWAkiKDxPs9",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/06",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "隘門沙灘",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "裡正角沙灘",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "山水沙灘",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/07",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "吉貝島",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "望安島",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
    {
        date: "2022/05/08",
        schedule: [
            {
                id: 1,
                arrivedTime: "15:30",
                destination: "吉貝島",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
            {
                id: 2,
                arrivedTime: "16:30",
                destination: "望安島",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
            {
                id: 3,
                arrivedTime: "17:30",
                destination: "仙草冰",
                googleMapUri: "https://goo.gl/maps/5Vj5X931H3Tdggf47",
            },
        ],
    },
];

function Schedule(props) {
    return <TripSchedule tripList={tripList}></TripSchedule>;
}

export default Schedule;
