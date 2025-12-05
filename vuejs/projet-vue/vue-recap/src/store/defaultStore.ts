import {reactive} from "vue";

const defaultStore = reactive({
    arrayTest: [
        {name: "Nicolas", lastName: "Puissant"}
    ]
})

export default defaultStore;