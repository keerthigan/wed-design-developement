<script>

    var modal = document.getElementById('galleryModal');
    var cap  = document.getElementById('caption');
    var img1 = document.getElementById('im1');
    var img2 = document.getElementById('im2');
    var img3 = document.getElementById('im3');
    var img4 = document.getElementById('im4');
    var img5 = document.getElementById('im5');
    var img6 = document.getElementById('im6');

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    

    function process(){
        var color = document.getElementById("color").value;
        modal.style.backgroundColor=color;
    }

    function process2(){
        var color = document.getElementById("fcolor").value;
        cap.style.color=color;

    }

    var span = document.getElementsByClassName("gallery-close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27 ) {
            modal.style.display = "none";

        }
    }
	</script>