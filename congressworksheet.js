//document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
console.log(data.results)

var array = data.results
var firstobject = array[0]
console.log(firstobject)
var members = firstobject.members
console.log(members)



function buildTable(members) {

    var tbody = document.getElementById("members-table")
    tbody.innerHTML = "";
    for (i = 0; i < members.length; i++) {
        var row = document.createElement("TR")

        var TD1 = document.createElement("TD")
        var firstName = members[i].first_name

        var middleName = ""

        if (members[i].middle_name != null) {
            middleName = members[i].middle_name;
        }


        var fullName = firstName + " " + middleName + " " + members[i].last_name



        TD1.innerHTML = fullName.link(members[i].url)





        row.appendChild(TD1)

        var TD2 = document.createElement("TD")
        var party = members[i].party
        TD2.innerHTML = party
        row.appendChild(TD2)

        var TD3 = document.createElement("TD")
        var state = members[i].state
        TD3.innerHTML = state
        row.appendChild(TD3)

        var TD4 = document.createElement("TD")
        var seniority = members[i].seniority
        TD4.innerHTML = seniority
        row.appendChild(TD4)

        var TD5 = document.createElement("TD")
        var totalVotes = members[i].votes_with_party_pct
        TD5.innerHTML = totalVotes
        row.appendChild(TD5)

        tbody.appendChild(row)
    }

}
buildTable(members);




function getCheckBoxes() {

    var checkBox = [];

    var nodeList = document.querySelectorAll('input[name=mycheckboxes]:checked');
    for (var i = 0; i < nodeList.length; i++) {
        checkBox.push(nodeList[i].value)
    }

    console.log(checkBox)
    var selectedState = document.querySelector("#state-filter").value

    console.log(selectedState)
    filterMembers(checkBox, selectedState)
}



function filterMembers(checkBox, selectedState) {
    var filteredMembers = [];
    //    console.log(selectedState)
    //    console.log(checkBox)
    for (var i = 0; i < members.length; i++) {
        if (checkBox.length == 0 && selectedState == "") {
            filteredMembers.push(members[i])
        } else if (checkBox.length != 0 && selectedState == "") {
            if (checkBox.includes(members[i].party)) {
                filteredMembers.push(members[i])
            }
        } else if (selectedState != "" && checkBox.length == 0) {
            if (selectedState == members[i].state) {
                filteredMembers.push(members[i])
            }

        } else {
            if (checkBox.includes(members[i].party) && selectedState == members[i].state) {
                filteredMembers.push(members[i])
            }

        }
    }
    console.log(filteredMembers)
    buildTable(filteredMembers)
}

function buildDropDown(states) {
    var select = document.getElementById("state-filter")
    

    for (var i = 0; i < states.length; i++) {
        //    console.log(members[i].state)
        var st8s = states[i];
        var el = document.createElement("option")
        //    console.log(el)
        el.textContent = st8s;
        el.value = st8s;
        select.appendChild(el);


    }
}

function removeDups(members) {
    let unique = [];
    //            st8s.forEach(function (members[i].st8s) {
    //                    if (!unique(members[i].st8s) {
    //                            unique(members[i].st8s) = true;
    //                        }
    //                    }); console.log(unique)

//    
//    var split = st8s.split("")
//    console.log(split)
//    //
//    var sort = split.sort()
//    console.log(sort)
//    //
//    var join = sort.join("")
//    console.log(join)
    
    members.forEach(function(member){
        if(!unique.includes(member.state)){
            unique.push(member.state)
        }
    })
    console.log(unique)
    
//    for(var i = 0; i < members.length; i++){
//        if(!unique.includes(members[i].state)){
//            unique.push(member[i].state)
//        }
//    }
    unique.sort()
    console.log(unique)
    buildDropDown(unique);

}
removeDups(members);
