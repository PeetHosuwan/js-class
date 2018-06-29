let list =[1,2,3,4,5,6,7,8,9,"Hello"];


document.write("เลขคู่" , '<br>');
for(let i = 0 ; i < list.length ; i++)
{
    if(i%2 === 1 && list[i] !== "Hello")
    {
        document.write(list[i] , '<br>');
    }
}

document.write('<br>' , "เลขคี่" , '<br>');
for(let i = 0 ; i < list.length ; i++)
{
    if(i%2 === 0)
    {
        document.write(list[i] , '<br>');
    }
}

document.write('<br>' , "พิมพ์ Hello 7 ครั้ง" , '<br>');

for(let i = 0 ; i < 7 ; i++)
{
    document.write(list[9] , '<br>');
}

document.write('<br>' , "พิมพ์ย้อนหลัง" , '<br>');

for(let i = list.length - 1 ; i >= 0 ; i--)
{
    document.write(list[i] , '<br>');
}