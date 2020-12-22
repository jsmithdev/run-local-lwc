import { api, LightningElement } from 'lwc';

export default class RunLocal extends LightningElement {
    @api header = 'default'
    @api label
    @api address = 'localhost:4242/runner'
    @api recordId

    async run(){

        console.log('ello')

        const response = await fetch(this.address, {
            method: 'GET',
        })

        alert(JSON.stringify( await response.json() ))
    }
}