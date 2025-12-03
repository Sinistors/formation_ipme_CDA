import { reactive } from 'vue'
import {Gift} from "@/class/Gift.ts";
import {People} from "@/class/People.ts";
import {GroupPeople} from "@/class/GroupPeople.ts";

const defaultStore = reactive({
  selfGifts:[] as Array<Gift>,
  peoples:[] as Array<People>,
  groupPeoples:[] as Array<GroupPeople>,
  currentTab: 1 as number
})

export default defaultStore;
