/**
 * Created by Administrator on 2016/12/23.
 */
var oMain = document.getElementById("main");

var data = [
    {
        title : "A",
        series : [
            {
                name : "A 阿尔法罗密欧",
                href : "",
                car : [
                    {
                        name : "ALFA 156",
                        href : ""
                    },
                    {
                        name : "ALFA 166",
                        href : ""
                    },
                    {
                        name : "ALFA GT",
                        href : ""
                    },
                ]
            },
            {
                name : "A 阿斯顿・马丁",
                href : "",
                car : [
                    {
                        name : "V8 Vantage",
                        href : ""
                    },
                    {
                        name : "Vanquish",
                        href : ""
                    },
                    {
                        name : "Rapide",
                        href : ""
                    },
                    {
                        name : "阿斯顿・马丁DB9",
                        href : ""
                    },
                    {
                        name : "阿斯顿・马丁DBS",
                        href : ""
                    },
                    {
                        name : "拉共达Taraf",
                        href : ""
                    },
                ]
            },
            {
                name : "A 奥迪",
                href : "",
                car : [
                    {
                        name : "奥迪A6L",
                        href : ""
                    },
                    {
                        name : "奥迪A4L",
                        href : ""
                    },
                    {
                        name : "奥迪Q7",
                        href : ""
                    },
                    {
                        name : "奥迪R8",
                        href : ""
                    },
                    {
                        name : "奥迪S8",
                        href : ""
                    },
                    {
                        name : "奥迪A8",
                        href : ""
                    },
                    {
                        name : "奥迪Q5",
                        href : ""
                    },
                    {
                        name : "奥迪A7",
                        href : ""
                    },
                    {
                        name : "奥迪Q3",
                        href : ""
                    },
                ]
            },
        ]

    },
    {
        title : "A",
        series : [
            {
                name : "A 阿尔法罗密欧",
                href : "",
                car : [
                    {
                        name : "ALFA 156",
                        href : ""
                    },
                    {
                        name : "ALFA 166",
                        href : ""
                    },
                    {
                        name : "ALFA GT",
                        href : ""
                    },
                ]
            },
            {
                name : "A 阿斯顿・马丁",
                href : "",
                car : [
                    {
                        name : "V8 Vantage",
                        href : ""
                    },
                    {
                        name : "Vanquish",
                        href : ""
                    },
                    {
                        name : "Rapide",
                        href : ""
                    },
                    {
                        name : "阿斯顿・马丁DB9",
                        href : ""
                    },
                    {
                        name : "阿斯顿・马丁DBS",
                        href : ""
                    },
                    {
                        name : "拉共达Taraf",
                        href : ""
                    },
                ]
            },
            {
                name : "A 奥迪",
                href : "",
                car : [
                    {
                        name : "奥迪A6L",
                        href : ""
                    },
                    {
                        name : "奥迪A4L",
                        href : ""
                    },
                    {
                        name : "奥迪Q7",
                        href : ""
                    },
                    {
                        name : "奥迪R8",
                        href : ""
                    },
                    {
                        name : "奥迪S8",
                        href : ""
                    },
                    {
                        name : "奥迪A8",
                        href : ""
                    },
                    {
                        name : "奥迪Q5",
                        href : ""
                    },
                    {
                        name : "奥迪A7",
                        href : ""
                    },
                    {
                        name : "奥迪Q3",
                        href : ""
                    },
                ]
            },
        ]

    },
    {
        title : "A",
        series : [
            {
                name : "A 阿尔法罗密欧",
                href : "",
                car : [
                    {
                        name : "ALFA 156",
                        href : ""
                    },
                    {
                        name : "ALFA 166",
                        href : ""
                    },
                    {
                        name : "ALFA GT",
                        href : ""
                    },
                ]
            },
            {
                name : "A 阿斯顿・马丁",
                href : "",
                car : [
                    {
                        name : "V8 Vantage",
                        href : ""
                    },
                    {
                        name : "Vanquish",
                        href : ""
                    },
                    {
                        name : "Rapide",
                        href : ""
                    },
                    {
                        name : "阿斯顿・马丁DB9",
                        href : ""
                    },
                    {
                        name : "阿斯顿・马丁DBS",
                        href : ""
                    },
                    {
                        name : "拉共达Taraf",
                        href : ""
                    },
                ]
            },
            {
                name : "A 奥迪",
                href : "",
                car : [
                    {
                        name : "奥迪A6L",
                        href : ""
                    },
                    {
                        name : "奥迪A4L",
                        href : ""
                    },
                    {
                        name : "奥迪Q7",
                        href : ""
                    },
                    {
                        name : "奥迪R8",
                        href : ""
                    },
                    {
                        name : "奥迪S8",
                        href : ""
                    },
                    {
                        name : "奥迪A8",
                        href : ""
                    },
                    {
                        name : "奥迪Q5",
                        href : ""
                    },
                    {
                        name : "奥迪A7",
                        href : ""
                    },
                    {
                        name : "奥迪Q3",
                        href : ""
                    },
                ]
            },
        ]

    },
];

for (var k=0; k<data.length; k++){
    var div = document.createElement("div"),
        cdiv = document.createElement("div"),
        h3 = document.createElement("h3"),
        h3Text = document.createTextNode(data[k].title),
        fragment = document.createDocumentFragment();
    h3.appendChild(h3Text);
    div.appendChild(h3);
    for (var j=0; j<data[k].series.length; j++){
        var bdiv = document.createElement("div"),
            adiv = document.createElement("div"),
            a1 = document.createElement("a"),
            a1Text = document.createTextNode(data[k].series[j].name);
        a1.appendChild(a1Text);
        bdiv.appendChild(a1);

        for (var i=0; i<data[k].series[j].car.length; i++){
            var a = document.createElement("a"),
                aText = document.createTextNode(data[k].series[j].car[i].name);
            a.appendChild(aText);
            adiv.appendChild(a);
            bdiv.appendChild(adiv);

        }
        cdiv.appendChild(bdiv);
        ;
    }
    div.appendChild(cdiv)
    fragment.appendChild(div);
    oMain.appendChild(fragment);
}



