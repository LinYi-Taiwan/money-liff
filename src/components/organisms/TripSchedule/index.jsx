import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Circle from "../../atom/Circle";
import { sendFlexMsg } from "../../../store/slice/liff";

import "./index.scss";

function TripSchedule({ tripList }) {
    const dispatch = useDispatch();

    const [trip, setTrip] = useState(null);
    const [shareMode, setShareMode] = useState(false);

    const isDisabled = (current) => {
        // console.log(trip && current.id === trip.id);
        // 只要 trip 不是空值，當前被選到的才可以操作
        // trip 是空值，全部都可以操作
        return current !== trip?.journey && trip;
    };

    const clearSelect = () => {
        if (trip) trip.dom.checked = false;
        setTrip(null);
        setShareMode(false);
    };

    return (
        <>
            <div className="travel-route">
                <div className="liff-action">
                    {shareMode ? (
                        trip ? (
                            <div
                                onClick={() => {
                                    dispatch(sendFlexMsg(trip.journey));
                                    clearSelect();
                                }}
                            >
                                傳送到群組
                            </div>
                        ) : (
                            <div onClick={() => clearSelect()}>取消分享</div>
                        )
                    ) : (
                        <div
                            onClick={() => {
                                setShareMode(!shareMode);
                            }}
                        >
                            分享行程
                        </div>
                    )}
                </div>
                {tripList.map((day, index) => {
                    return (
                        <div className="journey-wrapper" key={day.date + index}>
                            <div className="date">{day.date}</div>
                            {day.schedule.map((journey) => {
                                return (
                                    <div
                                        className="task-wrapper"
                                        key={journey.destination}
                                    >
                                        <div className="task">
                                            <span>{journey.arrivedTime}</span>
                                            <Circle
                                                className="circle"
                                                isStart={journey.id === 1}
                                            />
                                            <span> {journey.destination}</span>{" "}
                                            <input
                                                className={`checkbox ${
                                                    shareMode ? "active" : ""
                                                }`}
                                                onClick={(e) => {
                                                    e.target.checked
                                                        ? setTrip({
                                                              journey: journey,
                                                              dom: e.target,
                                                          })
                                                        : setTrip(null);
                                                }}
                                                type="checkbox"
                                                disabled={
                                                    isDisabled(journey)
                                                        ? "disabled"
                                                        : ""
                                                }
                                            />
                                        </div>
                                        <div className="arrive-line"></div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default TripSchedule;
