
describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

   it('handles an three element array', function(){
    expect( bubbleSort([2,1,5]) ).toEqual( [1,2,5] );
  });

  it('handles an one element array', function(){
    expect( bubbleSort([100]) ).toEqual( [100] );
  });

   it('handles an ten element array', function(){
    expect( bubbleSort([100,5,3,4,14,29,18,7]) ).toEqual( [3,4,5,7,14,18,29,100] );
  });

    it('handles an one hundred element array', function(){
    expect( bubbleSort([5, 79, 92, 58, 25, 15, 75, 57, 42, 30, 26, 13, 52, 19, 22, 17, 24, 16, 17, 9, 65, 78, 87, 32, 27, 81, 92, 81, 87, 34, 90, 96, 9, 76, 29, 53, 38, 9, 36, 40, 68, 1, 28, 58, 57, 45, 87, 31, 69, 27, 53, 19, 39, 86, 37, 58, 1, 17, 32, 34, 38, 87, 28, 89, 30, 34, 56, 1, 99, 57, 73, 51, 36, 20, 65, 100, 36, 12, 20, 9, 93, 71, 76, 63, 68, 7, 45, 69, 87, 60, 74, 74, 64, 60, 67, 30, 39, 89, 59, 39]) ).toEqual( [1, 1, 1, 5, 7, 9, 9, 9, 9, 12, 13, 15, 16, 17, 17, 17, 19, 19, 20, 20, 22, 24, 25, 26, 27, 27, 28, 28, 29, 30, 30, 30, 31, 32, 32, 34, 34, 34, 36, 36, 36, 37, 38, 38, 39, 39, 39, 40, 42, 45, 45, 51, 52, 53, 53, 56, 57, 57, 57, 58, 58, 58, 59, 60, 60, 63, 64, 65, 65, 67, 68, 68, 69, 69, 71, 73, 74, 74, 75, 76, 76, 78, 79, 81, 81, 86, 87, 87, 87, 87, 87, 89, 89, 90, 92, 92, 93, 96, 99, 100] );
  });


});

