import { createSyncV, debugSyncV } from "use-sync-v";

createSyncV("ui",{
    activeContact:null,
    phase:{},
    search:{
        searchKeyword:"",
        searchResults:[]
    },
})

export const init = ()=>{}