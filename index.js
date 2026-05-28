 function counter(id,start,end,speed) {
        let count = start;
        let interval = setInterval(function(){
            document.getElementById(id).innerHTML= count;
            
            count++;
            if (count > end) {
                clearInterval(interval);
            }
        },speed);
        
    }

    counter("total",1,120,20);
    counter("resolved",1,80,25);
    counter("pending",1,30,40);
    counter("progress",1,10,80);

    function checkLogin(){
        alert("⚠ Please login first");
        window.location.href = "login.html"
    }