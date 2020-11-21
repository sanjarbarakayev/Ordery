<template>
	<div>
		<v-row class="pa-0">
			<v-col class="pa-0" :cols="3" >
				<drawer></drawer>
			</v-col>
			<v-col :cols="9">
        <slot />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer.vue";

export default {
  nama: "SettingsLayout",
  components: {
    Drawer,
  },
};
</script>

<style>
</style>