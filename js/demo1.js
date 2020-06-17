$(document).ready(function(){
    let container = document.querySelector(".container");
    
   
    $.get("https://reqres.in/api/users?page=1",function(data) {
        $.each(data.data,function(index,value){
            $(".container").append(`
            <div>
                <table>
                    <tr>
                        <th class="float"><img src=${data.data[index].avatar}></th>
                        <th>${data.data[index].first_name} ${data.data[index].last_name}</th>
                        <th>${data.data[index].email}</th>
                        <th>Developer</th>
                        <th><button class="activate">activated</button></th>
                        <th><div class="drp col-sm-1 col-md-1 text-secondary text-center">
                        <i class="fas fa-cog"></i>
                        <div class="dropdown">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                            </button>
                            <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another Action</a>
                              <a class="dropdown-item" href="#">Something else here</a>
                              <a class="mt-2 dropdown-item" href="#">Seperated link</a>
                            </div>
                          </div>
                    </div></th>
                    </tr>
                </table>
            </div>`)
        })
    
  })
})