$(document).ready(function () {
    //=======
    var firebaseConfig = {
        apiKey: 'AIzaSyDf5ZP9DsYk5lxL4YcMhGdp6WLY2SOtF90',
        authDomain: 'let-s-buy-bdbd8.firebaseapp.com',
        projectId: 'let-s-buy-bdbd8',
        storageBucket: 'let-s-buy-bdbd8.appspot.com',
        messagingSenderId: '685800262434',
        appId: '1:685800262434:web:40a95f917d29eb93e8337b',
        measurementId: 'G-L8FM8EZJBY',
    };



    firebase.initializeApp(firebaseConfig);
    let firebase1 = firebase.database().ref();
    //        let firebaseId = firebase.database().ref('cartId1');
    firebase1.on('value', function (snapshot) {
        let pro = 'product1/fields';
        data = snapshot.val();
        //console.log(data[`u_name${5}`]);
        $('.anser').html("");
        $.each(data, function (index, ele) {
            if (index.includes('u_name')) {
                let question = ele._question;
                let username = ele._username;
                //console.log(username, question);
                draw(username, question);


            }
        });



        //=====
        function getcounter() {
            let counter = localStorage.getItem('counter');
            counter++
            localStorage.setItem('counter', counter);

            return counter;
        }
        console.log(getcounter());
        //localStorage.setItem('counter', 0);

        $(".send").on('click', function () {
            let username = $("#uname").val();
            let question = $("#ask").val();

            function writeUserData(username, question) {
                firebase.database().ref(`u_name${getcounter()}`).set({
                    _username: username,
                    _question: question
                });
            }

            writeUserData(username, question);
            $("#uname").val("");
            $("#ask").val("");
        });

    });


    //Animation 
    //1 Resizeing

    let askarea = $(".askarea");
    let inputfild = $(".inputfild")
    inputfild.on("mouseover", function () {

        big(inputfild, 500);

    });
    inputfild.on("mouseout", function () {



        small(inputfild, 200);


    });

    //=========

    inputfild.on("mouseover", function () {

        big(askarea, 1000);

    });
    askarea.on("mouseout", function () {



        small(askarea, 240);


    });
    //======slid
    let cards = $(".card");

    cards.animate("slow", function () {
        cards.fadeIn(7000);
        cards.slideDown(10000);


    });
    //    cards.scroll(
    //        function () {
    //            cards.slideToggle(2000);
    //        })


    //    $("h2").animate("slow", function () {
    //        setInterval(function () {
    //            $("h2").css(
    //                'background-color': 'aqua');
    //
    //            $("h2").css(
    //                'background-color': 'red');
    //        }, 2000);
    //
    //    });





});
//=======functions

function big(classname, x) {
    classname.animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: x
    }, "slow");

}

function small(classname, x) {
    classname.animate({
        backgroundColor: "#fff",
        color: "#000",
        width: x
    }, "slow");

}


function draw(uname, quset) {

    let dr = `<div>
            <div class="badge badge-info id="u_name">Name:${uname}</div>
        <br>
        <textarea class="Area form-control"  rows="2" id="comment" readonly>${quset}</textarea>
           </div> <hr class="mt-2 mb-3"/>
 `;

    $('.anser').append(dr);
}
