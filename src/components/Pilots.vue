<template>
    <!-- <div>
        <table>
            <ul>
                <li>Jek "Piggy" Porkins</li>
                <li>Biggs Darklighter</li>
                <li>Wes Janson</li>
                <li>Ello Asty</li>
                <li>Garven Dreis</li>
                <li>Nien Nunb</li>
                <li>Derek "Hobbie" Klivian</li>
                <li>Snap Wexley</li>
                <li>Joph Seastriker</li>
                <li>Jessika Pava</li>
                <li>Thane Kyrell</li>
                <li>Wedge Antilles</li>
            </ul>
        </table>
    </div> -->
      <div>
    <ul class="tabs__header">
      <li v-for="tab in tabs" :key="tab.title">{{ tab.title }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedIndex: 0 // the index of the selected tab,
        tabs: [],        // all of the tabs
      }
    }
  }
</script>

