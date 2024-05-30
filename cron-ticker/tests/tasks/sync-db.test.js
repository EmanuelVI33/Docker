const { syncDb } = require("../../tasks/sync-db");


describe('Prueba en Sync-DB', () => {
    test('debe ejecutar el proceso', () => { 
        syncDb();
        const times = syncDb();
        console.log(times);  
        expect( times ).toBe(2);
    })
});