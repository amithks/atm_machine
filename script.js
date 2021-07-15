
      document.getElementById("get-money").onclick = function(){
          var amount = document.getElementById("entered-amount").value;
            var amt1 = amount/2000;
            console.log('2000 notes');
            console.log(amt1);
            console.log(Math.floor(amt1));
            document.getElementById('note-2000').innerHTML = Math.floor(amt1) + document.getElementById('note-2000').innerHTML;
            var amt2 = amount - (Math.floor(amt1) * 2000);
            console.log('amt2');
            console.log(amt2);
            var amt3 = amt2/500;
            console.log('500 notes');
            console.log(amt3);
            document.getElementById('note-500').innerHTML = Math.floor(amt3) + document.getElementById('note-500').innerHTML;
            var amt4 = amt2 - (Math.floor(amt3) * 500);
            console.log('amt4');
            console.log(amt4);
            var amt5 = amt4/200;
            console.log('200 notes');
            console.log(amt5);
            document.getElementById('note-200').innerHTML = Math.floor(amt5) + document.getElementById('note-200').innerHTML;
            var amt6 = amt4 - (Math.floor(amt5) * 200);
            console.log('amt6');
            console.log(amt6);
            var amt7 = amt6/100;
            console.log('100 notes');
            console.log(amt7);
            document.getElementById('note-100').innerHTML = Math.floor(amt7) + document.getElementById('note-100').innerHTML;
            var amt8 = amt6 - (Math.floor(amt7) * 100);
            console.log('amt8');
            console.log(amt8);
            var amt9 = amt8/50;
            console.log('50 notes');
            console.log(amt9);
            document.getElementById('note-50').innerHTML = Math.floor(amt9) + document.getElementById('note-50').innerHTML;
            var amt10 = amt8 - (Math.floor(amt9) * 50);
            console.log('amt10');
            console.log(amt10);
            var amt11 = amt10/20;
            console.log('20 notes');
            console.log(amt11);
            document.getElementById('note-20').innerHTML = Math.floor(amt11) + document.getElementById('note-20').innerHTML;
            var amt12 = amt10 - (Math.floor(amt11) * 20);
            console.log('amt12');
            console.log(amt12);
            var amt13 = amt12/10;
            console.log('10 notes');
            console.log(amt13);
            document.getElementById('note-10').innerHTML = Math.floor(amt13) + document.getElementById('note-10').innerHTML;
            var amt14 = amt12 - (Math.floor(amt13) * 10);
            console.log('amt14');
            console.log(amt14);
            var amt15 = amt14/5;
            console.log('5 notes');
            console.log(amt15);
            document.getElementById('note-5').innerHTML = Math.floor(amt15) + document.getElementById('note-5').innerHTML;
            var amt16 = amt14 - (Math.floor(amt15) * 5);
            console.log('amt16');
            console.log(amt16);
            var amt17 = amt16/2;
            console.log('2 notes');
            console.log(amt17);
            document.getElementById('note-2').innerHTML = Math.floor(amt17) + document.getElementById('note-2').innerHTML;
            var amt18 = amt16 - (Math.floor(amt16) * 2);
            console.log('amt18');
            console.log(Math.floor(amt18));
            if (amt18 < 0){
              if ((amt18 %2) == 0){
                amt18 = 0;
              }
              else {
                amt18 = 1;
              }
            }
            console.log('post if amt18');
            console.log(amt18);
            var amt19 = amt18/1;
            console.log('1 notes');
            console.log(amt19);
            document.getElementById('note-1').innerHTML = Math.floor(amt19) + document.getElementById('note-1').innerHTML;
            var amt20 = amt18 - (Math.floor(amt19) * 1);
            console.log('amt20');
            console.log(amt20);
            var notes = (Math.floor(amt1)+ Math.floor(amt3)+ Math.floor(amt5)+ Math.floor(amt7)+ Math.floor(amt9)+ Math.floor(amt11)+ Math.floor(amt13)+ Math.floor(amt15)+ Math.floor(amt17)+ Math.floor(amt19));
            document.getElementById('total-notes').innerHTML = document.getElementById('total-notes').innerHTML + notes ;
      };