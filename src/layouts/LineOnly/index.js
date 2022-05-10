export const flexBox = ({ arrivedTime, destination, googleMapUri }) => {
    return {
        type: "bubble",
        size: "mega",
        header: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: "TO",
                            color: "#ffffff66",
                            size: "sm",
                        },
                        {
                            type: "text",
                            text: destination,
                            color: "#ffffff",
                            size: "xl",
                            flex: 4,
                            weight: "bold",
                        },
                    ],
                },
            ],
            paddingAll: "20px",
            backgroundColor: "#0367D3",
            spacing: "md",
            height: "100px",
            paddingTop: "22px",
        },
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "text",
                    text: "Total: 1 hour",
                    color: "#b7b7b7",
                    size: "xs",
                },
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "text",
                            text: "Now",
                            size: "sm",
                            gravity: "center",
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "filler",
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [],
                                    cornerRadius: "30px",
                                    height: "12px",
                                    width: "12px",
                                    borderColor: "#EF454D",
                                    borderWidth: "2px",
                                },
                                {
                                    type: "filler",
                                },
                            ],
                            flex: 0,
                        },
                        {
                            type: "text",
                            text: "目前所在地",
                            gravity: "center",
                            flex: 4,
                            size: "sm",
                        },
                    ],
                    spacing: "lg",
                    cornerRadius: "30px",
                    margin: "xl",
                },
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "box",
                            layout: "baseline",
                            contents: [
                                {
                                    type: "filler",
                                },
                            ],
                            flex: 1,
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "box",
                                    layout: "horizontal",
                                    contents: [
                                        {
                                            type: "filler",
                                        },
                                        {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [],
                                            width: "2px",
                                            backgroundColor: "#B7B7B7",
                                        },
                                        {
                                            type: "filler",
                                        },
                                    ],
                                    flex: 1,
                                },
                            ],
                            width: "12px",
                        },
                        {
                            type: "text",
                            text: "Drive 40min",
                            gravity: "center",
                            flex: 4,
                            size: "xs",
                            color: "#8c8c8c",
                        },
                    ],
                    spacing: "lg",
                    height: "64px",
                },
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: arrivedTime,
                                    gravity: "center",
                                    size: "sm",
                                },
                            ],
                            flex: 1,
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "filler",
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [],
                                    cornerRadius: "30px",
                                    width: "12px",
                                    height: "12px",
                                    borderWidth: "2px",
                                    borderColor: "#6486E3",
                                },
                                {
                                    type: "filler",
                                },
                            ],
                            flex: 0,
                        },
                        {
                            type: "text",
                            text: destination,
                            gravity: "center",
                            flex: 4,
                            size: "sm",
                        },
                    ],
                    spacing: "lg",
                    cornerRadius: "30px",
                },
            ],
        },
        footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
                {
                    type: "button",
                    style: "link",
                    height: "sm",
                    action: {
                        type: "uri",
                        label: "查看地圖",
                        uri: googleMapUri,
                    },
                },

                {
                    type: "box",
                    layout: "vertical",
                    contents: [],
                    margin: "sm",
                },
            ],
            flex: 0,
        },
    };
};
