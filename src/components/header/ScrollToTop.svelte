<script>
  import FaAngleDoubleDown from 'svelte-icons/fa/FaAngleDoubleDown.svelte';
  let show = false

  window.addEventListener('scroll',()=>{
       if (window.scrollY > 500) {
        show = true
      } else {
        show = false
      }
    }
  )
  
  function scrollToTop(){
  
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  
</script>

<main >
  <button on:click={scrollToTop} style="transform: {show ? 'translateX(0)' : 'translateX(-10rem)'};">
    <FaAngleDoubleDown />
  </button>
</main>
<style>

 
  
button{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transform: translateX();
  background: var(--secondaryColor);
  overflow: hidden;
  position: fixed;
  bottom: 10px;
  padding: 10px;
  color: white;
  margin: 3rem;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 60;
}
button:hover{
  background: var(--tertiaryColor);
  
}

</style>