var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")

var booksAll =[]
if (localStorage.getItem("booksAll") != null){

    booksAll=JSON.parse(localStorage.getItem("booksAll"));
    displayBooks();

}






function bookMarckAll (){

    
     if (regularName() == false){
        window.alert("Site Name is not valid , Please follow the rules below : Site name must contain at least 3 characters")
    }
    else if (regularUrl() == false){
        window.alert(`Site  Url is not valid, Please follow the rules below :
        Site URL must be a valid one`)
    }
    else {
        var books = {
            name : siteName.value ,
            url : siteUrl.value
            
            
        }
        
        booksAll.push(books)
    }

    
    
    

    console.log(booksAll)
    displayBooks()
    clearforms()
    localStorage.setItem("booksAll",JSON.stringify(booksAll))
}


function displayBooks(){

    var displayAll="";
    for(var i =0 ; i <booksAll.length ;i++ ){
        displayAll +=` <tr>
        <td>${i+1}</td>
        <td>${booksAll[i].name}</td>
        <td><a href="${booksAll[i].url}" target="_blank"><button id="govisit" class="btn btn-warning"><span><i class="fa-solid fa-eye"></i></span>Visit</button></td></a>
        <td><button onclick="deleteElemint(${i})" class="btn btn-danger"><span><i class="fa-solid fa-trash-can"></i></span>Delete</button></td>
        
    </tr>`

    }

    
    document.getElementById("bodyItems").innerHTML= displayAll ;
}

function clearforms(){
    siteName.value=""
    siteUrl.value=""


}

function deleteElemint(remove){
    booksAll.splice(remove ,1)
    localStorage.setItem("booksAll",JSON.stringify(booksAll))
    displayBooks()

}

function regularName(){
    var regexName=/^[a-zA-Z1-9]{3,}/;
    return regexName.test(siteName.value);
}

function regularUrl(){
    var regexurl =/[a-zA-Z1-9][.][a-zA-Z1-9]{2,}/;
    return regexurl.test(siteUrl.value);

}



