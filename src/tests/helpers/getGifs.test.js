import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con getGifs Fecht', () => {
    test('Debe traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })
})

describe('Pruebas con getGifs Fecht sin argumento', () => {
    test('Debe traer 0 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})