import { LightningElement } from 'lwc';

export default class NavParentComponent extends LightningElement {
    selectedPlayers=null;
    playerList=[
        {
            id:1,
            name:'virat kohli',
            country :'india',
            ipl :'RCB'
        },
        {
            id:2,
            name:'steve smith',
            country :'australia',
            ipl :'DC'
        },
        {
            id:3,
            name:'kan williamson',
            country :'newzeland',
            ipl :'SRH'
        },
        {
            id:4,
            name:'rohit sharma',
            country :'india',
            ipl :'MI'
        }
    ]

    selectPlayer(event){
        const playerName= event.detail
        this.selectedPlayers= this.playerList.find(item=>item.name === playerName)
    }
}