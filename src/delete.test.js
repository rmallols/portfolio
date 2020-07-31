import getDevDetails from './delete';

describe('devDetails function', () => {

    it('fetches some details about R. Mallols,', () => {

        // given
        const devDetails = { id: 'rmallols' };

        // when
        const { 
            loves, learning, favAnimal 
        } = getDevDetails(devDetails);

        // then
        expect(loves).toBe('React');
        expect(learning).toEqual(['Deno', 'Vue3']);
        expect(favAnimal).toBe('Crocosaurus');
    });
});
