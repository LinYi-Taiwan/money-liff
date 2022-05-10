import React from "react";

import Container from "../../components/atom/Container";
import TripSchedule from "../../components/organisms/TripSchedule";

const tripList = [
    {
        date: "2022/05/05",
        schedule: [
            { id: 1, arrivedTime: "15:30", destination: "跨海大橋" },
            { id: 2, arrivedTime: "16:30", destination: "三仙台" },
            { id: 3, arrivedTime: "17:30", destination: "仙草冰" },
        ],
    },
    {
        date: "2022/05/06",
        schedule: [
            { id: 1, arrivedTime: "15:30", destination: "隘門沙灘" },
            { id: 2, arrivedTime: "16:30", destination: "裡正角沙灘" },
            { id: 3, arrivedTime: "17:30", destination: "山水沙灘" },
        ],
    },
    {
        date: "2022/05/07",
        schedule: [
            { id: 1, arrivedTime: "15:30", destination: "吉貝島" },
            { id: 2, arrivedTime: "16:30", destination: "望安島" },
            { id: 3, arrivedTime: "17:30", destination: "仙草冰" },
        ],
    },
];

function Schedule(props) {
    return (
        <div className="overview-wrapper">
            <Container>
                <TripSchedule tripList={tripList}></TripSchedule>
            </Container>
        </div>
    );
}

export default Schedule;
