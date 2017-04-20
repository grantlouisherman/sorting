describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([2,1,4,5]) ).toEqual( [[2,1],[4,5]] );
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1,4,7],[3,8,20]) ).toEqual( [1,3,4,7,8,20] );
  });

  it('is able to merge two larger sorted arrays into one sorted array', function(){
    expect( merge([7,9,17,28,40,77],[1,2,20,21,32,50]) ).toEqual( [1,2,7,9,17,20,21,28,32,40,50,77] );
  });

  it('is able to sort a long array', function(){
    expect( mergeSort([7,9,17,28,40,77,1,2,20,21,32,50]) ).toEqual( [1,2,7,9,17,20,21,28,32,40,50,77] );
  });

  it('is able to sort an array with an odd number of indexes(?)', function(){
    expect( mergeSort([7,9,17,28,40,77,1,2,20,21,32,50,71]) ).toEqual( [1,2,7,9,17,20,21,28,32,40,50,71,77] );
  });

  it('is able to sort an array with repeats', function(){
    expect( mergeSort([7,9,17,28,40,77,1,2,20,21,32,50,71,7,7,40,2]) ).toEqual( [1,2,2,7,7,7,9,17,20,21,28,32,40,40,50,71,77] );
  });

   it('is able to sort an array with negative numbers', function(){
    expect( mergeSort([7,9,17,28,40,77,1,2,20,21,-44,32,50,71,7,7,40,2,-3]) ).toEqual( [-44,-3,1,2,2,7,7,7,9,17,20,21,28,32,40,40,50,71,77] );
  });
});