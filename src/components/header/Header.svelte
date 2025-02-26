<script>
  import Logo from './Logo.svelte';
  import Filter from './Filter.svelte';
  import Menu from './Menu.svelte';
  import {openMenu,openCart} from '../../database/store'
  import CartItem from './CartItem.svelte';
  
</script>

<div>
  {#if $openMenu}
  <Menu />
  {/if}
  <header>
    <Logo />
    <Filter />
  </header>
  <main></main>
  {#if $openCart}
  <CartItem />
  {/if}
</div>

<style scoped>


  header{
    position: fixed;
    width: 100vw;
    background: white;
    box-shadow: 0px 0px 5px var(--primaryColor);
    display: flex;
    align-items: center;
    justify-content: space-between ;
    z-index: 20;
    padding: 4px;
    animation: up 2s;
  }

  @keyframes up{
    from{
transform: translateY(-20rem);
}to{
      transform: translateY(0 );

    }
  }

  main{
    width: 100vw;
    height: 4rem;
  }

 
  
</style>