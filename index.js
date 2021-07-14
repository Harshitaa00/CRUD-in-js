var data = document.getElementById('data');
var userlist = document.getElementById('userlist');

//add user code
var counter = 0;

function adduser(){
   var inputdata = document.getElementById('data').value;
   //console.log(inputdata);
   var html ='<div class = "row" id ="data'+counter+'" style = "margin: bottom 15px;">'+
                    
   
   '<div class="col-md-2 col-sm-2 col-xs-2">'+
       '<input type="text"class="form-control" value="'+inputdata+'"disabled>'+
       '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
       '<button type="button" class="btn btn-info" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
       '<button type="button" class="btn btn-danger" onclick="deleted(this.id)" id="delete'+counter+'">Delete</button>'+
       '<br>'+
     '</div>' 
'</div>';
counter++;
document.getElementById('userlist').insertAdjacentHTML('beforeend',html);
};

function edit(editId){
  //console.log(editId);
  var parent = document.getElementById(editId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.removeAttribute('disabled');
  console.log(child);
}

function update(updateId){
  //console.log(updateId);
  var parent = document.getElementById(updateId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.setAttribute("disabled",'disabled');
  console.log(child);
}

function deleted(deleteId){
  //console.log(deleteId);
  var parent = document.getElementById(deleteId).parentNode.parentNode;
  parent.remove();
  console.log(parent);
}

