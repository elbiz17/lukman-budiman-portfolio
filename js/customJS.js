// // ambil elemen yang dibutuhkan

// var keyword = document.getElementById('keyword');
// var tombolCari = document.getElementById('tombol-cari');
// var container = document.getElementById('container');

// //tambahkan event ketika keyword ditulis

// keyword.addEventListener('keyup', function(){
//    //buat objek ajax
//    var xhr = new XMLHttpRequest();

//    //cek kesiapan ajax

//    xhr.onreadystatechange = function(){
//       if(xhr.readyState == 4 && xhr.status == 200){
//          container.innerHTML = xhr.responseText;
//       }
//    }

//    //eksekusi ajax

//    xhr.open('GET', 'ajax/mahasiswa.php?keyword=' + keyword.value, true);
//    xhr.send();



// });


$(document).ready(function(){
   //hilangkan tombol cari
   $('#tombol-cari').hide();

  //event ketika keywor ditulis

  $('#keyword').on('keyup', function(){
     //munculkan icon loading

   $('.loader').show();
     //ajax menggunakan load
   //   $('#container').load('ajax/mahasiswa.php?keyword=' + $('#keyword').val());
   $.get('ajax/mahasiswa.php?keyword=' + $('#keyword').val(), function(data){
      $('#container').html(data);
      $('.loader').hide();
   })

  
  
   });

});




function openNav() {
   document.getElementById("mySidebar").style.width = "200px";
   document.getElementById("navbar").style.marginLeft = "200px";
   document.getElementById("span").style.marginLeft = "200px";
 }
 
 function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   
   document.getElementById("navbar").style.marginLeft= "0";
  //  documnet.getElementById("content").style.marginRight= "0";
   document.getElementById("span").style.marginLeft= "0";
 }



 function openBtn(){
   document.getElementById("span").innerHTML = "&#9776;Close";
 }
 function closeBtn(){
   document.getElementById("span").innerHTML = "&#9776;Open";
 }




function toggleNav(){
  var x = document.getElementById("mySidebar");

  if (x.style.width === "200px") {

    closeNav();
    closeBtn();
  } else {

    openNav();
    openBtn();
  }
}


// function darkMode() {
//   var element = document.body;
//   element.classList.toggle("dark");
//   }


// sidebar
function dropBtn(){
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
  }
}


  function darkMode1() {
    var element = document.getElementById('navbar');
  
    
    
    element.classList.toggle("dark-mode1");
    }
  function darkMode2() {
    var element = document.getElementById('container');
  
    
    
    element.classList.toggle("dark-mode2");
    }
  function darkMode3() {
    var element = document.getElementById('mySidebar');
  
    
    
    element.classList.toggle("dark-mode3");
    }
  function darkMode4() {
    var element = document.getElementById('form');
  
    
    
    element.classList.toggle("dark-mode4");
    }
  function darkMode5() {
    var element = document.getElementById('footer');
  
    
    
    element.classList.toggle("dark-mode5");
    }
  
  function switchMode(){
    var x = document.getElementById('btnMode');
    if(x.style.display == "none"){
      
      
    }else{
      darkMode2();
      darkMode1();
      darkMode3();
      darkMode4();
      darkMode5();
    }
  }

 
  