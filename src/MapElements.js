export default class MapElements {

    constructor(mapObject){
        this.mapObject = mapObject;
    }

    //    var mergedElements = noneEvolving.concat(evolvedElements).concat(evolveElements);

    getEvolvedElements(){
        return this.getEvolveElements().map(el => {
            return {
                name: el.name,
                id: (el.id + 'ev'),
                maturity: el.evolveMaturity,
                visibility: el.visibility,
                evoving: false,
                evolved: true
            };
        });
    }

    getEvolveElements(){
        return this.mapObject.elements.filter(el => el.evolving);
    }

    getNoneEvolvingElements(){
        return this.mapObject.elements.filter(el => el.evolving == false);
    }

    getNonEvolvedElements(){
        return this.getNoneEvolvingElements().concat(this.getEvolveElements());
    }

    getMergedElements(){
        var evolveElements = this.mapObject.elements.filter(el => el.evolving);
        var noneEvolving = this.mapObject.elements.filter(el => el.evolving == false);
        var evolvedElements = evolveElements.map(el => {
            return {
                name: el.name,
                id: (el.id + 'ev'),
                maturity: el.evolveMaturity,
                visibility: el.visibility,
                evoving: false,
                evolved: true
            };
        });
    
        var mergedElements = noneEvolving.concat(evolvedElements).concat(evolveElements);
        return mergedElements;
    }

}