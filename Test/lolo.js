describe('TEST', async() => {
    let myString;

    before(async function () {
        myString = 'Test String';
    });

    after(async function() {
        endTest();
    });

    describe('First test case', async() => {
        let arr = ['12', 1, 4];
        let [a, b] = arr;
        console.log(a);
    })
});
