import { Selector } from 'testcafe';

fixture `depapp's story e2e testing`
    .page `https://depapp.github.io/`;

    const whoIs = Selector('.name');
    const myName = 'DEPA';
    const sectionTitle = Selector('.section-title');
    const containerBlockTitle = Selector('.container-block-title');

test(`desktop : checking the elements`, async t => {

    await t
        .maximizeWindow()
        // .expect(whoIs.innerText).eql(myName)
        // .expect(sectionTitle.count).eql(3)
        // .expect(containerBlockTitle.count).eql(2)
});

test(`android : checking the elements`, async t => {
    
    await t
        .resizeWindowToFitDevice('Sony Xperia Z', {
            portraitOrientation: true
        })
        .expect(whoIs.innerText).eql(myName)
        .expect(sectionTitle.count).eql(3)
        .expect(containerBlockTitle.count).eql(2)
});

test(`ios : checking the elements`, async t => {

    await t
        .resizeWindowToFitDevice('iPhone 6 Plus', {
            portraitOrientation: true
        })
        .expect(whoIs.innerText).eql(myName)
        .expect(sectionTitle.count).eql(3)
        .expect(containerBlockTitle.count).eql(2)
});