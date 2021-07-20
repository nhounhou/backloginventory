// const { now } = require("sequelize/types/lib/utils");

$(document).ready(function() {
    // Set the date we're counting down to
    var count = 30
    var countdown = count * 60 * 1000;
    var timerId = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

        if (countdown <= 0) {
            // alert(`${count} min!`);
            clearInterval(timerId);
            //doSomething();
        } else {
            $("#refresh").html(`refreshing in ${min}:${sec} seconds`);
        }
    }, 1000); //1000ms. = 1sec.

    const pictureArray=[
        '2560x1080-Bento.png',
        '2560x1080-MoMA.png',
        '2560x1080-Rocket.png',
        '2560x1080-Satellite.png',
        '2560x1080-Spill.png',
        'amusement park.jpg',
        'blue green building.jpg',
        'Blue-Ink-Splash.jpg',
        'BrandCalendar_wallpaper_JanFeb19_2560x1600.png',
        'Bubbles.jpg',
        'Color-Light-Waves.jpg',
        'Color-Splash.jpg',
        'Cool-Embers.jpg',
        'Eh8hK6ew_jpeg.jpg',
        'FiberOptics.jpg',
        'Flutter.jpg',
        'GLASS-BUILDING.jpeg',
        'Hexagon.jpg',
        'Idea_wallpaper_1920x1200.jpg',
        'Luminous.jpg',
        'Network-Cables.jpg',
        'Night_Low-Res.jpg',
        'Platonic.jpg',
        'Spinning.jpg',
        'TrackPoint-Stems.jpg',
        'WABS6uYA_jpeg.jpg'
    ]

    function displayPhoto() {
        // //API call to get a random picture from Pixabay
        // var apiKey="19788868-06966a58fd331eafcc5fbc91d";
        // var queryURL="https://pixabay.com/api/?key="+apiKey+"&q=lenovo&image_type=photo";
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function(response){
        //     // console.log(response);
        //     var randPic=Math.floor(Math.random() * response.hits.length);
        //     // console.log(randPic);
        //     if (response.total>0){
        //         var img=$("<img>");
        //         var imgURL=response.hits[randPic].largeImageURL;
        //         var imgDesc=response.hits[randPic].tags;
        //         // console.log(response.hits[randPic])
        //         img.attr("src",imgURL);
        //         img.attr("alt",imgDesc);
        //         img.attr("width",'200');
        //         img.attr("heigth",'450');
        //         $(".row-image").append(img);
        //         $('#photoTag').text(response.hits[randPic].tags)
        //         $('#photoHREF').attr('href',response.hits[randPic].pageURL)
        //         $('#photoHREF').attr('target','_blank')
        //     };
        // });

        // getting random pictures from folder Public/Pictures
        var displayPicture=[];
        for (var i=1;i<5;i++){
            var randPic=Math.floor(Math.random() * pictureArray.length);
            var img=$("<img>");
            var imgURL=pictureArray[randPic];
            var imgDesc=pictureArray[randPic];

            // loop to get new random picture number if already been saved in the Picture array
            while (displayPicture.indexOf(randPic) > -1) {
                // alert('before duplicate picture',randPic)
                randPic=Math.floor(Math.random() * pictureArray.length);
                // alert('New random picture',randPic)
                imgURL=pictureArray[randPic];
                imgDesc=pictureArray[randPic];    
            }

            displayPicture.push(randPic)
            img.attr('src','../pictures/'+imgURL);
            img.attr('alt',imgDesc);
            img.attr('class','hover_effect');
            $(".row-image"+i.toString()).append(img);
        }
        // $('#photoTag').text(pictureArray[randPic])
        $('#photoHREF').attr('href','http://www.lenovo.com')
        $('#photoHREF').attr('target','_blank')
    }

    displayPhoto()

    var laneNum1=$(".lane1")
    var laneNum2=$(".lane2")
    var laneNum3=$(".lane3")
    var laneNum4=$(".lane4")
    var laneNum5=$(".lane5")
    var laneNum6=$(".lane6")
    var laneNum7=$(".lane7")

    var isLane1Full=false
    var isLane2Full=false
    var isLane3Full=false
    var isLane4Full=false
    var isLane5Full=false
    var isLane6Full=false
    var isLane7Full=false
    
    var palletNum=$("#palletID")
    var palletCom=$("#comments")

    // console.log('start script.js')

    //section to declare the Modal Form
    let modalBtn = document.getElementById("modal-btn")
    let modal = document.querySelector(".modal")
    let closeBtn = document.querySelector(".close-btn")
    modalBtn.onclick = function(){
        modal.style.display = "block"
    }
    closeBtn.onclick = function(){
        modal.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modal){
            modal.style.display = "none"
        }
    }

    //section to declare the Modal Form
    let modalSubBtn = document.getElementById("modal-sub-btn")
    let modalSub = document.querySelector(".modal-sub")
    let closeSubBtn = document.querySelector(".close-sub-btn")
    modalSubBtn.onclick = function(){
        modalSub.style.display = "block"
    }
    closeSubBtn.onclick = function(){
        modalSub.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modalSub){
            modalSub.style.display = "none"
        }
    }

    //section to declare the Modal Form
    let modalLaneBtn = document.getElementById("modal-lane-btn")
    let modalLane = document.querySelector(".modal-lane")
    let closeLaneBtn = document.querySelector(".close-lane-btn")
    modalLaneBtn.onclick = function(){
        modalLane.style.display = "block"
    }
    closeLaneBtn.onclick = function(){
        modalLane.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modalLane){
            modalLane.style.display = "none"
        }
    }

    function initPallet(pallet) {
        // console.log('initPallet',pallet)
        for (var i=0;i<pallet.length;i++){
            if (!(pallet[i].date === null)){
                const palletDate=new Date(pallet[i].date)
                const nowDate=new Date()
                // console.log('date pallet',palletDate)
                // console.log('date pallet',typeof palletDate)
                // console.log('date now   ',nowDate)
                //calculate time difference  
                var timeDifference = nowDate.getTime() - palletDate.getTime();  
                //calculate days difference by dividing total milliseconds in a day  
                var daysDifference = timeDifference / (1000 * 60 * 60 * 24);  
            } else {
                var daysDifference=0
            }
            // console.log('delay day',daysDifference)
            let palletColor='';
            if (daysDifference>10) {
                palletColor="palevioletred"
            } else if (daysDifference>5) {
                palletColor="orange"
            } else {
                palletColor="lightseagreen"
            }

            const myLane=pallet[i].location.substring(4,5)
            const tiret=pallet[i].location.indexOf('-')
            const myPosition=pallet[i].location.substring(tiret+1,pallet[i].location.length)
            switch (myLane) {
                case '1':
                    // console.log('lane',myLane)
                    // console.log('pos ',myPosition)
                    // console.log('name',pallet[i].name)
                    laneNum1[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum1[0].children[parseInt(myPosition)].className="shown"
                    laneNum1[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    // console.log('    ',laneNum1)
                    break;            
                case '2':
                    laneNum2[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum2[0].children[parseInt(myPosition)].className="shown"
                    laneNum2[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    break;            
                case '3':
                    laneNum3[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum3[0].children[parseInt(myPosition)].className="shown"
                    laneNum3[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    break;            
                case '4':
                    laneNum4[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum4[0].children[parseInt(myPosition)].className="shown"
                    laneNum4[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    break;            
                case '5':
                    laneNum5[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum5[0].children[parseInt(myPosition)].className="shown"
                    laneNum5[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    break;            
                case '6':
                    laneNum6[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum6[0].children[parseInt(myPosition)].className="shown"
                    laneNum6[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    break;            
                case '7':
                    laneNum7[0].children[parseInt(myPosition)].style.backgroundColor=palletColor
                    laneNum7[0].children[parseInt(myPosition)].className="shown"
                    laneNum7[0].children[parseInt(myPosition)].textContent=pallet[i].name
                    break;            
                default:
                    break;
            }
        }

        //loop thru all lane to check is it is actually full
        for (var i=2;i<17;i++){
            if (laneNum1[0].children[i].className === 'hidden') {
                return
            }
            isLane1Full=true
        }
        for (var i=2;i<17;i++){
            if (laneNum2[0].children[i].className === 'hidden') {
                return
            }
            isLane2Full=true
        }
        for (var i=2;i<17;i++){
            if (laneNum3[0].children[i].className === 'hidden') {
                return
            }
            isLane3Full=true
        }
        for (var i=2;i<17;i++){
            if (laneNum4[0].children[i].className === 'hidden') {
                return
            }
            isLane4Full=true
        }
        for (var i=2;i<17;i++){
            if (laneNum5[0].children[i].className === 'hidden') {
                return
            }
            isLane5Full=true
        }
        for (var i=2;i<17;i++){
            if (laneNum6[0].children[i].className === 'hidden') {
                return
            }
            isLane6Full=true
        }
        for (var i=2;i<17;i++){
            if (laneNum7[0].children[i].className === 'hidden') {
                return
            }
            isLane7Full=true
        }
    };

    const checkEmptySlot = (pallet) => {
        const tablePallet=[];
        const table=[];
        const table1=[];
        const table2=[];
        const table3=[];
        const table4=[];
        const table5=[];
        const table6=[];
        const table7=[];
        const prevLane=[];
        // console.log('checkEmptySlot');
        // console.log('   before boucle per lane');
        for (var i=0;i<pallet.length;i++){
            if (prevLane[parseInt(pallet[i].location.substring(4,5))] === undefined) {
                prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
            }
            const element=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
            // console.log('lane',pallet[i].location.substring(4,5))
            // console.log('element',element)
            // console.log('1st    ',prevLane[parseInt(pallet[i].location.substring(4,5))])
            switch (pallet[i].location.substring(4,5)) {
                case '1':
                    // console.log('1st',prevLane[1])
                    if (element < prevLane[1]){
                        table1.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table1.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                case '2':
                    // console.log('1st',prevLane[2])
                    if (element < prevLane[2]){
                        table2.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table2.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                case '3':
                    // console.log('1st',prevLane[2])
                    if (element < prevLane[3]){
                        table3.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table3.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                case '4':
                    // console.log('1st',prevLane[2])
                    if (element < prevLane[4]){
                        table4.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table4.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                case '5':
                    // console.log('1st',prevLane[2])
                    if (element < prevLane[5]){
                        table5.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table5.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                case '6':
                    // console.log('1st',prevLane[2])
                    if (element < prevLane[6]){
                        table6.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table6.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                case '7':
                    // console.log('1st',prevLane[2])
                    if (element < prevLane[7]){
                        table7.unshift(pallet[i])
                        prevLane[parseInt(pallet[i].location.substring(4,5))]=parseInt(pallet[i].location.substring(6,pallet[i].location.length))
                        // console.log('unshift',element)
                    } else {
                        table7.push(pallet[i])
                        // console.log('push',element)
                    }
                    break;
                default:
                    break;
            }
        }

        for (var j=0;j<table1.length;j++){
            table1[j].location=`Lane1-${j+2}`
            tablePallet.push(table1[j])
        }
        for (var j=0;j<table2.length;j++){
            table2[j].location=`Lane2-${j+2}`
            tablePallet.push(table2[j])
        }
        for (var j=0;j<table3.length;j++){
            table3[j].location=`Lane3-${j+2}`
            tablePallet.push(table3[j])
        }
        for (var j=0;j<table4.length;j++){
            table4[j].location=`Lane4-${j+2}`
            tablePallet.push(table4[j])
        }
        for (var j=0;j<table5.length;j++){
            table5[j].location=`Lane5-${j+2}`
            tablePallet.push(table5[j])
        }
        for (var j=0;j<table6.length;j++){
            table6[j].location=`Lane6-${j+2}`
            tablePallet.push(table6[j])
        }
        for (var j=0;j<table7.length;j++){
            table7[j].location=`Lane7-${j+2}`
            tablePallet.push(table7[j])
        }

        fetch(`/api/destroy`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            response.json()
            for (var i=0;i<tablePallet.length;i++){
                let newPallet={
                    name: tablePallet[i].name,
                    location: tablePallet[i].location,
                    comment: tablePallet[i].comment,
                    date: tablePallet[i].date,
                    createdAt: tablePallet[i].createdAt,
                    updatedAt: tablePallet[i].updatedAt
                };
                submitPallet(newPallet)
            }
            initPallet(tablePallet)
        })
    };

    const getPallet = () => {
        // console.log('getPallet');
        fetch(`/api/pallets/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log('getPallet')
            if (data) {
            // console.log(`Success in grabbing all pallet`, data);
            myData=data
            $('#PalletQty').text(data.length)
            checkEmptySlot(data)
            // Populate the form with the existing post
            // titleInput.value = data.name;
            // bodyInput.value = data.comment;
            // postCategorySelect.value = data.location;
            // initPallet(data)    
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    getPallet();

    // Event handler for when a user submits a post
    const submitPallet = (pallet) => {
        // console.log('submitPallet')
        fetch('/api/pallets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pallet),
        })
        .then((response) => {
            response.json()
        })
        .then((data) => {
            console.log('Success in submitting pallet:', data);
            // window.location.href = '/';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    const createPallet = (laneNB) => {
        fetch(`/api/name/${palletNum[0].value}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then ((response) => response.json())
        .then ((data) => {
            // console.log('check pallet',data)
            // console.log('createPallet')
            if (data === null){
                const laneNum=$(`.lane${laneNB}`)
                if (palletNum[0].value.length === 0) {
                    alert('Please enter a pallet ID');
                } else {
                    // console.log('create in lane',laneNB)
                    // console.log('pallet',palletNum[0].value)
                    for (var i=1;i++;i<16){
                        if (laneNum[0].children[i].className === "hidden") {
                            // console.log("indice",i)
                            laneNum[0].children[i].className="shown"
                            laneNum[0].children[i].textContent=palletNum[0].value
                            const newPallet = {
                                name: palletNum[0].value,
                                comment: palletCom[0].value,
                                date: new Date(),
                                location: `Lane${laneNB}-${i.toString()}`
                            }
                            submitPallet(newPallet)
                            modal.style.display = "none"
                            return
                        }
                        // if (i>=15){
                        //     // isLane1Full=true
                        //     return
                        // }
                    }
                    getPallet()
                }
            } else {
                alert(`Pallet ${palletNum[0].value} already been saved in ${data.location}`)
            }
        })
    };

    $("#laneNum1").click(function(){
        // console.log('lane1 clicked')
        createPallet('1')
        // getPallet()
    });
    $("#laneNum2").click(function(){
        // console.log('lane2 clicked')
        createPallet('2')
        // getPallet()
    });
    $("#laneNum3").click(function(){
        // console.log('lane3 clicked')
        createPallet('3')
        // getPallet()
    });
    $("#laneNum4").click(function(){
        // console.log('lane4 clicked')
        createPallet('4')
        // getPallet()
    });
    $("#laneNum5").click(function(){
        // console.log('lane5 clicked')
        createPallet('5')
        // getPallet()
    });
    $("#laneNum6").click(function(){
        // console.log('lane6 clicked')
        createPallet('6')
        // getPallet()
    });
    $("#laneNum7").click(function(){
        // console.log('lane7 clicked')
        createPallet('7')
        // getPallet()
    });

    const removePallet = (palletID) => {
        // console.log('removePallet')
        fetch(`/api/pallets/${palletID}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log('getPallet')
            if (data) {
                // console.log(`Success in deleting single pallet`, data);

                // getPallet()

                // Check for empty slot in each lane


                window.location.href = '/';
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const searchPallet = (pallet) => {
        // console.log('searchPallet')
        fetch(`/api/name/${pallet}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log('getPallet')
            if (data) {
                // console.log(`Success in grabbing single pallet`, data);
        
                removePallet(data.id)
                switch (data.location.substring(4,5)) {
                    case '1':
                        isLane1Full=false
                        break;  
                    case '2':
                        isLane2Full=false
                        break;  
                    case '3':
                        isLane3Full=false
                        break;  
                    case '4':
                        isLane4Full=false
                        break;  
                    case '5':
                        isLane5Full=false
                        break;  
                    case '6':
                        isLane6Full=false
                        break;  
                    case '7':
                        isLane7Full=false
                        break;  
                }
                return
            } else {
                alert(`pallet not found`)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    $("#subPallet").click(function(){
        // console.log("Remove Pallet clicked!!!")
        // console.log('pallet scan',$('#palletSubID')[0].value)
        const palletName=$('#palletSubID')[0].value
        if (palletName === 0){
            alert("No Scan Pallet Name for Deletion")
            return
        }

        searchPallet(palletName)
    });

    const priorityLane = (laneNB) => {
        var lane=[
            {
                name: 'Lane1',
                isPriority: 0,
            },
            {
                name: 'Lane2',
                isPriority: 0,
            },
            {
                name: 'Lane3',
                isPriority: 0,
            },
            {
                name: 'Lane4',
                isPriority: 0,
            },
            {
                name: 'Lane5',
                isPriority: 0,
            },
            {
                name: 'Lane6',
                isPriority: 0,
            },
            {
                name: 'Lane7',
                isPriority: 0,
            },
        ];

        for (var i=0;i<7;i++){
            if (i===laneNB-1){
                lane[i].isPriority=true
                let j=i+1
                console.log('j',j)
                $('.lane'+j.toString()).css('background-color','cyan')
                fetch(`/api/lanes/${lane[i].name}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(lane[i]),
                })
                .then((response) => {
                    console.log('reponse API PUT')
                    $('.lane'+j.toString()).css('background-color','cyan')
                    response.json()
                })            
            } else {
                $('.lane'+i.toString()).css('background-color','white')
            }
        }
        return
    };

    $('#clearPriority').click(function(){
        // console.log('lane7 clicked')
        priorityLane(0)
        // getPallet()
    });
    $('#priorityLane1').click(function(){
        // console.log('lane7 clicked')
        priorityLane(1)
        // getPallet()
    });
    $('#priorityLane2').click(function(){
        // console.log('lane7 clicked')
        priorityLane(2)
        // getPallet()
    });
    $('#priorityLane3').click(function(){
        // console.log('lane7 clicked')
        priorityLane(3)
        // getPallet()
    });
    $('#priorityLane4').click(function(){
        // console.log('lane7 clicked')
        priorityLane(4)
        // getPallet()
    });
    $('#priorityLane5').click(function(){
        // console.log('lane7 clicked')
        priorityLane(5)
        // getPallet()
    });
    $('#priorityLane6').click(function(){
        // console.log('lane7 clicked')
        priorityLane(6)
        // getPallet()
    });
    $('#priorityLane7').click(function(){
        // console.log('lane7 clicked')
        priorityLane(7)
        // getPallet()
    });

});