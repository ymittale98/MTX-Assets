import { LightningElement } from 'lwc';

import TH_CHARACTER_IMAGE_RESOURCE from '@salesforce/resourceUrl/Trailhead_Characters'

export default class DisplayImageFromStaticResources extends LightningElement {
    charImg;
    calledOnce = false;

    renderedCallback(){
        if(!this.calledOnce){
            this.calledOnce = true;
            this.template.querySelectorAll("lightning-button").forEach((btnEle)=>{
                btnEle.addEventListener("mouseover", (event)=>{
                    this.charImg = `${TH_CHARACTER_IMAGE_RESOURCE}/Trailhead_Characters/images/${event.target.label}.png`
                })
            })
        }
    }
}