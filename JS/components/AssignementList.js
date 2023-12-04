export default {
  components: {},
  template: `
    <h1 class="text-red-500 font-bold mb-4" v-show="assignements.length">{{title}}[{{assignements.length}}]</h1>
    <div class="mb-2 flex   space-x-2" >
        <div class='border rounded-md p-2'  v-for="tag in tags" @click="newItem=tag">{{tag}}</div>
    </div>
    <ul>
      <div class="flex justify-between border p-2" v-for="assignement in assignements" :key="assignement.id">
        <li :class="{'line-through':linethrough}">{{assignement.title}}</li>
        <input type="checkbox" v-model="assignement.complete"/>
      </div>
      {{showI}}
    </ul>
   
    `,
  data() {
    return {
      newItem: "",
    };
  },
  props: {
    linethrough: Array,
    assignements: Array,
    title: String,
  },
  computed: {
    change() {
      return this.assignements.filter((x) => x.tag == this.newItem);
    },
    tags() {
      return new Set(this.assignements.map((x) => x.tag));
    },
    showI() {
      console.log(this.assignements.filter((x) => x.tag == this.newItem));
    },
  },
};
