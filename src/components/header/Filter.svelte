<script>
  import ChangeCurrency from "./ChangeCurrency.svelte";


  import MenuButton from "./MenuButton.svelte";
  import SearchAndCategories from "./SearchAndCategories.svelte";
  import Total from "./Total.svelte";
  import UserStuff from "./UserStuff.svelte";

</script>
<main>
  <MenuButton />
  <SearchAndCategories />
  <ChangeCurrency />
  <UserStuff />
  <Total />

</main>

<style scoped>
  main{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
</style>