<template>
  <main>
    <DashboardBar />
    <section class="navSection">
      <nav>
        <DashboardTab v-for="item in tabs" :tab="item"> </DashboardTab>
      </nav>
    </section>
    <section class="tab">
      <GiftIdea v-if="defaultStore.currentTab === 1" />
      <PeopleTab v-else-if="defaultStore.currentTab === 2" />
      <Profile v-else-if="defaultStore.currentTab === 3" />
      <Wishes v-else />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardBar from '@/component/DashboardBar.vue'
import { Tab } from '@/class/Tab.ts'
import DashboardTab from '@/component/DashboardTab.vue'
import GiftIdea from '@/tab/GiftIdea.vue'
import defaultStore from '@/store/defaultStore.ts'
import PeopleTab from '@/tab/PeopleTab.vue'
import Profile from '@/tab/Profile.vue'
import Wishes from '@/tab/Wishes.vue'
import api from '@/api/api.ts'
import apiRoutes from '@/api/routes.ts'
import { Gift } from '@/class/Gift.ts'
import { People }  from '@/class/People.ts'
import { GroupPeople } from '@/class/GroupPeople.ts'

export default defineComponent({
  name: 'Dashboard',
  computed: {
    defaultStore() {
      return defaultStore
    },
  },
  components: { Wishes, Profile, PeopleTab, GiftIdea, DashboardTab, DashboardBar },
  data() {
    return {
      tabs: [] as Array<Tab>,
    }
  },
  async mounted(): any {
    this.tabs.push(new Tab(1, 'Idées cadeaux', 'cad', 'svg1.svg'));
    this.tabs.push(new Tab(2, 'Groupes & Personnes', 'grp', 'svg2.svg'));
    this.tabs.push(new Tab(3, 'Mon profil', 'pro', 'svg3.svg'));
    this.tabs.push(new Tab(4, 'Mes souhaits', 'wsh', 'svg4.svg'));

    const selfGiftResponse = await api.get(apiRoutes.selfGift);

    for (const gift of selfGiftResponse.data)
    {
      defaultStore.selfGifts.push(new Gift(gift.id, gift.createdAt, gift.label, gift.link, gift.type));
    }

    const peoplesResponse = await api.get(apiRoutes.people);

    for (const people of peoplesResponse.data)
    {
      const gifts = [] as Array<Gift>;
      for (const gift of people.gifts)
      {
        gifts.push(new Gift(gift.id, gift.createdAt, gift.label, gift.link, gift.type));
      }

      defaultStore.peoples.push(new People(people.id, people.createdAt, people.fullName, people.orderItem, gifts ));
    }

    const groupPeopleResponse = await api.get(apiRoutes.groupPeople);

    for (const groupPeople of groupPeopleResponse.data)
    {
      const peoples = [] as Array<People>;
      for (const people of groupPeople.peoples)
      {
        const gifts = [] as Array<Gift>;
        for (const gift of people.gifts)
        {
          gifts.push(new Gift(gift.id, gift.createdAt, gift.label, gift.link, gift.type));
        }

        peoples.push(new People(people.id, people.createdAt, people.fullName, people.orderItem, gifts ));
      }

      defaultStore.groupPeoples.push(new GroupPeople(groupPeople.id,
        groupPeople.createdAt,
        groupPeople.label,
        groupPeople.orderItem,
        groupPeople.color,
        peoples));

    }
  },
})
</script>

<style scoped>
main {
  @media (width >= 1400px) {
    max-width: 1350px;
  }
  @media (width >= 1200px) and (width < 1400px) {
    max-width: 1150px;
  }
  @media (width >= 992px) and (width < 1200px) {
    max-width: 960px;
  }
  @media (width >= 768px) and (width < 992px) {
    max-width: 720px;
  }
  @media (width >= 576px) and (width < 768px) {
    max-width: 540px;
  }
  margin-right: auto;
  margin-left: auto;

  background-color: #fff;
  box-shadow: 0 4px 20px #0000001a;
}
nav {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
.navSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
