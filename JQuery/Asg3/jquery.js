$('#button').on("click",function(){
       const firstname=$('#firstname').val();
    const lastname=$('#lastname').val();
        if((firstname==='') || (lastname==='')){
            alert("Please fill all the fields");
            console.log('working')
        }
    })
