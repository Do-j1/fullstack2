        var f = false;
        function runApp() {
            f = !f;
            if (f) {
                document.getElementById("d1").src = "on.jpg"
            }
            else {
                document.getElementById("d1").src = "off.jpg"
            }
        }
        
        function myf(){
            document.getElementById("d3").value =document.getElementById("d2").value
        }