function getPhotos() {
    // call API : Photos data

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        dataType: 'json',
        crossDomain: true,
        type: 'GET',
        async: true,

        beforeSend: function() {
            console.log("before sending request");
            $(".loder-img").show();
        },

        success: function(resData) {
            console.log(resData)
            console.log(resData[0]);

            $(".loder-img").hide();

            updateWebpage(resData);

        },

        error: function(errorMsg) {
            console.log(errorMsg)
        }

    });


}

function updateWebpage(dataArray) {
    var viewHtml = '';

    for (let item of dataArray) {

        viewHtml = viewHtml + `
            <div class="card" style="width: 260px; margin: 15px; ">
                <img src="${ item.thumbnailUrl }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Album ID: ${item.albumId} </h5>
                    <div class="card-text">
                        <p>Photo ID: ${item.id } </p>
                    </div>
                </div>
            </div>
        `;
    }

    $("#data-holder").html(viewHtml);
}

function search() {
    /*
    1 => 40,000
    10 => 40,000
    100 => 40,000
    1000 => 40,000

    debouncing
    throtlling

            var timer;
            search(val){
              

                //10
                
        clearTimeout(timer);
        timer = setTimeout(function(){ 
            
            data.filter(  (e)=> return e.id==val   );
            
            console.log("searching ")

        }, 500 )
    */




}