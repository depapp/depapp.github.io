import { Selector } from 'testcafe';

fixture `depapp's story e2e testing`
    .page `https://depapp.github.io/`;

test(`desktop : checking the elements`, async t => {
    
    const whoIs = Selector('.name');
    const myName = 'DEPA';
    const sectionTitle = Selector('.section-title').count;
    const containerBlockTitle = Selector('.container-block-title').count;

    await t
        .maximizeWindow()
        .expect(whoIs.innerText).eql(myName)
        .expect(sectionTitle).eql(3)
        .expect(containerBlockTitle).eql(2)
});

test(`android : checking the elements`, async t => {
    
    const whoIs = Selector('.name');
    const myName = 'DEPA';
    const sectionTitle = Selector('.section-title').count;
    const containerBlockTitle = Selector('.container-block-title').count;

    await t
        .resizeWindowToFitDevice('Sony Xperia Z', {
            portraitOrientation: true
        })
        .expect(whoIs.innerText).eql(myName)
        .expect(sectionTitle).eql(3)
        .expect(containerBlockTitle).eql(2)
});

test(`ios : checking the elements`, async t => {
    
    const whoIs = Selector('.name');
    const myName = 'DEPA';
    const sectionTitle = Selector('.section-title').count;
    const containerBlockTitle = Selector('.container-block-title').count;

    await t
        .resizeWindowToFitDevice('iPhone 6 Plus', {
            portraitOrientation: true
        })
        .expect(whoIs.innerText).eql(myName)
        .expect(sectionTitle).eql(3)
        .expect(containerBlockTitle).eql(2)
});