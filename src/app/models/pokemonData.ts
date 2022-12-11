export type PokemonData = {
  
  types:{
    slot:number,
    type:{
      name:string
    }
  }[]  
  sprites:{
    other:{
      home:{
        front_default:string
      }
    }
  }
  name:string
  id:number
}