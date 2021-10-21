// style -> body
$("div").css({"background-color":"black" , "margin":'auto' , "width": '30%' ,  'align-content': 'center' , 'border-radius': '15px' , 'border-style': 'double' , 'border-color': 'aliceblue'})
//style -> input
$('input').css({'margin': '12px' , 'padding': '3px'})

//style -> paragraph
$('p').css({'color': 'aliceblue' , 'margin': '12px'})
//style -> all buttons
$('button').css({'padding': '3px' , 'margin-bottom': '12px' , 'margin-left': '10px'})



//fuctinality

const arr = [{name:"",iscompleted:false},{name:"",iscompleted:false}];
// let count_elements = $('.class').length;
let count=0;
const Count =() => {
    
    count++
    $("#co").text(` ${count} `);
}




 const rinder =()=>{
    $("#myList").html("")
     for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index]);
         $("#myList").append(`<li> ${arr[index].name}  </li>`)         
     }
 }
 rinder();
    

const addToList=()=>{
    const newItem = $("#inp").val()
    const obj = {name:newItem,iscompleted:false}
    arr.push(obj)
    Count();
    $("#co").text(`${count} `)
    rinder()
}
 $("#b1").click(addToList)

   



const clearList = ()=>{
    arr.length=0
    count =0
    $("#co").text(`${count} `)
    rinder();
    
}
$("#bcl").click(clearList)

const clearcompletedList = ()=>{
    
    rinder();
}






