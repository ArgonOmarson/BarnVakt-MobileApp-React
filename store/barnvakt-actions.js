export const ADD_BARNVAKT = 'ADD_BARNVAKT'

export const addBarnvakt =(namn, disc, image, tele)=>{
    return {type: ADD_BARNVAKT,BarnvaktData : {namn:namn, disc:disc, image:image, tele:tele}}
}