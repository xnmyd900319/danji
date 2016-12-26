/**
 * Created by Administrator on 2016/12/22.
 */
//数组forEach方法补丁
Array.prototype.forEach = function(callback){
    var a = 0,
        len = this.length;
    while(a < len){
        callback(this[a], a++, this);
    }
};
var oMain = document.getElementById("main");
var data = [
    {
        province : "热门城市",
        city : [
            {
                name : "北京",
                href : ""
            },
            {
                name : "宁波",
                href : ""
            },
            {
                name : "深圳",
                href : ""
            },
            {
                name : "厦门",
                href : ""
            },
            {
                name : "成都",
                href : ""
            },
        ]
    },
    {
        province : "北京",
        city : [
            {
                name : "",
                href : ""
            }
        ]
    },
    {
        province : "新疆",
        city : [
            {
                name : "乌鲁木齐",
                href : ""
            },
        ]
    },
    {
        province : "辽宁",
        city : [
            {
                name : "沈阳",
                href : ""
            },
            {
                name : "大连",
                href : ""
            },
            {
                name : "抚顺",
                href : ""
            },
            {
                name : "盘锦",
                href : ""
            },
            {
                name : "鞍山",
                href : ""
            },
        ]
    },
    {
        province : "湖南",
        city : [
            {
                name : "长沙",
                href : ""
            },
            {
                name : "湘潭",
                href : ""
            },
        ]
    },
    {
        province : "热门城市",
        city : [
            {
                name : "北京",
                href : ""
            },
            {
                name : "宁波",
                href : ""
            },
            {
                name : "深圳",
                href : ""
            },
            {
                name : "厦门",
                href : ""
            },
            {
                name : "成都",
                href : ""
            },
        ]
    },
    {
        province : "北京",
        city : [
            {
                name : "",
                href : ""
            }
        ]
    },
    {
        province : "新疆",
        city : [
            {
                name : "乌鲁木齐",
                href : ""
            },
        ]
    },
    {
        province : "辽宁",
        city : [
            {
                name : "沈阳",
                href : ""
            },
            {
                name : "大连",
                href : ""
            },
            {
                name : "抚顺",
                href : ""
            },
            {
                name : "盘锦",
                href : ""
            },
            {
                name : "鞍山",
                href : ""
            },
        ]
    },
    {
        province : "湖南",
        city : [
            {
                name : "长沙",
                href : ""
            },
            {
                name : "湘潭",
                href : ""
            },
        ]
    },
    {
        province : "热门城市",
        city : [
            {
                name : "北京",
                href : ""
            },
            {
                name : "宁波",
                href : ""
            },
            {
                name : "深圳",
                href : ""
            },
            {
                name : "厦门",
                href : ""
            },
            {
                name : "成都",
                href : ""
            },
        ]
    },
    {
        province : "北京",
        city : [
            {
                name : "",
                href : ""
            }
        ]
    },
    {
        province : "新疆",
        city : [
            {
                name : "乌鲁木齐",
                href : ""
            },
        ]
    },
    {
        province : "辽宁",
        city : [
            {
                name : "沈阳",
                href : ""
            },
            {
                name : "大连",
                href : ""
            },
            {
                name : "抚顺",
                href : ""
            },
            {
                name : "盘锦",
                href : ""
            },
            {
                name : "鞍山",
                href : ""
            },
        ]
    },
    {
        province : "湖南",
        city : [
            {
                name : "长沙",
                href : ""
            },
            {
                name : "湘潭",
                href : ""
            },
        ]
    },
];

// data[i]
/*

data[0].province
data[0].city[i].name
data[0].city[i].href
*/

// function demo(y) {
//     var h3 = document.createElement("h3"),
//         h3text= document.createTextNode(data[y].province);
//         fragment = document.createDocumentFragment();
//     h3.appendChild(h3text);
//     fragment.appendChild(h3)
//     for(var i =0;i<data[y].city.length;i++){
//         var a = document.createElement("a");
//         aText = document.createTextNode(data[y].city[i].name);
//         a.href = data[y].city[i].href;
//         a.appendChild(aText);
//         fragment.appendChild(a);
//     }
//     oMain.appendChild(fragment);
// }
// for(var y =0;y<data.length;y++){
//     demo(y)
// }
function demo(i) {
    var h3 = document.createElement("h3"),
        h3text= document.createTextNode(data[i].province),
        fragment = document.createDocumentFragment();
    h3.appendChild(h3text);
    fragment.appendChild(h3);
    data[i].city.forEach(function (item) {
        var a = document.createElement("a");
        a.appendChild(document.createTextNode(item.name));
        a.href = item.href;
        fragment.appendChild(a);
    })
    oMain.appendChild(fragment);
}
for (var i=0; i<data.length; i++){
    demo(i)
}






















