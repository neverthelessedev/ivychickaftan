<script>
  import {FaAlignJustify} from 'svelte-icons/fa'
  import {openMenu} from '../../database/store'

  function openMenuPage(){
    openMenu.set(true)
  }

</script>

<button on:click={openMenuPage}>
  <abbr title="menu" class="menu">
    <FaAlignJustify />
  </abbr>
  <p>menu</p>
</button>

<style scoped>
  button{
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1rem;
    p{
font-size: 2rem;
text-transform: uppercase;
margin: 0 2rem;
    }
    
  }
  
.menu{
  width: 3rem;
height: 3rem;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid var(--primaryColor);
}

 @media(max-width: 1442px){
    p{
      display: none;
    }
    .menu{
      width: 2rem;
      height: 2rem;
      padding: 5px;
    }
  }

</style>