//challenge 1

function greatestOfTwoNumbers(x, y)
{
    if(x>y)
    {
        console.log(x);
        return x;
    }
    else
    {
        console.log(y);
        return y;
    }
}

//challenge 2

function findScaryWord(words)
{
    for(let i=0;i<words.length-1;i++)
    {  
        if(words[i].length>words[i+1].length)
        {
            let temp=words[i];
            words[i]=words[i+1];
            words[i+1]=temp;
        }
    }
    let l=words.length;
    if(words[l-2].length===words[l-1].length)
    {
        return words[words.length-2];
    }
    return words[words.length-1];
}

//challenge 3

const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110]; 
function netPrice(prices)
{
    var total=0;
    for(i=0;i<prices.length;i++){
        total=total+prices[i];
    }
    return total;
}

//challenge 4

function sumOfArray(a)
{
    var total=0;
    for(let i=0;i<a.length;i++)
    {
        total=total+a[i];
    }
    let s= total/a.length;
    return s;
}

//challenge 4.1

function midPointOfLevels(a)
{
    var total=0;
    for(let i=0;i<a.length;i++)
    {
        total=total+a[i];
    }
    let s=total/a.length;
    return s;
}

//challenge 4.2

function averageWordLength(item){
    var total=0;
    for(let i=0;i<item.length;i++)
    {
        total=total+item[i].length;
    }
    return total/item.length;
}

//challenge 4.3

function add(mixedArr)
{
    let n=mixedArr.length;
    var total=0;
    for(let i=0;i<n;i++)
    {
        if(typeof mixedArr[i] == "string" )
        {
            total=total+mixedArr[i].length;
        }
        else if(typeof mixedArr[i] == "number" )
        {
            total=total+mixedArr[i];
        }
        else if(typeof mixedArr[i] == "boolean" )
        {
            total=total+mixedArr[i];
        }

    }
    return total/n;
}

//challenge 5

function uniqueArray (item)
{
    var item1=[];
    for(let i=0;i<item.length-1;i++)
    {
        for(let j=i+1;j<item.length;j++)
        {
            if(item[i]==item[j])
            {
                item[j]="false";
            }
        }
    }
    for(let i=0;i<item.length-1;i++)
    {
        if(item[i]!="false")
        {
            item1[i]=item[i];
            // console.log(item1[i]);
            // return item1[i];
        }  
        return item1;
    }
}

//challenge 6

function searchElement(word , element){
    for(let i=0;i<word.length;i++)
    {
        if(word[i]==element)
        {
            return true;
        }
    }
    return false;
}

//challenge 7

function howManyTimesElementRepeated(word,search)
{
    let total=0;
    for(let i=0;i<word.length;i++)
    {
        if(word[i]==search)
        {
            total++;
        }
    }
    return total;
}

//challenge 8

var maximumSubArray = function(array) {
    var ans = 1;
    var sum = 1;


    for (var i = 0; i < array.length; i++) {

        ans = Math.max(0, ans * array[i]);
        sum = Math.max(sum, ans);
 
    }

    return sum;

};


function maximumProduct(array)
{
    var h=[];
    var v=[];
    var max=0
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length;j++)
        {
            h.push(array[i][j]);
        }
        if(max<maximumSubArray(h))
        {
            max=maximumSubArray(h)
            var tmin=10000000;
            for(let i=0;i<h.length;i++)
            {
                if(h[i]<tmin)
                {
                    tmin=h[i];
                }
            }
            max=max/tmin;
        }
        hmatrix=[]
    }

    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length;j++)
        {
            v.push(array[j][i]);
        }
        if(max<maximumSubArray(v))
        {
            max=maximumSubArray(v)
            var tmin=10000000;
            for(let i=0;i<v.length;i++)
            {
                if(v[i]<tmin)
                {
                    tmin=v[i];
                }
            }
            max=max/tmin;
        }
        v=[]
    }
   return max
}

//challeneg 8.1 

function maximumProductOfDiagonals(array)
{
    var matrix=[]
    var matrix1=[]
    var great=1
    var great1=1

    for(let i=0;i<array.length;i++)
    {
        matrix.push(array[i][i]);
    }
    matrix.sort(function(a, b) {
        return a - b;
      });
    for(let i=0;i<4;i++)
    {
        great*=matrix[matrix.length-1-i];
    }


    for(let i=array.length-1;i>=0;i--)
    {
        matrix1.push(array[i][array.length-1-i]);
    }

    matrix1.sort(function(a, b) {
        return a - b;
      });
      
    for(let i=0;i<4;i++)
    {
        great1*=matrix1[matrix1.length-1-i];
    }
    if(great>great1)
    {
        return great
    }
    return great1
}