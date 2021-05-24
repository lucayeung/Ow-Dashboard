function getPieOption() {
    return {
        legend: {
            orient: "vertical",
            left: "left",
            data: ["Apple", "Grapes", "Pineapples", "Oranges", "Bananas"]
        },
        series: [{
            type: "pie",
            data: [{
                value: 335,
                name: "Apple"
            }, {
                value: 310,
                name: "Grapes"
            }, {
                value: 234,
                name: "Pineapples"
            }, {
                value: 135,
                name: "Oranges"
            }, {
                value: 148,
                name: "Bananas"
            }]
        }]
    }
}

function getBarOption() {
    return {
        tooltip: {},
        legend: {},
        xAxis: {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {},
        series: [{
            name: "Sale",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 4]
        }]
    }
}

export {
    getBarOption,
    getPieOption
}