<script>
  import EmptyCart from "./EmptyCart.svelte";
  import {openCart,product} from '../../database/store'
  import CartDetails from "./CartDetails.svelte";

  function hideShowCart(){
    openCart.update(r=>r=false)
  }
</script>
<main>
    <button on:click={hideShowCart} >
k
  </button>
  
  <section>
    {#if $product.length > 0}
      <CartDetails />
      {:else}
      <EmptyCart />
    {/if}

   </section>
</main>

<style scoped>
  main{

    width: 100vw;
    height: 100vh;
    background: #20202094;
    z-index: 100;
    position: fixed;
    top: 0;
    display: flex;
    align-items: end;
  }

   button{
    height: 100%;
    width: 100%;
    border: 0;
    background: transparent;
  }
  

    section{
    width: 40rem;
    height: 100%;
    background: white;
    right: 0;
    margin: 0;
  }
</style>