<script>
  import { intros } from './intro';

  let render = 0
  
  let select = intros[render]
  setInterval(() => {

    if (render <= intros.length){
      render = render+1
       select = intros[render]

    }else{
      render = 0
    }
    
  }, 5000);

  
  
</script>

<section>
  <main style="background: {select.background};" class={select.anim}>
    
    <div class="img">
      <img src={select.src} alt="cloth" >
    </div>
    <div class='intro'>
      <h1>{select.title}</h1>
    <div class='view'>
        <a href='/' >View Collection</a>
    </div>
    </div>
    
  </main>
</section>

<style scoped> 
section{
  background: var(--secondaryColor);
}

main{
  display: flex;
  align-items: center;
  width: 100vw;
  height: calc(100vh-2rem);
  padding-top: 1rem;
  background: #B2AFAF;
  padding-top: 3rem;
}
.swipe{
  animation: swipe 3s ;
}
.slide{
  animation: slide 3s ;
}

@keyframes swipe{
  from{
transform: scale(0.2);
transform: translateX(40rem);
}to{
  transform: scale(1);
  transform: translateX(0);

  }
}
@keyframes slide{
  from{
transform: translateX(-40rem);
}to{
  transform: translateX(0);

  }
}
.move{
  animation: move 3s ;
}

@keyframes move{
  from{
transform: translateY(30rem);
transform: scale(0.3);
}to{
  transform: translateY(0);
  transform: scale(1);

  }
}
.up{
  animation: up 3s ;
}

@keyframes up{
  from{
transform: translateY(-30rem);
}to{
  transform: scale(1);

  }
}


h1{
  font-size: 4rem;
}

.img{

  height: 90vh;
  border: 1px solid var(--primaryColor);
  background: var(--secondaryColor);
}

img{
  height: 100%;
}



.intro{
  margin: 0 3rem;
}

.view{
  background: #000;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 3rem 0;
  border-radius: 2rem;
  width: 20rem;

}

a{
  color: white;
}

</style>