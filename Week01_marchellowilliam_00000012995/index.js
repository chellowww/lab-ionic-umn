var flag;
function clearr() {
    document.getElementById('input').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('list').innerHTML = "";
    document.getElementById('jumlah').innerHTML = 'Total Pengeluaran : Rp. 0,00';
    flag = 0;
    
}

   var jml;   
   jml= parseInt(0);

   function tambah() {
    if(document.getElementById('input').value == "" || document.getElementById('input2').value == ""  ){
            const alertController = document.querySelector('ion-alert-controller');
          
            const alert = alertController.create({
              header: 'Terjadi Kesalahan',
              message: 'Mohon masukan nama dan jumlah pengeluaran.',
              buttons: ['Tutup']
            }).then(alert => {
                alert.present();

            })
    }
    else{
        var li = document.createElement("ion-item");
        var inputValue = document.getElementById("input").value;
        var inputValue2 = document.getElementById("input2").value;
        var t = inputValue + "   " + "Rp." + " " + inputValue2;
        var lt = document.createTextNode(t);
        li.appendChild(lt);
       
        document.getElementById("list").appendChild(li);
        document.getElementById("input").value = "";
        document.getElementById("input2").value = "";
        
       if(flag == 0){ jml = parseInt(0);}
        jml += parseInt(inputValue2);
       var hasil =  "Total Pengeluaran  :" + " " + "Rp. " + jml +",00";
       document.getElementById('jumlah').innerHTML = hasil;
       flag = 1;
    }

    }

