function handleEvent(e) {
    console.log("handleEvent child button");
    console.log(e.target);
    console.log(e)
}

function tell_me_class_name(ev) {
    /*
        var para1 = document.getElementById("tag-1");
        para1.classList.add("bg-warning")

    */

    console.log(ev);
    // console.log(ev.target) // targeted element obj

    var para = ev.target;

    // ev.target.classList.toggle("border");
    // ev.target.classList.toggle("border-dark");

    var list = ["border", "border-dark"];
    list.forEach((item) => {
        para.classList.add(item)
    })

    // ev.target.setAttribute("class", list.join(" "));

    /* 
        for (let index = 0; index < list.length; index++) {
            let element = list[index];
            para.classList.add(element)
        }
        
    */

}

//pageX ==> X co-ordinate
//pageY ==> Y co-ordinate