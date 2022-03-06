let to = 0;
        let keep = [];
        function toggle() {
            if (to == 0) {
                gf();
                to = 1;
            }
            else {
                bk();
                to = 0;
            }
        }

        function gf() {
            let test = document.getElementsByClassName("gay");

            for (let i = 0; i < test.length; i++) {
                keep.push(test[i].innerHTML);
                // keep[i] = test[i].innerHTML;
            }
            for (let i = 0; i < test.length; i++) {
                test[i].innerHTML = "ggtest" + (i + 1);
            }
            console.log(test);
        }

        function bk() {
            let test = document.getElementsByClassName("gay");
            for (let i = 0; i < test.length; i++) {
                test[i].innerHTML = keep[i];
            }
            console.log(test);
        }

        function passcheck(){
            let user = "admin";
            let pass = "1234";
            let inputuser = document.getElementById("user");
            let inputpass = document.getElementById("pass");
            console.log(inputuser.value + inputpass.value);
            if (inputuser.value == user && inputpass.value == pass){
                console.log("YAYYYYYY");
                window.location.replace("/home.html");
                //window.location.href = "https://www.google.com/";
            }
            else{
                window.location.replace("https://www.google.com/");
                console.log("FUCK YOUR MOM");
            }
        }