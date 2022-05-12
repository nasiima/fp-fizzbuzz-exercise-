 const fb = require("./fizzbuzz");


  

 describe('testing the fizzbuzz function', () => {
    it('tests that the fizzbuzz function is defined', () => {
      expect(fb).toBeDefined()
    })
    
    it('tests that multiples of 3 and 5 will return the word fizzbuxx', () => {
        expect(fb.fizzbuzz(15)).toEqual("fizzbuzz")
        expect(fb.fizzbuzz(30)).toEqual("fizzbuzz")
       

    })

    it('tests that multiples of 3 will return the word fizz ', () => {
        expect(fb.fizzbuzz(9)).toEqual("fizz")
        expect(fb.fizzbuzz(3)).toEqual("fizz")
       

    })

    it('tests that multiples of 5 will return the word buzz ', () => {
        expect(fb.fizzbuzz(25)).toEqual("buzz")
        expect(fb.fizzbuzz(40)).toEqual("buzz")
       

    })

    it('tests that all other numbers are just logged', () => {
        expect(fb.fizzbuzz(2)).toEqual("")
        expect(fb.fizzbuzz(19)).toEqual("")
       

    })

   

})

 
   