<template>
	<div>
		<v-row class="pa-0">
			<v-col class="pa-0" :cols="3" >
				<drawer></drawer>
			</v-col>
			<v-col :cols="9">
				<toolbar></toolbar>
        <slot />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer.vue";
import Toolbar from "@/components/Toolbar.vue";

export default {
  nama: "MainLayout",
  components: {
    Drawer,
    Toolbar,
  },
};
</script>

<style>
</style>