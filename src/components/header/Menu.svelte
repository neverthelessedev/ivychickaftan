<script>

  import { navigation } from './navigation';

    import {openMenu} from '../../database/store'

  function openMenuPage(){
    openMenu.set(false)
  }

</script>

<main>
  <section >
    <p class="logo">ivychickaftan</p>

    {#each navigation as navigate}
<a href={`/ivychickaftan?${navigate.link}`} class="icon-container" style="background: {navigate.id == 1 &&'var(--secondaryColor)' };color: {navigate.id == 1 ?'white' : 'black' };">
  <div class='icon'>
    <navigate.icon   class='icon' 
    style="font-size: 2rem; width:2rem"
    />
  </div>
  <p class='title'>{navigate.name}</p>
</a>
    {/each}
    
    <!-- <FaHome /> -->

  </section>
  <button on:click={openMenuPage} >
j
  </button>

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
  }

  button{
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: 0;
  }
  

  .title{
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-left: 10px;
  }

  .icon-container{
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid var(--primaryColor);
  }
  .icon-container:hover{
    background: var(--tertiaryColor);
    transition: all ease 0.7s;
    color: white;
  }

  .icon{
    width: 3rem;
    height: 3rem;
  }

  section{
    width: 26rem;
    height: 100%;
    background: white;
    margin: 0;
  }

  .logo{
    font-size: 3rem;
    padding:20px  10px;
    border-bottom: 1px solid var(--primaryColor);
  }
  @media(max-width: 675px){
    .icon{
      width: 2rem;
      height: 2rem;
    }
    .title{
      font-size: 1rem;
    }
    section{
      width: 20rem;
    }

    .logo{
      font-size: 1.5rem;
    }
    
  }
  
</style>