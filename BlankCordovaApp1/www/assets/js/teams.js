

var db = null, ID = 0;

document.addEventListener("deviceready", function () {
    //db = window.sqlitePlugin.openDatabase({ name: 'ProOnePal.db', location: 'default' });
    db = window.openDatabase({ name: 'ProOnePal.db', location: '../../database/' })
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXIST TEAMS (id int,name text, kasi text,imgPath text,Tournament_id int)")
        tx.executeSql("INSERT INTO TEAMS (id,name,kasi,imgPath,Tournament_id) values (1,chiefs,senaoane,'c:\Users\Siya',2040)")
    }, function (error) {
        alert("Transaction error :" + error.message);
    }, function () {
        alert("database genarated succesfully!")
    });
}, false);



var myRequest;

myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function () {

    if (myRequest.readyState == 4) {
        var lines = myRequest.responseText.split('\n');
        var i = 1;
        var size = lines.length;


        while (i != size - 2) {

            var header = document.createElement("h4");
            var para = document.createElement("p");
            var t1 = document.createTextNode(lines[i].split(',')[1].split('"')[1]);
            var t2 = document.createTextNode(lines[i].split(',')[2].split('"')[1]);
            var th = document.createElement("th");

            header.appendChild(t1);
            para.appendChild(t2);
            document.getElementById("content").appendChild(header);
            document.getElementById("content").appendChild(para);
            i++;
        }

        //var p = document.createElement("p");
        //var t = document.createTextNode(names);
        //p.appendChild(t);
        //document.getElementById("content").appendChild(p);

    }
};


myRequest.open('GET', '../dbo.Teams.csv', true);
myRequest.send(null);
