var i,j;
var s=" ";
for (j = 1; j < 11; j +=1) {
for (i = 1; i < 11; i +=1) {
s=s+ "  ";
if(i*j<10)s=s+" ";
s=s+i*j;
}s=s+"\n ";}
  console.log(s);
