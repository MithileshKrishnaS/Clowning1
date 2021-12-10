//challenge 1 test

describe('Greater of two numbers',function()
{
    it('find greatest of two numbers',function()
    {
        var a=1,b=2;
        expect(greatestOfTwoNumbers(a,b)).toBe(b);
        expect(greatestOfTwoNumbers(2,3)).toBe(3);
        expect(greatestOfTwoNumbers(2,4)).toBe(4);
        expect(greatestOfTwoNumbers(6,1)).toBe(1);
    });
})

//challenge 2 test

describe('lengthy word',function(){
    it('find  lengthy word in an array',function()
    {
        const words = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony']; 
        const words1 = ['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony' ,'aaaaaaaaaaaaaa']; 
        expect(findScaryWord(words)).toBe('LourdhAntony');
        expect(findScaryWord(words1)).toBe('LourdhAntony');
    })
})

//challenge 3 test

describe('Net Price', function(){
    it('adding each of the elements in an array',function()
    {
        const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110]; 
        const p1=[10,10,10,10,10]
        expect(netPrice(prices)).toBe(1210);
        expect(netPrice(prices)).toBe(1000);
        expect(netPrice(p1)).toBe(50);
        expect(netPrice(p1)).toBe(60);
    })
})

//challenge 4 test

describe('mid point',function(){
    it('find the mid value of an array', function(){
        const arr=[1,2,3,4,5,6];
        expect(sumOfArray(arr)).toBe(3.5);
        expect(sumOfArray(arr)).toBe(4);
    })
})

//challenge 4.1 test

describe('Array of numbers average', function() {
    it('find the average in array of numbers', function(){
        const levels = [22, 16, 9, 10, 7, 14, 11, 9]; 
        const levels1 = [20, 10, 10, 30, 10]; 
        const levels2 = [1 ,1]; 
        expect(midPointOfLevels(levels)).toBe(12.25);
        expect(midPointOfLevels(levels)).toBe(12.36);
        expect(midPointOfLevels(levels1)).toBe(16);
        expect(midPointOfLevels(levels2)).toBe(1);
        expect(midPointOfLevels(levels2)).toBe(2);
    })
})

//challenge 4.2 test

describe('average length of words', function() {
    it(' find the average length of words', function(){
        const items = ['bread','jam', 'milk', 'egg', 'flour', 'oil', 'rice','coffee powder', 'sugar', 'salt'];         
        expect(averageWordLength(items)).toBe(5);
    })

    it('find the average length of words', function(){
        const levels = ['22', '16', '91', '10', '17', '14', '11', '90']; 
        expect(averageWordLength(levels)).toBe(1.625);
        expect(averageWordLength(levels)).toBe(2);
    })
})

//challenge 4.3 test

describe('A generic avg() function ', function() {
    it('Find the average of array with different data types', function(){
        const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];  
        const mixedArr1 = [63, 122, 'wagon', 61, true, 'volvo', '20', 'porche', 38, 156]; 
        expect(add(mixedArr)).toBe(46.3);
        expect(add(mixedArr1)).toBe(45.9);
        expect(add(mixedArr1)).toBe(45);
    })
})

//challenge 5 test

describe(' Unique arrays ', function() {
    it(' Unique arrays ', function(){
        const items = [ 
            'bread', 
            'jam', 
            'milk', 
            'egg', 
            'flour', 
            'oil', 
            'rice', 
            'coffee powder', 
            'sugar', 
            'salt', 
            'egg', 
            'flour' 
        ];         
        expect(uniqueArray (items)).toEqual['bread',
        'jam',
        'milk',
        'egg',
        'flour',
        'oil',
        'rice',
        'coffee powder',
        'sugar',
        'salt'];
    })
})

//challenge 6 test

describe('Find elements  ', function() {
    it('Find elements present in array', function(){
        const words = [ 
            'door', 
            'window', 
            'ceiling', 
            'roof', 
            'plinth', 
            'tiles', 
            'ceiling', 
            'flooring' 
            ]; 
        
        var element="roof";
        expect(searchElement(words,element)).toBe(true);
    })
})


//challenege 7 test

describe('Count repeated elements   ', function() {
    it('Count repeated elements  present in array', function(){
        const words = [ 
            'machine', 
            'matter', 
            'subset', 
            'trouble', 
            'starting', 
            'matter', 
            'eating', 
            'matter', 
            'truth', 
            'disobedience', 
            'matter' 
        ];
        
        var search="matter";
        expect(howManyTimesElementRepeated(words,search)).toBe(2);
        expect(howManyTimesElementRepeated(words,search)).toBe(4);
    })
})

//challenge 8 test

describe('Product of adjacent numbers ', function() {
    it('Product of adjacent numbers  ', function(){
        const array=[
            [ 1, 2, 3, 4, 5] ,
            
            [ 2, 95, 3, 4, 5] ,
            
            [ 6, 20, 3, 4, 5] ,
            
            [ 8, 20, 37, 4, 5] ,
            
            [ 8, 4, 3, 7, 6] 
            ]
        expect(maximumProduct(array)).toBe(62208000000000);
        expect(maximumProduct(array)).toBe(47020887244);
    })
})

//challenge 8.1 test

describe('Product of diagonals ', function() {
    it('Product of diagonals ', function(){
        const array=[
            [ 1, 2, 3, 4, 5] ,
            
            [ 2, 95, 3, 4, 5] ,
            
            [ 6, 20, 3, 4, 5] ,
            
            [ 8, 20, 37, 4, 5] ,
            
            [ 8, 4, 3, 7, 6] 
            ]
        expect(maximumProductOfDiagonals(array)).toBe(62208000000000);
        expect(maximumProductOfDiagonals(array)).toBe(47020887244);
    })
})